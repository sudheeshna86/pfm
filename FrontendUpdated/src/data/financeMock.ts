import type { Budget, Category, FinanceCategory, Transaction } from "@/types/finance";

export const categoryColors = [
  "hsl(var(--success))",
  "hsl(var(--secondary))",
  "hsl(var(--warning))",
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(var(--muted-foreground))",
];

export const defaultCategories: FinanceCategory[] = [
  { id: "cat-uncat", name: "Uncategorized", color: "hsl(var(--warning))", isDefault: true },
  { id: "cat-food", name: "Food", color: "hsl(var(--success))", isDefault: true },
  { id: "cat-travel", name: "Travel", color: "hsl(var(--secondary))", isDefault: true },
  { id: "cat-bills", name: "Bills", color: "hsl(var(--warning))", isDefault: true },
  { id: "cat-shopping", name: "Shopping", color: "hsl(var(--primary))", isDefault: true },
  { id: "cat-others", name: "Others", color: "hsl(var(--accent))", isDefault: true },
];

export const categories: Category[] = defaultCategories.map((category) => category.name);
export const budgetCategories: Category[] = categories.filter((category) => category !== "Uncategorized");

export const initialTransactions: Transaction[] = [
  { id: "t1", amount: 3200, date: "2026-04-01", merchant: "Acme Payroll", description: "Monthly salary", type: "income", status: "synced", category: "Others", source: "bank" },
  { id: "t2", amount: 68.4, date: "2026-04-02", merchant: "Green Basket", description: "Groceries", type: "expense", status: "synced", category: "Food", source: "bank" },
  { id: "t3", amount: 14.99, date: "2026-04-04", merchant: "Streamly", description: "Subscription", type: "expense", status: "synced", category: "Others", source: "bank" },
  { id: "t4", amount: 43.8, date: "2026-04-07", merchant: "Metro Tap", description: "Weekly transit", type: "expense", status: "synced", category: "Travel", source: "bank" },
  { id: "t5", amount: 112.2, date: "2026-04-10", merchant: "Urban Outfit", description: "Card purchase", type: "expense", status: "synced", category: "Uncategorized", source: "bank" },
  { id: "t6", amount: 94.7, date: "2026-03-12", merchant: "Market Hall", description: "Groceries", type: "expense", status: "manual", category: "Food", source: "manual" },
  { id: "t7", amount: 640, date: "2026-03-05", merchant: "RentPay", description: "Apartment rent", type: "expense", status: "manual", category: "Bills", source: "manual" },
  { id: "t8", amount: 51.3, date: "2026-03-20", merchant: "Trainline", description: "Weekend train", type: "expense", status: "manual", category: "Travel", source: "manual" },
];

export const mockSyncedTransactions: Transaction[] = [
  { id: "s1", amount: 29.5, date: "2026-04-14", merchant: "Blue Bottle", description: "Card purchase", type: "expense", status: "synced", category: "Uncategorized", source: "bank" },
  { id: "s2", amount: 86.1, date: "2026-04-15", merchant: "City Power", description: "Utility bill", type: "expense", status: "synced", category: "Uncategorized", source: "bank" },
  { id: "s3", amount: 18.25, date: "2026-04-16", merchant: "RideLine", description: "Transport", type: "expense", status: "synced", category: "Uncategorized", source: "bank" },
];

export const budgets: Budget[] = [
  { id: "b1", category: "Food", monthlyLimit: 520, month: 4, year: 2026 },
  { id: "b2", category: "Travel", monthlyLimit: 260, month: 4, year: 2026 },
  { id: "b3", category: "Bills", monthlyLimit: 900, month: 4, year: 2026 },
  { id: "b4", category: "Shopping", monthlyLimit: 340, month: 4, year: 2026 },
  { id: "b5", category: "Others", monthlyLimit: 180, month: 4, year: 2026 },
  { id: "b6", category: "Food", monthlyLimit: 450, month: 3, year: 2026 },
  { id: "b7", category: "Travel", monthlyLimit: 210, month: 3, year: 2026 },
  { id: "b8", category: "Bills", monthlyLimit: 850, month: 3, year: 2026 },
  { id: "b9", category: "Shopping", monthlyLimit: 300, month: 3, year: 2026 },
  { id: "b10", category: "Others", monthlyLimit: 160, month: 3, year: 2026 },
];
