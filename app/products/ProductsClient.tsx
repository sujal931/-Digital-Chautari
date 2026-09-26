"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  Leaf, Clapperboard, HeartPulse, Megaphone, Video, Activity, Layers, Check,
  MapPin, CalendarCheck, TrendingUp,
} from "lucide-react";

const products = [
  {
    id: "eco-creative",
    tab: "Eco Creative",
    fullTab: "Eco Creative Marketing Agency",
    icon: Leaf,
    chip: "chip-teal",
    category: "Digital Marketing Agency",
    title: "Eco Creative Marketing Agency",
    description:
      "Eco Creative is a purpose-led digital marketing agency designed for brands that want sustainable, community-driven growth. We combine data-driven strategy with authentic storytelling to build brands that people actually care about.",
    stats: ["50+ Campaigns Launched", "3× Average ROAS", "120K+ Organic Reach/Month"],
    cta: "Work With Eco Creative",
    ctaHref: "/contact",
    previewBg: "#E7F2F4",
    previewIcon: Megaphone,
    previewItems: ["SEO Strategy", "Social Media", "Paid Ads", "Analytics", "Brand Voice", "Email Marketing"],
    features: ["Data-first strategy sessions", "Dedicated brand strategist", "Monthly ROI reporting", "Community engagement management", "Influencer partnership network"],
  },
  {
    id: "one-studio",
    tab: "One Studio",
    fullTab: "One Content Creation Studio",
    icon: Clapperboard,
    chip: "chip-gold",
    category: "Content Production Studio",
    title: "One Content Creation Studio",
    description:
      "One Studio is our full-service content production house. Whether you need a single viral reel or a complete quarterly content calendar, our team of cinematographers, graphic designers, and copywriters deliver world-class creative assets.",
    stats: ["1M+ Total Content Views", "200+ Videos Produced", "30+ Brand Partners"],
    cta: "Book a Studio Session",
    ctaHref: "/contact",
    previewBg: "#FDF1DE",
    previewIcon: Video,
    previewItems: ["Video Reels", "Brand Films", "Podcasts", "Infographics", "Copywriting", "Photography"],
    features: ["In-house production crew", "Same-day turnaround for reels", "Custom music & voiceover", "Multi-platform distribution", "Content repurposing strategy"],
  },
  {
    id: "physio-home",
    tab: "Physio@Home",
    fullTab: "Physio@Home",
    icon: HeartPulse,
    chip: "chip-pink",
    category: "Health-Tech Platform",
    title: "Physio@Home",
    description:
      "Physio@Home is Nepal's pioneering at-home physiotherapy booking platform. We connect certified physiotherapists with patients needing professional rehabilitation from the comfort of their homes — making quality healthcare accessible across the Kathmandu Valley and beyond.",
    stats: ["100+ Certified Physios", "500+ Sessions Booked", "4.9/5 Patient Rating"],
    cta: "Explore Physio@Home",
    ctaHref: "https://physiohome.com.np",
    previewBg: "#FDEEF0",
    previewIcon: Activity,
    previewItems: ["Book Session", "Track Progress", "Physio Profiles", "Video Consult", "Home Visits", "Recovery Plans"],
    features: ["Verified & licensed physiotherapists", "Real-time booking & scheduling", "In-app progress tracking", "Insurance claim support", "Emergency visit booking"],
  },
];

