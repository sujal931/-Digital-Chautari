import { Check } from "lucide-react";

interface PricingCardProps {
  tier: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
}

export default function PricingCard({
  tier,
  price,
  period,
  description,
  features,
  ctaLabel,
  ctaHref,
  featured,
  badge,
}: PricingCardProps) {
  return (
    <div className={`pricing-card${featured ? " featured" : ""}`} style={{ position: "relative" }}>
      {badge && (
        <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
          <span className="badge-gold" style={{ fontSize: 11, padding: "5px 14px" }}>
            {badge}
          </span>
        </div>
      )}
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            fontFamily: "var(--font-sora)",
            fontWeight: 700,
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: featured ? "rgba(255,255,255,0.7)" : "var(--color-muted)",
            marginBottom: 12,
          }}
        >
          {tier}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 10 }}>
          <span
            style={{
              fontFamily: "var(--font-sora)",
              fontWeight: 800,
              fontSize: 36,
              color: featured ? "#fff" : "var(--color-ink)",
              lineHeight: 1,
            }}
          >
            {price}
          </span>
          {period && (
            <span style={{ fontSize: 14, color: featured ? "rgba(255,255,255,0.55)" : "var(--color-muted)" }}>
              {period}
            </span>
          )}
        </div>
        <p style={{ fontSize: 14, color: featured ? "rgba(255,255,255,0.7)" : "var(--color-muted)", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
        {features.map((feat, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: featured ? "rgba(15,148,136,0.3)" : "rgba(15,148,136,0.1)",
                color: featured ? "#fff" : "var(--color-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <Check size={11} strokeWidth={3} aria-hidden />
            </span>
            <span style={{ fontSize: 14, color: featured ? "rgba(255,255,255,0.8)" : "var(--color-ink)" }}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className={`btn ${featured ? "btn-primary" : "btn-ghost"}`}
        style={{ width: "100%", justifyContent: "center" }}
      >
        {ctaLabel}
      </a>
    </div>
  );
}
