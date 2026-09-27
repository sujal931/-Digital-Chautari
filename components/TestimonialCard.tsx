import Image, { type StaticImageData } from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  photo?: StaticImageData;
  stars?: number;
  dark?: boolean;
}

export default function TestimonialCard({ quote, name, title, company, photo, stars = 5, dark }: TestimonialCardProps) {
  return (
    <div className={dark ? "card-dark" : "card"} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Stars */}
      <div style={{ display: "flex", gap: 3, marginBottom: 16 }} aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" strokeWidth={1.5} aria-hidden />
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.7,
          color: dark ? "rgba(255,255,255,0.8)" : "var(--color-ink)",
          marginBottom: 20,
          fontStyle: "italic",
          flex: 1,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          paddingTop: 16,
          borderTop: `1px solid ${dark ? "var(--color-navy-border)" : "var(--color-line)"}`,
        }}
      >
        {photo ? (
          <Image
            src={photo}
            alt={`Portrait of ${name}`}
            width={48}
            height={48}
            placeholder="blur"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
              boxShadow: "0 0 0 2px #fff, 0 0 0 4px rgba(15,148,136,0.35)",
            }}
          />
        ) : (
          <span
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0F9488 0%, #7FAE3A 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "var(--font-sora)",
              fontWeight: 700,
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            {name.charAt(0)}
          </span>
        )}
        <span>
          <div style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: 14, color: dark ? "#fff" : "var(--color-ink)" }}>
            {name}
          </div>
          <div style={{ fontSize: 12, color: dark ? "rgba(255,255,255,0.55)" : "var(--color-muted)" }}>
            {title} · {company}
          </div>
        </span>
      </div>
    </div>
  );
}
