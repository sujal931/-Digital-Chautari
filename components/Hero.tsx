import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
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
  image?: StaticImageData;
  imageAlt?: string;
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
  image,
  imageAlt = "",
  centered = false,
  children,
}: HeroProps) {
  // A photo always sits to the right, so the text is left-aligned in that layout
  const isCentered = centered && !image;

  const text = (
    <div
      style={{
        maxWidth: isCentered ? 720 : 620,
        margin: isCentered ? "0 auto" : undefined,
        textAlign: isCentered ? "center" : undefined,
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
          maxWidth: 620,
          margin: isCentered ? "0 auto 36px" : "0 0 36px",
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
            justifyContent: isCentered ? "center" : undefined,
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
    </div>
  );

  return (
    <section className="hero-bg hero-py">
      <div className="container-site">
        {image ? (
          <div className="hero-split">
            {text}
            <div className="hero-photo">
              <Image
                src={image}
                alt={imageAlt}
                placeholder="blur"
                preload
                sizes="(max-width: 760px) 100vw, 480px"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        ) : (
          text
        )}

        {children}
      </div>
    </section>
  );
}
