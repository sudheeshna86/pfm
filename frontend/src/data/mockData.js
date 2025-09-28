export const mockAccounts = [
  {
    id: '1',
    name: 'Main Checking',
    type: 'checking',
    balance: 12450.30,
    bank: 'Chase Bank',
    lastUpdated: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Emergency Savings',
    type: 'savings',
    balance: 25800.00,
    bank: 'Bank of America',
    lastUpdated: '2024-01-15T10:30:00Z'
  },
  {
    id: '3',
    name: 'Freedom Credit Card',
    type: 'credit',
    balance: -2340.50,
    bank: 'Chase Bank',
    lastUpdated: '2024-01-15T10:30:00Z'
  },
  {
    id: '4',
    name: 'Investment Portfolio',
    type: 'investment',
    balance: 45620.25,
    bank: 'Fidelity',
    lastUpdated: '2024-01-15T10:30:00Z'
  }
];

export const mockTransactions = [
  {
    id: '1',
    date: '2024-01-15',
    description: 'Grocery Store',
    amount: -124.50,
    category: 'Groceries',
    account: 'Main Checking',
    type: 'expense'
  },
  {
    id: '2',
    date: '2024-01-14',
    description: 'Salary Deposit',
    amount: 3200.00,
    category: 'Salary',
    account: 'Main Checking',
    type: 'income'
  },
  {
    id: '3',
    date: '2024-01-14',
    description: 'Netflix Subscription',
    amount: -15.99,
    category: 'Entertainment',
    account: 'Freedom Credit Card',
    type: 'expense'
  },
  {
    id: '4',
    date: '2024-01-13',
    description: 'Gas Station',
    amount: -68.20,
    category: 'Transportation',
    account: 'Main Checking',
    type: 'expense'
  },
  {
    id: '5',
    date: '2024-01-12',
    description: 'Restaurant',
    amount: -45.30,
    category: 'Dining',
    account: 'Freedom Credit Card',
    type: 'expense'
  },
  {
    id: '6',
    date: '2024-01-11',
    description: 'Electric Bill',
    amount: -89.50,
    category: 'Utilities',
    account: 'Main Checking',
    type: 'expense'
  }
];

export const mockBudgets = [
  {
    id: '1',
    category: 'Groceries',
    limit: 600,
    spent: 320.50,
    period: 'monthly',
    color: '#10B981'
  },
  {
    id: '2',
    category: 'Dining',
    limit: 300,
    spent: 280.20,
    period: 'monthly',
    color: '#F59E0B'
  },
  {
    id: '3',
    category: 'Transportation',
    limit: 400,
    spent: 245.80,
    period: 'monthly',
    color: '#3B82F6'
  },
  {
    id: '4',
    category: 'Entertainment',
    limit: 200,
    spent: 125.99,
    period: 'monthly',
    color: '#8B5CF6'
  },
  {
    id: '5',
    category: 'Utilities',
    limit: 250,
    spent: 189.50,
    period: 'monthly',
    color: '#EF4444'
  }
];

export const mockGoals = [
  {
    id: '1',
    name: 'Emergency Fund',
    target: 30000,
    current: 25800,
    deadline: '2024-06-01',
    category: 'savings',
    color: '#10B981'
  },
  {
    id: '2',
    name: 'Vacation to Europe',
    target: 5000,
    current: 2300,
    deadline: '2024-08-15',
    category: 'savings',
    color: '#3B82F6'
  },
  {
    id: '3',
    name: 'Pay Off Credit Card',
    target: 2340.50,
    current: 1200,
    deadline: '2024-04-01',
    category: 'debt',
    color: '#EF4444'
  },
  {
    id: '4',
    name: 'New Laptop',
    target: 2500,
    current: 800,
    deadline: '2024-03-15',
    category: 'purchase',
    color: '#F59E0B'
  }
];

export const mockBills = [
  {
    id: '1',
    name: 'Rent',
    amount: 1800,
    dueDate: '2024-02-01',
    category: 'Housing',
    status: 'due',
    isRecurring: true
  },
  {
    id: '2',
    name: 'Electric Bill',
    amount: 89.50,
    dueDate: '2024-01-20',
    category: 'Utilities',
    status: 'paid',
    isRecurring: true
  },
  {
    id: '3',
    name: 'Internet',
    amount: 79.99,
    dueDate: '2024-01-25',
    category: 'Utilities',
    status: 'due',
    isRecurring: true
  },
  {
    id: '4',
    name: 'Car Insurance',
    amount: 142.50,
    dueDate: '2024-01-30',
    category: 'Insurance',
    status: 'due',
    isRecurring: true
  },
  {
    id: '5',
    name: 'Credit Card Payment',
    amount: 250.00,
    dueDate: '2024-01-18',
    category: 'Credit',
    status: 'overdue',
    isRecurring: true
  }
];

export const spendingByCategory = [
  { category: 'Groceries', amount: 320.50, percentage: 25.2, color: '#10B981' },
  { category: 'Dining', amount: 280.20, percentage: 22.1, color: '#F59E0B' },
  { category: 'Transportation', amount: 245.80, percentage: 19.4, color: '#3B82F6' },
  { category: 'Utilities', amount: 189.50, percentage: 14.9, color: '#EF4444' },
  { category: 'Entertainment', amount: 125.99, percentage: 9.9, color: '#8B5CF6' },
  { category: 'Shopping', amount: 105.60, percentage: 8.5, color: '#EC4899' }
];

export const monthlySpending = [
  { month: 'Aug', income: 3200, expenses: 2100 },
  { month: 'Sep', income: 3200, expenses: 2300 },
  { month: 'Oct', income: 3200, expenses: 1950 },
  { month: 'Nov', income: 3200, expenses: 2450 },
  { month: 'Dec', income: 3200, expenses: 2800 },
  { month: 'Jan', income: 3200, expenses: 1800 }
];
