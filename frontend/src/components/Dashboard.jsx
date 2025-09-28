import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Plus, Eye, EyeOff, Bell } from 'lucide-react';
import { mockAccounts, mockTransactions, mockBudgets, mockGoals, mockBills, spendingByCategory } from '../data/mockData';
import { ProgressBar } from './ProgressBar';
import { PieChart } from './Chart';

export function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);
  
  const totalBalance = mockAccounts.reduce((sum, account) => {
    return sum + account.balance;
  }, 0);
  
  const recentTransactions = mockTransactions.slice(0, 5);
  const upcomingBills = mockBills.filter(bill => bill.status !== 'paid').slice(0, 3);
  const activeGoals = mockGoals.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's your financial overview.</p>
        </div>
        <button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
          <Plus className="w-4 h-4 mr-2" />
          Add Transaction
        </button>
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-blue-100 text-sm">Total Balance</p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold">
                  {showBalance ? `$${totalBalance.toLocaleString()}` : '••••••'}
                </h3>
                <button 
                  onClick={() => setShowBalance(!showBalance)}
                  className="ml-2 p-1 hover:bg-blue-400 rounded"
                >
                  {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6 text-blue-200" />
          </div>
          <div className="flex items-center">
            <span className="text-green-200 text-sm">+2.5%</span>
            <span className="text-blue-100 text-sm ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">This Month Income</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$3,200</h3>
            </div>
            <ArrowUpRight className="w-6 h-6 text-green-500" />
          </div>
          <div className="flex items-center">
            <span className="text-green-600 text-sm">+8.2%</span>
            <span className="text-gray-500 text-sm ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">This Month Expenses</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$1,867</h3>
            </div>
            <ArrowDownRight className="w-6 h-6 text-red-500" />
          </div>
          <div className="flex items-center">
            <span className="text-red-600 text-sm">+12.3%</span>
            <span className="text-gray-500 text-sm ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Savings Rate</p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">41.7%</h3>
            </div>
            <ArrowUpRight className="w-6 h-6 text-emerald-500" />
          </div>
          <ProgressBar value={41.7} max={100} color="#10B981" className="mt-2" />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Transactions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
                  }`}>
                    {transaction.type === 'income' ? (
                      <ArrowUpRight className="w-5 h-5 text-green-600 dark:text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900 dark:text-white">{transaction.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    transaction.amount > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.account}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spending Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Spending by Category</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Details</button>
          </div>
          <PieChart 
            data={spendingByCategory.map(item => ({
              label: item.category,
              value: item.amount,
              color: item.color
            }))}
            size={160}
          />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Goals Progress */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Goals Progress</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-6">
            {activeGoals.map((goal) => (
              <div key={goal.id}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900 dark:text-white">{goal.name}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                  </span>
                </div>
                <ProgressBar 
                  value={goal.current} 
                  max={goal.target} 
                  color={goal.color}
                  showPercentage
                />
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Bills */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Bills</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {upcomingBills.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    bill.status === 'overdue' ? 'bg-red-100 dark:bg-red-900' : 'bg-amber-100 dark:bg-amber-900'
                  }`}>
                    <Bell className={`w-5 h-5 ${
                      bill.status === 'overdue' ? 'text-red-600 dark:text-red-400' : 'text-amber-600 dark:text-amber-400'
                    }`} />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900 dark:text-white">{bill.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Due {bill.dueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">${bill.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    bill.status === 'overdue' 
                      ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
                      : 'bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400'
                  }`}>
                    {bill.status === 'overdue' ? 'Overdue' : 'Due Soon'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors text-center">
              <Plus className="w-6 h-6 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Add Transaction</span>
            </button>
            <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors text-center">
              <Plus className="w-6 h-6 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Set Goal</span>
            </button>
            <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors text-center">
              <Plus className="w-6 h-6 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Add Budget</span>
            </button>
            <button className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors text-center">
              <Plus className="w-6 h-6 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Link Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
