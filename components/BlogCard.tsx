import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

interface BlogCardProps {
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  href: string;
  image: StaticImageData;
  imageAlt: string;
}

export default function BlogCard({ category, date, readTime, title, excerpt, href, image, imageAlt }: BlogCardProps) {
  return (
    <div className="card blog-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Cover photo */}
      <div className="blog-card-media">
        <Image
          src={image}
          alt={imageAlt}
          placeholder="blur"
          fill
          sizes="(max-width: 760px) 100vw, 360px"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Meta */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
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