export default function ProductsPageClient() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = products[activeIdx];
  const ActiveIcon = active.icon;
  const PreviewIcon = active.previewIcon;

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="hero-bg hero-py">
        <div className="container-site">
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <div className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 18 }}>
              <Layers aria-hidden /> Our Ventures
            </div>
            <h1 className="h1" style={{ marginBottom: 18 }}>
              Three ventures,{" "}
              <span className="gradient-text">one vision</span>
            </h1>
            <p className="body-md" style={{ fontSize: 17, maxWidth: 560, margin: "0 auto" }}>
              Each product tackles a distinct problem in the Nepali and broader market. Together they
              form a vertically-integrated creative technology ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tabbed Switcher ────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          {/* Tabs */}
          <div role="tablist" style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
            {products.map(({ icon: TabIcon, ...p }, i) => (
              <button
                key={p.id}
                onClick={() => setActiveIdx(i)}
                className={`tab-pill${activeIdx === i ? " active" : ""}`}
                id={`product-tab-${p.id}`}
                role="tab"
                aria-selected={activeIdx === i}
              >
                <TabIcon aria-hidden /> {p.tab}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            key={active.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
              animation: "fadeIn 0.35s ease",
            }}
          >
            {/* Left — Content */}
            <div>
              <span className={`chip chip-lg ${active.chip}`} style={{ marginBottom: 14 }}>
                <ActiveIcon aria-hidden />
              </span>
              <div style={{ marginTop: 12, marginBottom: 4 }}>
                <span className="badge-primary" style={{ fontSize: 12 }}>{active.category}</span>
              </div>
              <h2 className="h2" style={{ marginBottom: 16, marginTop: 12 }}>{active.title}</h2>
              <p className="body-md" style={{ marginBottom: 24 }}>{active.description}</p>

              {/* Stats/Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {active.stats.map((stat) => (
                  <span
                    key={stat}
                    style={{
                      display: "inline-block",
                      background: "rgba(15,148,136,0.08)",
                      border: "1px solid rgba(15,148,136,0.18)",
                      color: "var(--color-primary)",
                      borderRadius: 20,
                      padding: "5px 14px",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {stat}
                  </span>
                ))}
              </div>

              {/* Feature List */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {active.features.map((f) => (
                  <li key={f} className="check-item">
                    <span className="check-icon"><Check aria-hidden /></span>
                    <span style={{ fontSize: 15 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link href={active.ctaHref} className="btn btn-primary">
                {active.cta} →
              </Link>
            </div>

            {/* Right — Mock UI Preview */}
            <Reveal>
              <div
                style={{
                  background: active.previewBg,
                  borderRadius: 16,
                  padding: 32,
                  minHeight: 380,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  border: "1px solid var(--color-line)",
                }}
              >
                {/* Mock header bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                  <div style={{ flex: 1, height: 8, borderRadius: 4, background: "rgba(0,0,0,0.07)", marginLeft: 8 }} />
                </div>

                {/* Center icon */}
                <div style={{ display: "flex", justifyContent: "center", padding: "12px 0" }}>
                  <span
                    style={{
                      width: 88,
                      height: 88,
                      borderRadius: 20,
                      background: "#fff",
                      color: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 12px 28px -16px rgba(16,24,38,0.35)",
                    }}
                  >
                    <PreviewIcon size={40} strokeWidth={1.6} aria-hidden />
                  </span>
                </div>

                {/* Feature pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                  {active.previewItems.map((item) => (
                    <span
                      key={item}
                      style={{
                        background: "#fff",
                        borderRadius: 20,
                        padding: "6px 14px",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--color-ink)",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Mock action bar */}
                <div
                  style={{
                    marginTop: "auto",
                    background: "#fff",
                    borderRadius: 10,
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <span className={`chip ${active.chip}`} style={{ width: 36, height: 36 }}>
                    <ActiveIcon aria-hidden style={{ width: 18, height: 18 }} />
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ height: 10, borderRadius: 4, background: "var(--color-line)", marginBottom: 6 }} />
                    <div style={{ height: 8, width: "60%", borderRadius: 4, background: "var(--color-line)" }} />
                  </div>
                  <div
                    style={{
                      padding: "7px 16px",
                      borderRadius: 20,
                      background: "var(--color-primary)",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    Open →
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Dark Spotlight — Physio@Home ─────────────────────────── */}
      <section className="section-dark section-py">
        <div className="container-site" style={{ textAlign: "center" }}>
          <span className="pill-eyebrow-gold" style={{ display: "inline-flex", marginBottom: 20 }}>
            <HeartPulse aria-hidden /> Health-Tech Spotlight
          </span>
          <h2 className="h2" style={{ color: "#fff", marginBottom: 16, fontSize: "clamp(24px, 3.5vw, 34px)" }}>
            Physio@Home —{" "}
            <span style={{ color: "var(--color-gold)" }}>healthcare reimagined</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto 40px" }}>
            We believe quality physiotherapy should not be limited to who can travel to a clinic. Physio@Home
            brings certified, licensed physiotherapists directly to your home — transforming rehabilitation
            from a burden into a seamless part of everyday life.
          </p>

          <div className="grid-3" style={{ maxWidth: 900, margin: "0 auto 40px", gap: 20 }}>
            {[
              { icon: MapPin, title: "Home Visits", body: "Physios come to you — no traffic, no waiting rooms." },
              { icon: CalendarCheck, title: "Smart Scheduling", body: "Book, reschedule, or cancel in under 60 seconds." },
              { icon: TrendingUp, title: "Progress Tracking", body: "Visual recovery milestones and exercise logs." },
            ].map(({ icon: Icon, ...f }) => (
              <div key={f.title} className="card-dark">
                <span className="chip chip-dark" style={{ margin: "0 auto 14px" }}>
                  <Icon aria-hidden />
                </span>
                <h3 className="h3" style={{ color: "#fff", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>{f.body}</p>
              </div>
            ))}
          </div>

          <Link href="/contact" className="btn btn-primary">
            Partner With Physio@Home →
          </Link>
        </div>
      </section>

      {/* ── Closing CTA ─────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          <Reveal>
            <div className="cta-panel">
              <h2 className="h2" style={{ color: "#fff", maxWidth: 520, margin: "0 auto 14px", fontSize: "clamp(22px, 3vw, 28px)" }}>
                Interested in our ventures?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 420, margin: "0 auto 28px" }}>
                Get in touch to learn how our products can work for you — as a client, partner, or investor.
              </p>
              <Link href="/contact" className="btn btn-ghost-white">
                Start the Conversation →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 760px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
