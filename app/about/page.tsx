import type { Metadata } from "next";
import Link from "next/link";
import DarkBanner from "@/components/DarkBanner";
import Reveal from "@/components/Reveal";
import {
  Users, Target, Compass, Heart, Sparkles, Award, Handshake, BadgeCheck, Lock, Globe, Network, Sprout,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — The Team Behind Digital Chautari",
  description:
    "Meet the founders, engineers, creators, and strategists who make Digital Chautari Nepal's most ambitious creative technology company.",
};

const teamMembers = [
  { role: "Founder & CEO", initials: "FC", bio: "Visionary leader driving Digital Chautari's mission to bridge ideas and digital impact across Nepal.", gradient: "linear-gradient(135deg, #0F9488, #0B6F66)" },
  { role: "Co-Founder & COO", initials: "CO", bio: "Operations architect ensuring seamless project delivery across all three Digital Chautari ventures.", gradient: "linear-gradient(135deg, #E0A930, #c48a1a)" },
  { role: "Front-End Developer", initials: "FD", bio: "Crafts pixel-perfect React interfaces that balance beautiful design with peak performance.", gradient: "linear-gradient(135deg, #7FAE3A, #5a8a1e)" },
  { role: "Back-End Developer", initials: "BD", bio: "Architects scalable APIs and cloud infrastructure that power our products under heavy load.", gradient: "linear-gradient(135deg, #0B6F66, #0F9488)" },
  { role: "Marketing Lead", initials: "ML", bio: "Orchestrates data-led campaigns across digital channels, turning reach into measurable revenue.", gradient: "linear-gradient(135deg, #0F9488, #7FAE3A)" },
  { role: "Sales Executive", initials: "SE", bio: "Builds lasting client relationships through consultative selling and exceptional follow-through.", gradient: "linear-gradient(135deg, #E0A930, #0F9488)" },
  { role: "Business Development Officer", initials: "BO", bio: "Identifies and cultivates strategic partnerships that expand Digital Chautari's footprint.", gradient: "linear-gradient(135deg, #7FAE3A, #E0A930)" },
];

