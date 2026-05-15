import type { Budget, Transaction } from "@/types/finance";
import { budgetUsage, currency } from "@/utils/financeCalculations";

interface BudgetPanelProps {
  budgets: Budget[];
  transactions: Transaction[];
}

export function BudgetPanel({ budgets, transactions }: BudgetPanelProps) {
  return (
    <section className="rounded-lg border bg-card p-5 shadow-soft">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-card-foreground">Budget guardrails</h2>
        <p className="text-sm text-muted-foreground">Monthly category limits with live alerts.</p>
      </div>
      <div className="space-y-4">
        {budgets.map((budget) => {
          const usage = budgetUsage(budget, transactions);
          const isHot = usage.percent >= 80;
          return (
            <div key={budget.id}>
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold text-foreground">{budget.category}</span>
                <span className={isHot ? "font-bold text-warning" : "text-muted-foreground"}>{currency(usage.spent)} / {currency(budget.monthlyLimit)}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-muted">
                <div className={isHot ? "h-full rounded-full bg-warning transition-all" : "h-full rounded-full bg-primary-gradient transition-all"} style={{ width: `${usage.percent}%` }} />
              </div>
              {isHot && <p className="mt-1 text-xs font-semibold text-warning">Approaching monthly limit</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
