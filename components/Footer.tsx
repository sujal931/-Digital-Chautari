import Link from "next/link";
import { siFacebook, siInstagram, siX, siYoutube } from "simple-icons";

const socials = [
  { label: "Facebook", path: siFacebook.path },
  { label: "Instagram", path: siInstagram.path },
  { label: "X (Twitter)", path: siX.path },
  { label: "YouTube", path: siYoutube.path },
];

const footerLinks = {
  Company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Digital Marketing", href: "/services#digital-marketing" },
    { label: "Content Creation", href: "/services#content-creation" },
    { label: "Software Development", href: "/services#software-dev" },
    { label: "Branding & Design", href: "/services#branding" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-navy)", color: "#fff", paddingTop: 64, paddingBottom: 0 }}>
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Digital Chautari home"
              style={{ textDecoration: "none", display: "inline-flex", flexDirection: "column", lineHeight: 1, marginBottom: 20 }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                Digital <span style={{ color: "var(--color-primary)" }}>Chautari</span>
              </span>
              <span
                style={{
                  fontSize: 10.5,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Ideas Meet Execution
              </span>
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: 280, marginBottom: 24 }}>
              A creative technology company bridging ideas and impact through digital marketing, content creation, and health-tech innovation in Kathmandu, Nepal.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="social-link"
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 10,
                    border: "1px solid var(--color-navy-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#fff",
                  marginBottom: 20,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link"
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="divider-dark" style={{ marginTop: 48 }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "20px 0",
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© {new Date().getFullYear()} Digital Chautari. All rights reserved. · Kathmandu, Nepal</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          footer .container-site > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
