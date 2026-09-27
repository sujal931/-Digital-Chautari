import type { StaticImageData } from "next/image";
import TestimonialCard from "@/components/TestimonialCard";
import Reveal from "@/components/Reveal";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  photo: StaticImageData;
}

interface TestimonialsSectionProps {
  eyebrow?: string;
  title: string;
  items: Testimonial[];
}

export default function TestimonialsSection({ eyebrow = "Testimonials", title, items }: TestimonialsSectionProps) {
  return (
    <section className="section-py">
      <div className="container-site">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="pill-eyebrow" style={{ display: "inline-flex", marginBottom: 14 }}>
            {eyebrow}
          </span>
          <h2 className="h2">{title}</h2>
        </div>
        <div className="grid-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} style={{ height: "100%" }}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
