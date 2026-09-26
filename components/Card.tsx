import type { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  chipClass?: string;
  title: string;
  body: string;
  link?: string;
  linkLabel?: string;
  badge?: string;
  dark?: boolean;
}

export default function Card({ icon: Icon, chipClass = "chip-teal", title, body, link, linkLabel, badge, dark }: CardProps) {
  return (
    <div className={dark ? "card-dark" : "card"}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
        <span className={`chip ${dark ? "chip-dark" : chipClass}`}><Icon aria-hidden /></span>
        {badge && <span className="badge-gold">{badge}</span>}
      </div>
      <h3 className="h3" style={{ marginBottom: 10, color: dark ? "#fff" : undefined }}>{title}</h3>
      <p className="body-sm" style={{ color: dark ? "rgba(255,255,255,0.65)" : undefined }}>{body}</p>
      {link && (
        <a
          href={link}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            marginTop: 18,
            fontSize: 14,
            fontWeight: 600,
            color: "var(--color-primary)",
            textDecoration: "none",
          }}
        >
          {linkLabel ?? "Learn more"} →
        </a>
      )}
    </div>
  );
}
