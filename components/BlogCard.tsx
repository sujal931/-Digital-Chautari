import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface BlogCardProps {
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  href: string;
  icon: LucideIcon;
  accentColor?: string;
}

export default function BlogCard({ category, date, readTime, title, excerpt, href, icon: Icon, accentColor = "#E7F2F4" }: BlogCardProps) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column" }}>
      {/* Colored image placeholder */}
      <div
        style={{
          height: 160,
          borderRadius: 8,
          background: `linear-gradient(135deg, ${accentColor} 0%, #fff 140%)`,
          marginBottom: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: -30,
            bottom: -30,
            width: 140,
            height: 140,
            borderRadius: "50%",
            border: "1px solid rgba(15,148,136,0.15)",
          }}
        />
        <span
          style={{
            width: 56,
            height: 56,
            borderRadius: 12,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-primary)",
            boxShadow: "0 8px 20px -12px rgba(16,24,38,0.25)",
          }}
        >
          <Icon size={26} strokeWidth={1.7} aria-hidden />
        </span>
      </div>

      {/* Meta */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <span className="badge-primary" style={{ fontSize: 11 }}>
          {category}
        </span>
        <span className="caption">
          {date} · {readTime}
        </span>
      </div>

      {/* Content */}
      <h3 className="h3" style={{ marginBottom: 8, fontSize: 16 }}>
        {title}
      </h3>
      <p className="body-sm" style={{ marginBottom: 20, flex: 1 }}>
        {excerpt}
      </p>

      <Link
        href={href}
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "var(--color-primary)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        Read more →
      </Link>
    </div>
  );
}
