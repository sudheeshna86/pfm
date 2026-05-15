import type { Budget, Category, FinanceCategory, Transaction } from "@/types/finance";

export const currency = (value: number) => new Intl.NumberFormat("en", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export const monthName = (month: number) => new Date(2026, month - 1, 1).toLocaleString("en", { month: "long" });

export const transactionMonth = (date: string) => {
  const [year, month] = date.split("-").map(Number);
  return { year, month };
};

export const filterByPeriod = (transactions: Transaction[], month: number, year: number) =>
  transactions.filter((transaction) => {
    const period = transactionMonth(transaction.date);
    return period.month === month && period.year === year;
  });

export const previousPeriod = (month: number, year: number) => month === 1 ? { month: 12, year: year - 1 } : { month: month - 1, year };

export const summarize = (transactions: Transaction[], salary = 0) => {
  const transactionIncome = transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
  const income = salary || transactionIncome;
  const uncategorized = transactions.filter((t) => t.category === "Uncategorized").length;
  return { income, expenses, balance: income - expenses, uncategorized, savings: income - expenses };
};

export const spendByCategory = (transactions: Transaction[]) =>
  transactions.reduce<Record<string, number>>((acc, transaction) => {
    if (transaction.type === "expense") acc[transaction.category] = (acc[transaction.category] ?? 0) + transaction.amount;
    return acc;
  }, {});

export const budgetUsage = (budget: Budget, transactions: Transaction[]) => {
  const spent = transactions.filter((t) => t.type === "expense" && t.category === budget.category).reduce((sum, t) => sum + t.amount, 0);
  return { spent, remaining: budget.monthlyLimit - spent, percent: Math.min(100, Math.round((spent / Math.max(budget.monthlyLimit, 1)) * 100)), rawPercent: Math.round((spent / Math.max(budget.monthlyLimit, 1)) * 100) };
};

export const categoryTone = (category: Category) =>
  ({ Food: "bg-success/15 text-success", Travel: "bg-secondary/15 text-secondary", Bills: "bg-warning/15 text-warning", Shopping: "bg-primary/15 text-primary", Others: "bg-accent/20 text-accent-foreground", Uncategorized: "bg-warning/20 text-warning" })[category] ?? "bg-muted text-muted-foreground";

export const categoryColor = (categories: FinanceCategory[], name: Category) => categories.find((category) => category.name === name)?.color ?? "hsl(var(--muted-foreground))";
