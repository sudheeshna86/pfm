import type { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface SummaryCardProps {
  label: string;
  value: string;
  helper: string;
  trend: "up" | "down" | "steady";
  icon: ReactNode;
}

export function SummaryCard({ label, value, helper, trend, icon }: SummaryCardProps) {
  const TrendIcon = trend === "down" ? ArrowDownRight : ArrowUpRight;

  return (
    <article className="group rounded-lg border bg-card-gradient p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-card-foreground">{value}</p>
        </div>
        <div className="rounded-md bg-primary/10 p-3 text-primary transition group-hover:scale-105">{icon}</div>
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
        <TrendIcon className="h-4 w-4 text-primary" />
        <span>{helper}</span>
      </div>
    </article>
  );
}
