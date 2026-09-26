import type { LucideIcon } from "lucide-react";

interface StatBarProps {
  stats: Array<{
    icon: LucideIcon;
    number: string;
    label: string;
    chipClass?: string;
  }>;
}

export default function StatBar({ stats }: StatBarProps) {
  return (
    <div className="stat-bar">
      {stats.map(({ icon: Icon, ...stat }, i) => (
        <div key={i} className="stat-item">
          <span className={`chip ${stat.chipClass ?? "chip-teal"}`}>
            <Icon aria-hidden />
          </span>
          <span>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </span>
        </div>
      ))}
    </div>
  );
}
