import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  titleLine1: string;
  gradientWords?: string;
  titleLine2?: string;
  lede: string;
  primaryBtn?: { label: string; href: string };
  secondaryBtn?: { label: string; href: string };
  centered?: boolean;
  children?: React.ReactNode;
}

export default function Hero({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  titleLine1,
  gradientWords,
  titleLine2,
  lede,
  primaryBtn,
  secondaryBtn,
  centered = false,
  children,
}: HeroProps) {
  return (
    <section className="hero-bg hero-py">
      <div className="container-site">
        <div
          style={{
            maxWidth: centered ? 720 : 680,
            margin: centered ? "0 auto" : undefined,
            textAlign: centered ? "center" : undefined,
          }}
        >
          {eyebrow && (
            <div className="pill-eyebrow" style={{ display: "inline-flex" }}>
              {EyebrowIcon && <EyebrowIcon aria-hidden />}
              {eyebrow}
            </div>
          )}

          <h1 className="h1" style={{ marginBottom: 20 }}>
            {titleLine1}
            {gradientWords && (
              <>
                {" "}
                <span className="gradient-text">{gradientWords}</span>
              </>
            )}
            {titleLine2 && (
              <>
                <br />
                {titleLine2}
              </>
            )}
          </h1>

          <p
            className="body-md"
            style={{
              fontSize: 17,
              marginBottom: 36,
              maxWidth: 620,
              margin: centered ? "0 auto 36px" : "0 0 36px",
            }}
          >
            {lede}
          </p>

          {(primaryBtn || secondaryBtn) && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: centered ? "center" : undefined,
              }}
            >
              {primaryBtn && (
                <Link href={primaryBtn.href} className="btn btn-primary">
                  {primaryBtn.label}
                </Link>
              )}
              {secondaryBtn && (
                <Link href={secondaryBtn.href} className="btn btn-ghost">
                  {secondaryBtn.label}
                </Link>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
