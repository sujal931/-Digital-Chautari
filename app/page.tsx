import type { Metadata } from "next";
import Link from "next/link";
import StatBar from "@/components/StatBar";
import DarkBanner from "@/components/DarkBanner";
import Card from "@/components/Card";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";
import {
  Rocket, Package, Users, BadgeCheck, TrendingUp, Palette, Cpu, Handshake, Check,
  Megaphone, Clapperboard, CodeXml, PenTool, Briefcase, Smile, Eye, RefreshCw,
  Leaf, HeartPulse, Stethoscope, ShoppingCart, Building2, GraduationCap, Plane,
  Newspaper, Search, Lightbulb, ChartColumn, Film,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Chautari — Creative Technology Company in Kathmandu",
  description:
    "We build digital bridges between ideas and impact. Digital marketing, content creation, and health-tech software crafted in Kathmandu, Nepal.",
};

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────── */}
      <section className="hero-bg hero-py">
        <div className="container-site">
          <div style={{ maxWidth: 720 }}>
            <div className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 20 }}>
              <Rocket aria-hidden /> Welcome to Digital Chautari
            </div>
            <h1 className="h1" style={{ marginBottom: 20 }}>
              We build{" "}
              <span className="gradient-text">digital bridges</span>
              <br />
              between ideas and impact
            </h1>
            <p className="body-md" style={{ fontSize: 17, marginBottom: 36, maxWidth: 620 }}>
              Digital Chautari is a creative technology company based in Kathmandu, Nepal. We blend
              strategic digital marketing, compelling content creation, and innovative health-tech
              software to help brands grow and communities thrive.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 52 }}>
              <Link href="/services" className="btn btn-primary">
                Explore Services →
              </Link>
              <Link href="/products" className="btn btn-ghost">
                View Products
              </Link>
            </div>

            {/* Stat Bar */}
            <Reveal>
              <StatBar
                stats={[
                  { icon: Package, number: "3", label: "Products", chipClass: "chip-teal" },
                  { icon: Users, number: "6+", label: "Team Members", chipClass: "chip-mint" },
                  { icon: BadgeCheck, number: "100%", label: "Commitment", chipClass: "chip-gold" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2. Feature Strip ────────────────────────────────────────── */}
      <section className="section-py-tight" style={{ borderBottom: "1px solid var(--color-line)" }}>
        <div className="container-site">
          <div className="grid-4">
            {[
              { icon: TrendingUp, chip: "chip-teal", title: "Growth-Driven", body: "Every strategy is anchored to measurable outcomes — traffic, leads, and real revenue growth." },
              { icon: Palette, chip: "chip-lilac", title: "Creative-First", body: "Compelling storytelling and bold design sit at the heart of everything we produce." },
              { icon: Cpu, chip: "chip-mint", title: "Tech-Powered", body: "From full-stack apps to automation, we harness technology to give your brand an edge." },
              { icon: Handshake, chip: "chip-gold", title: "Client-Centric", body: "Transparent communication, agile delivery, and a dedicated team invested in your success." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <Card icon={item.icon} chipClass={item.chip} title={item.title} body={item.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Who We Are ───────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Left */}
            <Reveal>
              <div>
                <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 16 }}>
                  Who We Are
                </span>
                <h2 className="h2" style={{ marginBottom: 20 }}>
                  A Chautari where{" "}
                  <span className="gradient-text">ideas meet execution</span>
                </h2>
                <p className="body-md" style={{ marginBottom: 16 }}>
                  In Nepali culture, a <em>chautari</em> is a community resting place — a gathering
                  spot under a banyan tree where ideas, stories, and knowledge are exchanged. We
                  embody that spirit digitally. Founded in 2025 by a passionate team of marketers,
                  creators, and engineers, Digital Chautari exists to give Nepali and global brands
                  the digital presence they deserve.
                </p>
                <p className="body-md" style={{ marginBottom: 28 }}>
                  We&apos;re not just another agency. We operate three distinct ventures — a marketing
                  agency, a content studio, and a health-tech platform — each reinforcing the others
                  to deliver holistic, cross-functional solutions under one roof.
                </p>

                {/* 2×2 Checklist */}
                <div className="grid-2" style={{ marginBottom: 32 }}>
                  {["Creative Strategy", "Brand Storytelling", "Full-Stack Engineering", "Health-Tech Expertise"].map((label) => (
                    <div key={label} className="check-item">
                      <span className="check-icon"><Check aria-hidden /></span>
                      <span style={{ fontWeight: 500, fontSize: 14 }}>{label}</span>
                    </div>
                  ))}
                </div>

                <Link href="/about" className="btn btn-ghost">
                  Meet the Team →
                </Link>
              </div>
            </Reveal>

            {/* Right — 2×2 service teaser cards */}
            <div className="grid-2">
              {[
                { icon: Megaphone, chip: "chip-teal", title: "Digital Marketing", body: "SEO, social media, paid ads, and analytics strategies that drive real traffic." },
                { icon: Clapperboard, chip: "chip-gold", title: "Content Creation", body: "Video, graphics, copy, and multimedia content that captivates and converts." },
                { icon: CodeXml, chip: "chip-mint", title: "Software Development", body: "Custom web & mobile applications built for performance and scalability." },
                { icon: PenTool, chip: "chip-lilac", title: "Branding & Design", body: "Visual identities, logos, and brand systems that make lasting impressions." },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <Card icon={item.icon} chipClass={item.chip} title={item.title} body={item.body} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Dark Stats Banner ─────────────────────────────────────── */}
      <DarkBanner eyebrow="By the Numbers" title="Results that speak for themselves">
        <div className="grid-4">
          {[
            { icon: Briefcase, number: "250+", label: "Projects Delivered" },
            { icon: Smile, number: "40+", label: "Happy Clients" },
            { icon: Eye, number: "1M+", label: "Content Views" },
            { icon: RefreshCw, number: "98%", label: "Client Retention" },
          ].map(({ icon: Icon, ...stat }, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div
                style={{
                  textAlign: "center",
                  padding: "28px 20px",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "var(--radius-card)",
                  border: "1px solid var(--color-navy-border)",
                }}
              >
                <span className="chip chip-dark-gold" style={{ margin: "0 auto 14px" }}>
                  <Icon aria-hidden />
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 800,
                    fontSize: 38,
                    color: "var(--color-gold)",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </DarkBanner>

      {/* ── 5. Products Teaser ──────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 16 }}>
              Our Ventures
            </span>
            <h2 className="h2">
              Three ventures,{" "}
              <span className="gradient-text">one vision</span>
            </h2>
            <p className="body-md" style={{ maxWidth: 560, margin: "12px auto 0" }}>
              Each product is a distinct business unit united by our core mission — to make digital
              growth accessible and impactful.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                icon: Leaf,
                chip: "chip-teal",
                title: "Eco Creative Marketing Agency",
                category: "Digital Marketing",
                body: "A purpose-led marketing agency delivering sustainable growth through data-driven campaigns, SEO strategies, and community-first brand building.",
                href: "/products",
              },
              {
                icon: Clapperboard,
                chip: "chip-gold",
                title: "One Content Creation Studio",
                category: "Content Studio",
                body: "A full-service content production house — from short-form reels to documentary-style videos, infographics, and podcast production.",
                href: "/products",
              },
              {
                icon: HeartPulse,
                chip: "chip-pink",
                title: "Physio@Home",
                category: "Health-Tech Platform",
                body: "Nepal's first at-home physiotherapy booking platform, connecting certified physiotherapists with patients needing rehabilitation from home.",
                href: "/products",
              },
            ].map(({ icon: Icon, ...item }, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card" style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <span className={`chip ${item.chip}`}><Icon aria-hidden /></span>
                    <span className="badge-primary" style={{ fontSize: 11 }}>{item.category}</span>
                  </div>
                  <h3 className="h3" style={{ marginBottom: 10 }}>{item.title}</h3>
                  <p className="body-sm" style={{ flex: 1, marginBottom: 18 }}>{item.body}</p>
                  <Link href={item.href} style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)", textDecoration: "none" }}>
                    Learn more →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Sectors ──────────────────────────────────────────────── */}
      <section className="section-py-tight" style={{ background: "rgba(15,148,136,0.03)", borderTop: "1px solid var(--color-line)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 14 }}>Industries</span>
            <h2 className="h2">Sectors we serve</h2>
          </div>
          <div className="grid-3" style={{ gap: 16 }}>
            {[
              { icon: Stethoscope, title: "Healthcare", chip: "chip-pink" },
              { icon: ShoppingCart, title: "E-Commerce", chip: "chip-teal" },
              { icon: Building2, title: "Real Estate", chip: "chip-mint" },
              { icon: GraduationCap, title: "Education", chip: "chip-gold" },
              { icon: Plane, title: "Tourism & Hospitality", chip: "chip-lilac" },
              { icon: Newspaper, title: "Media & Publishing", chip: "chip-teal" },
            ].map(({ icon: Icon, ...sector }, i) => (
              <Reveal key={sector.title} delay={i * 55}>
                <div
                  className="card"
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 22px" }}
                >
                  <span className={`chip ${sector.chip}`}><Icon aria-hidden /></span>
                  <span style={{ fontFamily: "var(--font-sora)", fontWeight: 700, fontSize: 15 }}>
                    {sector.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Dark Process ─────────────────────────────────────────── */}
      <DarkBanner eyebrow="How We Work" title="Our 4-step process">
        <div className="grid-4">
          {[
            { num: "01", icon: Search, title: "Discover", body: "We deep-dive into your brand, audience, and competitive landscape to uncover real opportunities." },
            { num: "02", icon: PenTool, title: "Design", body: "Strategy blueprints, creative concepts, and wireframes are developed collaboratively with your team." },
            { num: "03", icon: CodeXml, title: "Develop", body: "Our engineers and creators build, test, and iterate rapidly using agile sprints and continuous feedback." },
            { num: "04", icon: Rocket, title: "Deliver", body: "We launch, monitor, and optimise — ensuring long-term performance beyond the initial delivery." },
          ].map(({ icon: Icon, ...step }, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="card-dark" style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "var(--color-gold)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Step {step.num}
                </div>
                <span className="chip chip-dark chip-lg" style={{ margin: "0 auto 14px" }}>
                  <Icon aria-hidden />
                </span>
                <h3 className="h3" style={{ color: "#fff", marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </DarkBanner>

      {/* ── 8. Testimonials ─────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 14 }}>Testimonials</span>
            <h2 className="h2">What our clients say</h2>
          </div>
          <div className="grid-3">
            {[
              {
                quote: "Digital Chautari completely transformed our online presence. Within three months, our organic traffic tripled and we saw a 40% uptick in qualified leads. They truly understand what growth means.",
                name: "Priya Maharjan",
                title: "Founder",
                company: "Himalayan Wellness Co.",
              },
              {
                quote: "The content team at One Studio produced video content that outperformed everything we had done before. Our reel views jumped to 200K+ in the first week. Absolutely worth every paisa.",
                name: "Bikash Thapa",
                title: "Marketing Director",
                company: "Yeti Apparel",
              },
              {
                quote: "Physio@Home has been a revelation for our clinic. We now serve patients across Kathmandu valley with zero scheduling friction. The platform is intuitive, reliable, and our physiotherapists love it.",
                name: "Dr. Sunita Rana",
                title: "Chief Physiotherapist",
                company: "NepaPhysio Centre",
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <TestimonialCard {...t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Blog Teaser ──────────────────────────────────────────── */}
      <section className="section-py-tight" style={{ background: "rgba(15,148,136,0.03)", borderTop: "1px solid var(--color-line)" }}>
        <div className="container-site">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <div>
              <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 12 }}>Blog</span>
              <h2 className="h2">Latest from our blog</h2>
            </div>
            <Link href="#" className="btn btn-ghost btn-sm">View all posts →</Link>
          </div>
          <div className="grid-3">
            {[
              {
                category: "Digital Marketing",
                date: "Sep 2025",
                readTime: "5 min read",
                title: "How Nepali SMEs Can Win at SEO in 2025",
                excerpt: "Local SEO is the single highest-ROI channel for small businesses in Nepal. Here's a step-by-step playbook any founder can execute in a weekend.",
                href: "#",
                icon: ChartColumn,
                accentColor: "#E7F2F4",
              },
              {
                category: "Content Strategy",
                date: "Aug 2025",
                readTime: "7 min read",
                title: "Short-Form Video: The Blueprint That Scaled Our Clients to 1M Views",
                excerpt: "We broke down 200 of our best-performing videos to find the formula. Hook, middle-frame, CTA — here's exactly what works in the Nepal market.",
                href: "#",
                icon: Film,
                accentColor: "#FDF1DE",
              },
              {
                category: "Health-Tech",
                date: "Jul 2025",
                readTime: "6 min read",
                title: "Physio@Home: Building Nepal's First At-Home Rehab Platform",
                excerpt: "From idea to 100 registered physiotherapists in 60 days. A founder's account of validating a health-tech startup in a resource-constrained market.",
                href: "#",
                icon: HeartPulse,
                accentColor: "#E7F5EA",
              },
            ].map((post, i) => (
              <Reveal key={post.title} delay={i * 80}>
                <BlogCard {...post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Closing CTA ─────────────────────────────────────────── */}
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
                <Lightbulb size={26} strokeWidth={1.8} aria-hidden />
              </span>
              <h2
                className="h2"
                style={{
                  color: "#fff",
                  maxWidth: 560,
                  margin: "0 auto 16px",
                  fontSize: "clamp(22px, 3vw, 30px)",
                }}
              >
                Ready to build something extraordinary together?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, maxWidth: 460, margin: "0 auto 32px" }}>
                Whether you need a full digital strategy or a single killer campaign, we&apos;re ready
                to make it happen.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn" style={{ background: "#fff", color: "var(--color-primary-dark)" }}>
                  Start a Project →
                </Link>
                <Link href="/services" className="btn btn-ghost-white">
                  View Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          section > .container-site > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
