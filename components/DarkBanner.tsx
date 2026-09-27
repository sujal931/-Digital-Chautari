import type { StaticImageData } from "next/image";
import ParallaxImage from "@/components/ParallaxImage";

interface DarkBannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bgImage?: StaticImageData;
  children: React.ReactNode;
}

export default function DarkBanner({ eyebrow, title, subtitle, bgImage, children }: DarkBannerProps) {
  return (
    <section className={`section-dark section-py${bgImage ? " section-photo" : ""}`}>
      {bgImage && (
        <>
          <ParallaxImage src={bgImage} />
          <div className="section-photo-overlay" aria-hidden />
        </>
      )}
      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        {eyebrow && (
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <span className="pill-eyebrow-gold" style={{ display: "inline-flex" }}>
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="h2" style={{ textAlign: "center", marginBottom: subtitle ? 10 : 48 }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{ textAlign: "center", fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 560, margin: "0 auto 48px" }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
