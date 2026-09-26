import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  Megaphone, Clapperboard, CodeXml, Handshake, MessagesSquare, MapPin, Mail, Phone, Clock,
  Map as MapIcon, CircleHelp, Timer, ClipboardList, TriangleAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Let's Start a Conversation",
  description:
    "Reach out to Digital Chautari for digital marketing, content creation, software development, or any of our products. We respond within 24 hours.",
};

const departments = [
  { icon: Megaphone, chip: "chip-teal", title: "Marketing Team", email: "marketing@digitalchautari.com", body: "Campaign briefs, SEO enquiries, social strategy, and paid media." },
  { icon: Clapperboard, chip: "chip-gold", title: "Content Studio", email: "studio@digitalchautari.com", body: "Video production, graphic design, copywriting, and podcast projects." },
  { icon: CodeXml, chip: "chip-mint", title: "Software Development", email: "dev@digitalchautari.com", body: "Web & mobile apps, API development, QA, and technical consulting." },
  { icon: Handshake, chip: "chip-lilac", title: "Business Development", email: "biz@digitalchautari.com", body: "Partnerships, investment enquiries, and enterprise contracts." },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero-bg hero-py">
        <div className="container-site">
          <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
            <div className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 18 }}>
              <MessagesSquare aria-hidden /> Get In Touch
            </div>
            <h1 className="h1" style={{ marginBottom: 18 }}>
              Let&apos;s start a{" "}
              <span className="gradient-text">conversation</span>
            </h1>
            <p className="body-md" style={{ fontSize: 17 }}>
              Whether you have a project in mind, a question about our services, or just want to say
              hello — our team is ready to listen and respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ─────────────────────────────────────── */}
      <section className="section-py-tight" style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div className="container-site">
          <div className="grid-4" style={{ gap: 16 }}>
            {[
              { icon: MapPin, chip: "chip-teal", title: "Our Location", info: "Kathmandu, Nepal", sub: "Bagmati Province, 44600" },
              { icon: Mail, chip: "chip-gold", title: "Email Us", info: "hello@digitalchautari.com", sub: "We reply within 24 hours" },
              { icon: Phone, chip: "chip-mint", title: "Call Us", info: "+977-01-XXXXXXX", sub: "Mon–Fri, 9am–6pm NPT" },
              { icon: Clock, chip: "chip-lilac", title: "Business Hours", info: "Mon–Fri: 9am–6pm", sub: "Sat: 10am–2pm · Sun: Closed" },
            ].map(({ icon: Icon, ...item }, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="card" style={{ padding: 22 }}>
                  <span className={`chip ${item.chip}`} style={{ marginBottom: 14 }}><Icon aria-hidden /></span>
                  <h3 className="h3" style={{ fontSize: 14, marginBottom: 6, marginTop: 12 }}>{item.title}</h3>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "var(--color-ink)", marginBottom: 4 }}>{item.info}</div>
                  <div className="caption">{item.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Direct Lines ─────────────────────────────────────────────── */}
      <section className="section-py-tight">
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 12 }}>Direct Lines</span>
            <h2 className="h2">Reach the right team</h2>
          </div>
          <div className="grid-4" style={{ gap: 16 }}>
            {departments.map(({ icon: Icon, ...dept }, i) => (
              <Reveal key={dept.title} delay={i * 60}>
                <div className="card">
                  <span className={`chip ${dept.chip}`} style={{ marginBottom: 14 }}><Icon aria-hidden /></span>
                  <h3 className="h3" style={{ fontSize: 15, marginBottom: 8 }}>{dept.title}</h3>
                  <p className="body-sm" style={{ fontSize: 13, marginBottom: 14 }}>{dept.body}</p>
                  <a
                    href={`mailto:${dept.email}`}
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--color-primary)",
                      textDecoration: "none",
                      wordBreak: "break-word",
                    }}
                  >
                    {dept.email}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Contact Block ────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "rgba(15,148,136,0.03)", borderTop: "1px solid var(--color-line)" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1fr",
              gap: 48,
              alignItems: "flex-start",
            }}
          >
            {/* Left — Form */}
            <Reveal>
              <div>
                <h2 className="h2" style={{ marginBottom: 8 }}>Send us a message</h2>
                <p className="body-sm" style={{ marginBottom: 28 }}>
                  Fill out the form and a member of our team will be in touch within one business day.
                </p>
                <ContactForm />
              </div>
            </Reveal>

            {/* Right — Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Map placeholder */}
              <Reveal>
                <div
                  style={{
                    background: "#E7F2F4",
                    borderRadius: 12,
                    height: 220,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 12,
                    border: "1px solid var(--color-line)",
                  }}
                >
                  <span
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: "#fff",
                      color: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px -12px rgba(16,24,38,0.3)",
                    }}
                  >
                    <MapIcon size={26} strokeWidth={1.7} aria-hidden />
                  </span>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: 15, color: "var(--color-ink)" }}>
                      Kathmandu, Nepal
                    </div>
                    <div className="caption" style={{ marginTop: 4 }}>Bagmati Province, 44600</div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Kathmandu,Nepal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                    style={{ marginTop: 4 }}
                  >
                    Open in Maps →
                  </a>
                </div>
              </Reveal>

              {/* FAQ callout */}
              <Reveal delay={60}>
                <div
                  style={{
                    background: "var(--color-navy)",
                    borderRadius: 12,
                    padding: "22px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <span className="chip chip-dark-gold">
                    <CircleHelp aria-hidden />
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 6 }}>
                      Need quick answers?
                    </div>
                    <a
                      href="#"
                      style={{ fontSize: 13, color: "var(--color-primary)", fontWeight: 600, textDecoration: "none" }}
                    >
                      Visit our FAQ page →
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Response times */}
              <Reveal delay={120}>
                <div className="card" style={{ padding: 24 }}>
                  <h3 className="h3 icon-inline" style={{ fontSize: 15, marginBottom: 16 }}>
                    <Timer size={18} strokeWidth={2} color="var(--color-primary)" aria-hidden /> Response Times
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {[
                      { label: "General Email", time: "Within 24 hours", icon: Mail },
                      { label: "Project Proposals", time: "2–3 business days", icon: ClipboardList },
                      { label: "Urgent Enquiries", time: "Same day", icon: TriangleAlert },
                      { label: "Phone Calls", time: "Mon–Fri, 9am–6pm NPT", icon: Phone },
                    ].map(({ icon: Icon, ...item }) => (
                      <div
                        key={item.label}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingBottom: 10,
                          borderBottom: "1px solid var(--color-line)",
                          gap: 12,
                        }}
                      >
                        <span style={{ fontSize: 13, color: "var(--color-ink)", display: "flex", gap: 6, alignItems: "center" }}>
                          <Icon size={15} strokeWidth={1.9} color="var(--color-muted)" aria-hidden /> {item.label}
                        </span>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-primary)", flexShrink: 0 }}>
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          div[style*="grid-template-columns: 1.3fr 1fr"] { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
