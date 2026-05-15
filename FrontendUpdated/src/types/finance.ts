export type TransactionType = "income" | "expense";
export type TransactionSource = "bank" | "manual";
export type TransactionStatus = "synced" | "manual";

export type Category = string;

export interface FinanceCategory {
  id: string;
  name: Category;
  color: string;
  isDefault?: boolean;
}

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  merchant: string;
  description: string;
  type: TransactionType;
  status: TransactionStatus;
  category: Category;
  source: TransactionSource;
}

export interface Budget {
  id: string;
  category: Category;
  monthlyLimit: number;
  month: number;
  year: number;
}

export interface BankConnection {
  connected: boolean;
  bankName: string;
  accountNumber: string;
}