const timeline = [
  { year: "2025", title: "The Idea", description: "Three passionate founders sit down at a Kathmandu café and sketch the vision for what would become Digital Chautari — a digital chautari for Nepal's creative economy." },
  { year: "2025", title: "First Products", description: "Eco Creative Marketing Agency and One Content Creation Studio both launch, onboarding their first clients within 30 days of going live." },
  { year: "2026", title: "Health-Tech Entry", description: "Physio@Home enters beta with 50 verified physiotherapists, solving a critical healthcare access gap in the Kathmandu Valley." },
  { year: "2026", title: "Company Registration", description: "Digital Chautari is formally incorporated in Nepal, establishing the legal entity that unites all three ventures under one brand." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero-bg hero-py">
        <div className="container-site">
          <div style={{ maxWidth: 660 }}>
            <div className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 18 }}>
              <Users aria-hidden /> Our Story
            </div>
            <h1 className="h1" style={{ marginBottom: 18 }}>
              The people behind{" "}
              <span className="gradient-text">Digital Chautari</span>
            </h1>
            <p className="body-md" style={{ fontSize: 17 }}>
              We are a team of marketers, engineers, designers, and storytellers united by a single
              belief: that every brand — big or small — deserves a world-class digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story Block ─────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            {/* Left */}
            <Reveal>
              <div>
                <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 14 }}>Our Story</span>
                <h2 className="h2" style={{ marginBottom: 20 }}>
                  From a chautari to a{" "}
                  <span className="gradient-text">digital powerhouse</span>
                </h2>
                <p className="body-md" style={{ marginBottom: 16 }}>
                  In Nepali culture, a <em>chautari</em> is a communal resting place beneath a shady
                  tree — where travellers meet, ideas are shared, and communities grow stronger. We
                  chose this name because it perfectly captures what we do: create a digital gathering
                  place where brands, audiences, and technologies converge.
                </p>
                <p className="body-md">
                  Founded in 2025 in Kathmandu, Nepal, Digital Chautari was born from the frustration
                  of watching talented Nepali businesses fall short not because of their product, but
                  because they lacked the digital voice to tell their story. We set out to change that
                  — one campaign, one codebase, one connection at a time.
                </p>
              </div>
            </Reveal>

            {/* Right — 2×2 stat tiles */}
            <div className="grid-2">
              {[
                { label: "Founded", value: "2025", bg: "var(--color-primary)", color: "#fff" },
                { label: "Products", value: "3", bg: "var(--color-navy)", color: "#fff" },
                { label: "HQ", value: "Kathmandu", bg: "#fff", color: "var(--color-ink)", border: true },
                { label: "Team Members", value: "7+", bg: "var(--color-gold)", color: "#fff" },
              ].map((tile) => (
                <Reveal key={tile.label} delay={80}>
                  <div
                    style={{
                      background: tile.bg,
                      border: tile.border ? "1px solid var(--color-line)" : "none",
                      borderRadius: 12,
                      padding: "28px 24px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-sora)",
                        fontWeight: 800,
                        fontSize: 32,
                        color: tile.color,
                        lineHeight: 1,
                        marginBottom: 8,
                      }}
                    >
                      {tile.value}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: tile.color, opacity: 0.8 }}>{tile.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────────── */}
      <section className="section-py-tight" style={{ background: "rgba(15,148,136,0.03)", borderTop: "1px solid var(--color-line)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 className="h2">Mission & Vision</h2>
          </div>
          <div className="grid-2">
            {[
              {
                icon: Target,
                chip: "chip-teal",
                label: "Our Mission",
                title: "Democratise digital excellence in Nepal",
                body: "To make world-class digital marketing, content creation, and technology solutions accessible to every Nepali business — from solo entrepreneurs in Pokhara to enterprise brands in Kathmandu — through honest, creative, and results-driven work.",
              },
              {
                icon: Compass,
                chip: "chip-gold",
                label: "Our Vision",
                title: "The leading creative tech company in South Asia",
                body: "We envision Digital Chautari as the definitive creative technology partner for brands across South Asia — a company known for building iconic digital products, groundbreaking campaigns, and a community of empowered creators.",
              },
            ].map(({ icon: Icon, ...item }, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="card" style={{ padding: 32 }}>
                  <span className={`chip chip-lg ${item.chip}`} style={{ marginBottom: 16 }}><Icon aria-hidden /></span>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--color-primary)",
                      marginBottom: 8,
                      marginTop: 12,
                    }}
                  >
                    {item.label}
                  </div>
                  <h3 className="h3" style={{ fontSize: 18, marginBottom: 14 }}>{item.title}</h3>
                  <p className="body-md">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 14 }}>What Drives Us</span>
            <h2 className="h2">Our core values</h2>
          </div>
          <div className="grid-4">
            {[
              { icon: Heart, chip: "chip-pink", title: "Passion", body: "We love what we do. Every project is an opportunity to create something extraordinary." },
              { icon: Sparkles, chip: "chip-lilac", title: "Creativity", body: "We challenge conventions and explore uncharted ideas to find breakthrough solutions." },
              { icon: Award, chip: "chip-gold", title: "Excellence", body: "Good enough is never enough. We hold every deliverable to the highest professional standard." },
              { icon: Handshake, chip: "chip-teal", title: "Collaboration", body: "The best outcomes emerge when clients, creators, and engineers work as one unified team." },
            ].map(({ icon: Icon, ...value }, i) => (
              <Reveal key={value.title} delay={i * 70}>
                <div className="card" style={{ textAlign: "center", padding: "28px 22px" }}>
                  <span className={`chip ${value.chip}`} style={{ margin: "0 auto 14px" }}><Icon aria-hidden /></span>
                  <h3 className="h3" style={{ marginBottom: 10 }}>{value.title}</h3>
                  <p className="body-sm">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark Quality ─────────────────────────────────────────────── */}
      <DarkBanner eyebrow="Our Standards" title="Committed to quality & trust">
        <div className="grid-4">
          {[
            { icon: BadgeCheck, title: "ISO 9001 Ready", body: "Our processes are designed to meet international quality management standards." },
            { icon: Lock, title: "Data Protection", body: "Strict GDPR-aligned data handling, secure infrastructure, and client confidentiality." },
            { icon: Globe, title: "Global Delivery", body: "Remote-first workflows enabling us to serve clients across time zones with zero compromise." },
            { icon: Network, title: "Pan-Nepal Network", body: "Partnerships with creators, agencies, and tech talent across all 7 provinces of Nepal." },
          ].map(({ icon: Icon, ...item }, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="card-dark" style={{ textAlign: "center" }}>
                <span className="chip chip-dark" style={{ margin: "0 auto 14px" }}>
                  <Icon aria-hidden />
                </span>
                <h3 className="h3" style={{ color: "#fff", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </DarkBanner>

      {/* ── Team ─────────────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 14 }}>The People</span>
            <h2 className="h2">Meet the team</h2>
            <p className="body-md" style={{ maxWidth: 480, margin: "12px auto 0" }}>
              A diverse group of specialists united by curiosity, craft, and a shared love for Kathmandu&apos;s creative energy.
            </p>
          </div>

          <div className="grid-4" style={{ gap: 20 }}>
            {teamMembers.map((member, i) => (
              <Reveal key={member.role} delay={i * 60}>
                <div className="card" style={{ textAlign: "center", padding: "28px 20px" }}>
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: member.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontFamily: "var(--font-sora)",
                      fontWeight: 800,
                      fontSize: 18,
                      margin: "0 auto 14px",
                    }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="h3" style={{ fontSize: 14, marginBottom: 8 }}>{member.role}</h3>
                  <p className="body-sm" style={{ fontSize: 12, lineHeight: 1.6 }}>{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark Timeline ─────────────────────────────────────────────── */}
      <section className="section-dark section-py">
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="pill-eyebrow-gold" style={{ display: "inline-flex", marginBottom: 14 }}>
              Our Journey
            </span>
            <h2 className="h2" style={{ color: "#fff" }}>Building the future, one milestone at a time</h2>
          </div>

          <div className="timeline" style={{ maxWidth: 800, margin: "0 auto" }}>
            {timeline.map((item, i) => (
              <div key={item.title} className="timeline-item">
                <div className="timeline-dot" />
                {i % 2 === 0 ? (
                  <>
                    <div className="timeline-content">
                      <span className="timeline-year">{item.year}</span>
                      <h3 className="h3" style={{ color: "#fff", marginBottom: 8 }}>{item.title}</h3>
                      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{item.description}</p>
                    </div>
                    <div className="timeline-spacer" />
                  </>
                ) : (
                  <>
                    <div className="timeline-spacer" />
                    <div className="timeline-content">
                      <span className="timeline-year">{item.year}</span>
                      <h3 className="h3" style={{ color: "#fff", marginBottom: 8 }}>{item.title}</h3>
                      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{item.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ─────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          <Reveal>
            <div className="cta-panel">
              <span
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <Sprout size={26} strokeWidth={1.8} aria-hidden />
              </span>
              <h2 className="h2" style={{ color: "#fff", maxWidth: 480, margin: "0 auto 14px", fontSize: "clamp(22px, 3vw, 28px)" }}>
                Want to join our journey?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 380, margin: "0 auto 28px" }}>
                Whether you&apos;re a potential team member, partner, or client — we&apos;d love to hear from you.
              </p>
              <Link href="/contact" className="btn btn-ghost-white">
                Get in Touch →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
