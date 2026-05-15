import { AlertTriangle, Landmark, PlusCircle } from "lucide-react";
import type { Category, Transaction } from "@/types/finance";
import { categories } from "@/data/financeMock";
import { categoryTone, currency } from "@/utils/financeCalculations";

interface TransactionListProps {
  transactions: Transaction[];
  onCategoryChange: (id: string, category: Category) => void;
}

export function TransactionList({ transactions, onCategoryChange }: TransactionListProps) {
  return (
    <section className="rounded-lg border bg-card p-5 shadow-soft">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-card-foreground">Transactions</h2>
          <p className="text-sm text-muted-foreground">Categorize new bank activity as it arrives.</p>
        </div>
        <span className="rounded-full bg-warning/15 px-3 py-1 text-xs font-semibold text-warning">
          {transactions.filter((t) => t.category === "Uncategorized").length} need review
        </span>
      </div>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="grid gap-3 rounded-md border bg-background/70 p-3 transition hover:border-primary/40 sm:grid-cols-[1.4fr_.7fr_.8fr] sm:items-center">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-md bg-muted p-2 text-muted-foreground">
                {transaction.source === "bank" ? <Landmark className="h-4 w-4" /> : <PlusCircle className="h-4 w-4" />}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-foreground">{transaction.merchant}</p>
                  {transaction.category === "Uncategorized" && <AlertTriangle className="h-4 w-4 text-warning" />}
                </div>
                <p className="text-sm text-muted-foreground">{transaction.description} • {transaction.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:justify-center">
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${categoryTone(transaction.category)}`}>{transaction.category}</span>
            </div>
            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <span className={transaction.type === "income" ? "font-bold text-success" : "font-bold text-foreground"}>
                {transaction.type === "income" ? "+" : "-"}{currency(transaction.amount)}
              </span>
              <select
                value={transaction.category}
                onChange={(event) => onCategoryChange(transaction.id, event.target.value as Category)}
                className="h-9 rounded-md border bg-card px-2 text-sm outline-none ring-ring transition focus:ring-2"
                aria-label={`Category for ${transaction.merchant}`}
              >
                {categories.map((category) => <option key={category}>{category}</option>)}
              </select>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
