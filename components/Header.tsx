"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(251,251,249,0.92)" : "#FBFBF9",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid var(--color-line)",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div className="container-site" style={{ display: "flex", alignItems: "center", height: 68, gap: 32 }}>
        {/* Logo */}
        <Link href="/" aria-label="Digital Chautari home" style={{ textDecoration: "none", display: "flex", flexShrink: 0 }}>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 800,
                fontSize: 20,
                color: "var(--color-ink)",
                letterSpacing: "-0.02em",
              }}
            >
              Digital <span style={{ color: "var(--color-primary)" }}>Chautari</span>
            </span>
            <span
              style={{
                fontSize: 10.5,
                color: "var(--color-muted)",
                fontWeight: 600,
                marginTop: 4,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              Ideas Meet Execution
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "var(--font-inter)",
                  textDecoration: "none",
                  color: isActive ? "var(--color-primary)" : "var(--color-ink)",
                  background: isActive ? "rgba(15,148,136,0.08)" : "transparent",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-primary)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(15,148,136,0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className="btn btn-primary btn-sm desktop-nav" style={{ flexShrink: 0 }}>
          Contact Us
        </Link>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            cursor: "pointer",
            padding: 8,
            border: "none",
            background: "none",
            marginLeft: "auto",
          }}
        >
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "var(--color-ink)",
              borderRadius: 2,
              transition: "transform 0.3s, opacity 0.3s",
              transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "var(--color-ink)",
              borderRadius: 2,
              transition: "opacity 0.3s",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "var(--color-ink)",
              borderRadius: 2,
              transition: "transform 0.3s, opacity 0.3s",
              transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid var(--color-line)",
            padding: "12px var(--pad-mobile) 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "var(--font-inter)",
                  textDecoration: "none",
                  color: isActive ? "var(--color-primary)" : "var(--color-ink)",
                  background: isActive ? "rgba(15,148,136,0.08)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn btn-primary"
            onClick={() => setMobileOpen(false)}
            style={{ marginTop: 12, justifyContent: "center" }}
          >
            Contact Us
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 760px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
