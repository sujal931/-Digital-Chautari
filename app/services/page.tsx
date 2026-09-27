import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import PricingCard from "@/components/PricingCard";
import DarkBanner from "@/components/DarkBanner";
import Reveal from "@/components/Reveal";
import TestimonialsSection from "@/components/TestimonialsSection";
import servicesHero from "@/public/images/heroes/services.jpg";
import teamMeetingBg from "@/public/images/backgrounds/team-meeting.jpg";
import rajeshPhoto from "@/public/images/testimonials/rajesh-shrestha.jpg";
import anishaPhoto from "@/public/images/testimonials/anisha-gurung.jpg";
import sumanPhoto from "@/public/images/testimonials/suman-karki.jpg";
import {
  Megaphone, Clapperboard, CodeXml, Search, Share2, Target, ChartColumn, Video, Image,
  PenLine, Mic, Globe, Smartphone, Server, ShieldCheck, ClipboardList, Stethoscope,
  ShoppingCart, Building2, GraduationCap, Plane, Newspaper, UserCheck, Repeat, Receipt,
  LifeBuoy, Layers, MonitorSmartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Digital Marketing, Content & Software Development",
  description:
    "Explore Digital Chautari's full suite of services: digital marketing, content creation, and software development — from starter packages to enterprise solutions.",
};

const serviceCategories = [
  {
    id: "digital-marketing",
    icon: Megaphone,
    chip: "chip-teal",
    title: "Digital Marketing",
    description:
      "We design and execute data-led marketing strategies that put your brand in front of the right audience at exactly the right moment — driving qualified traffic and measurable ROI.",
    subServices: [
      { icon: Search, title: "SEO & SEM", body: "Technical audits, keyword strategies, and paid search campaigns that rank and convert." },
      { icon: Share2, title: "Social Media Marketing", body: "Platform-native content strategies for Instagram, Facebook, TikTok, and LinkedIn." },
      { icon: Target, title: "Paid Advertising", body: "Precision-targeted Google Ads, Meta Ads, and programmatic display campaigns." },
      { icon: ChartColumn, title: "Analytics & Reporting", body: "Full-funnel dashboards, attribution modelling, and monthly performance reports." },
    ],
  },
  {
    id: "content-creation",
    icon: Clapperboard,
    chip: "chip-gold",
    title: "Content Creation",
    description:
      "From a single scroll-stopping reel to a comprehensive content ecosystem, our studio produces multimedia assets that resonate with your audience and move them to act.",
    subServices: [
      { icon: Video, title: "Video Production", body: "Commercials, brand films, social reels, and documentary-style storytelling." },
      { icon: Image, title: "Graphic Design", body: "Brand visuals, social posts, infographics, and print-ready marketing collateral." },
      { icon: PenLine, title: "Copywriting & Blogging", body: "SEO-optimised articles, web copy, email sequences, and long-form thought leadership." },
      { icon: Mic, title: "Podcast Production", body: "End-to-end podcast setup: recording, editing, show notes, and distribution." },
    ],
  },
  {
    id: "software-dev",
    icon: CodeXml,
    chip: "chip-mint",
    title: "Software Development",
    description:
      "Our engineering team builds fast, scalable, and beautiful digital products — from marketing websites to full-featured SaaS platforms and mobile applications.",
    subServices: [
      { icon: Globe, title: "Web Development", body: "Next.js, React, and modern CMS-powered websites with top-tier performance scores." },
      { icon: Smartphone, title: "Mobile App Development", body: "Cross-platform iOS and Android applications built with React Native and Flutter." },
      { icon: Server, title: "API & Backend Engineering", body: "RESTful and GraphQL APIs, database architecture, and cloud infrastructure." },
      { icon: ShieldCheck, title: "QA & Testing", body: "Automated test suites, performance benchmarking, and security audits." },
    ],
  },
];

