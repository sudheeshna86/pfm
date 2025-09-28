import React, { useState } from 'react';
import { Download, Calendar, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { monthlySpending, spendingByCategory, mockTransactions } from '../data/mockData';
import { BarChart, PieChart } from './Chart';

export function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  // Calculate insights
  const thisMonthExpenses = monthlySpending[monthlySpending.length - 1]?.expenses || 0;
  const lastMonthExpenses = monthlySpending[monthlySpending.length - 2]?.expenses || 0;
  const expenseChange = lastMonthExpenses
    ? ((thisMonthExpenses - lastMonthExpenses) / lastMonthExpenses) * 100
    : 0;
  e
  const thisMonthIncome = monthlySpending[monthlySpending.length - 1]?.income || 0;
  const savingsRate = thisMonthIncome ? ((thisMonthIncome - thisMonthExpenses) / thisMonthIncome) * 100 : 0;
  
  const topCategory = spendingByCategory.reduce((prev, current) => 
    prev.amount > current.amount ? prev : current
  );

  const insights = [
    {
      title: 'Monthly Spending Change',
      value: `${expenseChange >= 0 ? '+' : ''}${expenseChange.toFixed(1)}%`,
      description: `vs last month`,
      color: expenseChange >= 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400',
      bgColor: expenseChange >= 0 ? 'bg-red-100 dark:bg-red-900' : 'bg-green-100 dark:bg-green-900',
      icon: expenseChange >= 0 ? ArrowUpRight : ArrowDownRight
    },
    {
      title: 'Savings Rate',
      value: `${savingsRate.toFixed(1)}%`,
      description: 'of income saved',
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900',
      icon: TrendingUp
    },
    {
      title: 'Top Spending Category',
      value: topCategory.category,
      description: `$${topCategory.amount.toLocaleString()} (${topCategory.percentage}%)`,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      icon: TrendingUp
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports & Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">Comprehensive insights into your financial health</p>
        </div>
        <div className="flex space-x-3 mt-4 sm:mt-0">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${insight.bgColor}`}>
                  <Icon className={`w-6 h-6 ${insight.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{insight.title}</p>
                  <p className={`text-2xl font-bold ${insight.color}`}>
                    {insight.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{insight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Income vs Expenses Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Income vs Expenses</h2>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4 mr-1" />
              Last 6 months
            </div>
          </div>
          <BarChart data={monthlySpending} />
        </div>

        {/* Spending by Category */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Spending Breakdown</h2>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4 mr-1" />
              {currentMonth}
            </div>
          </div>
          <PieChart 
            data={spendingByCategory.map(item => ({
              label: item.category,
              value: item.amount,
              color: item.color
            }))}
            size={200}
          />
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Detailed Analysis</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spending Trends */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Spending Trends</h3>
              <div className="space-y-4">
                {spendingByCategory.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: category.color }}
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{category.category}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {category.percentage}% of total spending
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900 dark:text-white">
                        ${category.amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Health Score */}
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Financial Health Score</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-green-900 dark:text-green-100">Savings Rate</span>
                    <span className="text-green-600 dark:text-green-400 font-bold">Excellent</span>
                  </div>
                  <div className="w-full bg-green-200 dark:bg-green-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${savingsRate}%` }} />
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    You're saving {savingsRate.toFixed(1)}% of your income
                  </p>
                </div>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-amber-900 dark:text-amber-100">Expense Ratio</span>
                    <span className="text-amber-600 dark:text-amber-400 font-bold">Good</span>
                  </div>
                  <div className="w-full bg-amber-200 dark:bg-amber-800 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '75%' }} />
                  </div>
                  <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                    Your expenses are well-managed
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-blue-900 dark:text-blue-100">Budget Adherence</span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">Very Good</span>
                  </div>
                  <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82%' }} />
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                    You're staying within 82% of your budgets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">💡 Personalized Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Reduce Dining Expenses</h4>
            <p className="text-sm text-blue-100">
              You spent 93% of your dining budget. Try meal planning to save $50-100 next month.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Optimize Emergency Fund</h4>
            <p className="text-sm text-blue-100">
              You're 86% toward your emergency fund goal. Consider automating $200/month to reach it faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