const pricingTiers = [
  {
    tier: "Starter",
    price: "Rs 15,000",
    period: "/month",
    description: "Perfect for early-stage businesses that need a strong digital foundation.",
    features: [
      "1 core service channel",
      "Monthly content calendar",
      "Basic SEO setup",
      "Weekly social posts (3×/week)",
      "Monthly performance report",
      "Email support",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/contact",
  },
  {
    tier: "Professional",
    price: "Rs 45,000",
    period: "/month",
    description: "The full-stack growth package for brands ready to scale aggressively.",
    features: [
      "All Starter features",
      "3 service channels",
      "Advanced SEO & paid ads",
      "Daily social management",
      "Video content (4×/month)",
      "Bi-weekly strategy calls",
      "Dedicated project manager",
      "Priority support",
    ],
    ctaLabel: "Most Popular Choice",
    ctaHref: "/contact",
    featured: true,
    badge: "Most Popular",
  },
  {
    tier: "Enterprise",
    price: "Custom",
    period: "",
    description: "Bespoke solutions for large organisations with complex multi-market needs.",
    features: [
      "All Professional features",
      "Unlimited service channels",
      "Custom software development",
      "White-label reporting",
      "SLA guarantees",
      "On-site team augmentation",
      "Executive strategy sessions",
      "24/7 emergency support",
    ],
    ctaLabel: "Book a Consultation",
    ctaHref: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="What We Offer"
        eyebrowIcon={ClipboardList}
        titleLine1="Services that"
        gradientWords="drive growth"
        lede="From building your brand's digital identity to engineering the platforms that power your business — Digital Chautari delivers end-to-end creative and technology services tailored to the Nepali market and beyond."
        primaryBtn={{ label: "Book a Consultation →", href: "/contact" }}
        secondaryBtn={{ label: "View Pricing", href: "#pricing" }}
        image={servicesHero}
        imageAlt="Team members working together on laptops around a shared desk"
      />

      {/* ── Service Categories ──────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          {serviceCategories.map(({ icon: CatIcon, ...cat }, catIdx) => (
            <Reveal key={cat.id} delay={catIdx * 60}>
              <div
                id={cat.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 56,
                  alignItems: "flex-start",
                  marginBottom: catIdx < serviceCategories.length - 1 ? 72 : 0,
                  paddingBottom: catIdx < serviceCategories.length - 1 ? 72 : 0,
                  borderBottom: catIdx < serviceCategories.length - 1 ? "1px solid var(--color-line)" : "none",
                }}
              >
                {/* Left */}
                <div>
                  <span className={`chip chip-lg ${cat.chip}`} style={{ marginBottom: 16 }}>
                    <CatIcon aria-hidden />
                  </span>
                  <h2 className="h2" style={{ marginBottom: 16, marginTop: 12 }}>
                    {cat.title}
                  </h2>
                  <p className="body-md" style={{ marginBottom: 28 }}>
                    {cat.description}
                  </p>
                  <Link href="/contact" className="btn btn-primary btn-sm">
                    Start a {cat.title} Project →
                  </Link>
                </div>

                {/* Right — 2×2 sub-services */}
                <div className="grid-2">
                  {cat.subServices.map(({ icon: SubIcon, ...sub }, i) => (
                    <Reveal key={sub.title} delay={i * 60}>
                      <div className="card" style={{ padding: 20 }}>
                        <span className={`chip ${cat.chip}`} style={{ width: 38, height: 38, marginBottom: 12 }}>
                          <SubIcon aria-hidden style={{ width: 18, height: 18 }} />
                        </span>
                        <h3 className="h3" style={{ fontSize: 15, marginBottom: 8 }}>{sub.title}</h3>
                        <p className="body-sm" style={{ fontSize: 13 }}>{sub.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────── */}
      <section id="pricing" className="section-py" style={{ background: "rgba(15,148,136,0.03)", borderTop: "1px solid var(--color-line)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 14 }}>Transparent Pricing</span>
            <h2 className="h2" style={{ marginBottom: 12 }}>Simple, honest pricing</h2>
            <p className="body-md" style={{ maxWidth: 500, margin: "0 auto" }}>
              All plans include onboarding support and a 30-day performance review. No hidden fees.
            </p>
          </div>
          <div className="grid-3" style={{ alignItems: "start", marginBottom: 24 }}>
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.tier} delay={i * 80}>
                <PricingCard {...tier} />
              </Reveal>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 13, color: "var(--color-muted)", marginTop: 16 }}>
            All prices are in Nepalese Rupees (NPR) and exclude applicable taxes. Custom scopes quoted on request.
          </p>
        </div>
      </section>

      {/* ── Industries ──────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 14 }}>Industries</span>
            <h2 className="h2">Who we work with</h2>
          </div>
          <div className="grid-3" style={{ gap: 16 }}>
            {[
              { icon: Stethoscope, title: "Healthcare", chip: "chip-pink", body: "Clinics, pharmacies, physiotherapy centres, and health-tech startups." },
              { icon: ShoppingCart, title: "E-Commerce", chip: "chip-teal", body: "Online stores, D2C brands, and marketplace sellers seeking growth." },
              { icon: Building2, title: "Real Estate", chip: "chip-mint", body: "Property developers, agencies, and PropTech platforms." },
              { icon: GraduationCap, title: "Education", chip: "chip-gold", body: "Schools, EdTech platforms, and professional training institutes." },
              { icon: Plane, title: "Tourism", chip: "chip-lilac", body: "Hotels, trekking operators, and destination-marketing organisations." },
              { icon: Newspaper, title: "Media", chip: "chip-teal", body: "News portals, magazines, podcasters, and content platforms." },
            ].map(({ icon: Icon, ...ind }, i) => (
              <Reveal key={ind.title} delay={i * 55}>
                <div className="card" style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "22px 22px" }}>
                  <span className={`chip ${ind.chip}`} style={{ flexShrink: 0 }}><Icon aria-hidden /></span>
                  <div>
                    <h3 className="h3" style={{ fontSize: 15, marginBottom: 6 }}>{ind.title}</h3>
                    <p className="body-sm" style={{ fontSize: 13 }}>{ind.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark Why Work With Us ────────────────────────────────────── */}
      <DarkBanner eyebrow="Our Advantage" title="Why work with us?" bgImage={teamMeetingBg}>
        <div className="grid-3">
          {[
            { icon: UserCheck, title: "Dedicated Project Manager", body: "A single point of contact who owns your project end-to-end and keeps things moving." },
            { icon: Repeat, title: "Agile Development Cycle", body: "Two-week sprints, continuous delivery, and rapid iteration based on real feedback." },
            { icon: Receipt, title: "Transparent Pricing", body: "No surprise invoices — every deliverable and cost is scoped and signed off before work begins." },
            { icon: LifeBuoy, title: "Post-Launch Support", body: "60 days of complimentary support after every major project launch. We don't disappear." },
            { icon: Layers, title: "Scalable Architecture", body: "Systems built to grow with you — from 100 to 100,000 users without a rebuild." },
            { icon: MonitorSmartphone, title: "Cross-Platform Expertise", body: "Web, iOS, Android, and social — one team that delivers consistently across every platform." },
          ].map(({ icon: Icon, ...item }, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="card-dark" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span className="chip chip-dark" style={{ flexShrink: 0 }}><Icon aria-hidden /></span>
                <div>
                  <h3 className="h3" style={{ fontSize: 15, marginBottom: 8, color: "#fff" }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </DarkBanner>

      {/* ── Client Reviews ──────────────────────────────────────────── */}
      <TestimonialsSection
        eyebrow="Client Reviews"
        title="Trusted by growing brands"
        items={[
          {
            quote: "The SEO and paid ads programme paid for itself in the second month. Our cost per lead dropped by half and the monthly reports are the clearest we've ever received from an agency.",
            name: "Rajesh Shrestha",
            title: "Managing Director",
            company: "Summit Realty",
            photo: rajeshPhoto,
          },
          {
            quote: "They rebuilt our booking website and handled all our social content. Enquiries through the site have doubled, and we finally have one team that understands both the design and the tech.",
            name: "Anisha Gurung",
            title: "Owner",
            company: "Pokhara Lakeside Stays",
            photo: anishaPhoto,
          },
          {
            quote: "Their engineers shipped our learning app on both iOS and Android in under three months. Two-week sprints meant we always knew exactly where things stood.",
            name: "Suman Karki",
            title: "Co-Founder",
            company: "PadhaiHub",
            photo: sumanPhoto,
          },
        ]}
      />

      {/* ── Closing CTA ─────────────────────────────────────────────── */}
      <section className="section-py">
        <div className="container-site">
          <Reveal>
            <div className="cta-panel">
              <h2 className="h2" style={{ color: "#fff", maxWidth: 540, margin: "0 auto 14px", fontSize: "clamp(22px, 3vw, 28px)" }}>
                Let&apos;s find the right service for you
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, maxWidth: 440, margin: "0 auto 28px" }}>
                Not sure which package fits? Book a free 30-minute discovery call and we&apos;ll map the
                perfect solution to your goals.
              </p>
              <Link href="/contact" className="btn btn-ghost-white">
                Book a Consultation →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
