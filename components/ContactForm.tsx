"use client";

import { useState, FormEvent } from "react";
import { CircleCheck } from "lucide-react";

const projectTypes = [
  "Digital Marketing",
  "Content Creation",
  "Website Development",
  "Mobile App",
  "Branding & Design",
  "Health-Tech",
  "Other",
];

type Status = "idle" | "pending" | "success" | "error";

export default function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const toggle = (type: string) =>
    setSelected((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("pending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      projectTypes: selected,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
      } else {
        setStatus("success");
        form.reset();
        setSelected([]);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please check your connection.");
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          background: "rgba(15,148,136,0.06)",
          border: "1.5px solid rgba(15,148,136,0.25)",
          borderRadius: "var(--radius-card)",
          padding: 40,
          textAlign: "center",
        }}
      >
        <span
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "rgba(15,148,136,0.12)",
            color: "var(--color-primary)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <CircleCheck size={30} strokeWidth={1.8} aria-hidden />
        </span>
        <h3 className="h3" style={{ marginBottom: 10 }}>
          Message sent!
        </h3>
        <p className="body-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn btn-ghost"
          style={{ marginTop: 24 }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Name + Email */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block", color: "var(--color-ink)" }}>
            Full Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Aarav Shrestha"
            className="input-field"
          />
        </div>
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block", color: "var(--color-ink)" }}>
            Email Address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="aarav@example.com"
            className="input-field"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block", color: "var(--color-ink)" }}>
          Subject *
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          placeholder="How can we help you?"
          className="input-field"
        />
      </div>

      {/* Project Type */}
      <div>
        <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 10, display: "block", color: "var(--color-ink)" }}>
          Project Type (select all that apply)
        </label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              id={`project-type-${type.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => toggle(type)}
              style={{
                padding: "7px 16px",
                borderRadius: 20,
                border: "1px solid",
                borderColor: selected.includes(type) ? "var(--color-primary)" : "var(--color-line)",
                background: selected.includes(type) ? "rgba(15,148,136,0.08)" : "#fff",
                color: selected.includes(type) ? "var(--color-primary)" : "var(--color-muted)",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, display: "block", color: "var(--color-ink)" }}>
          Your Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          placeholder="Tell us about your project, goals, and timeline..."
          className="input-field"
          style={{ minHeight: 140 }}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div
          style={{
            background: "rgba(224,48,48,0.06)",
            border: "1px solid rgba(224,48,48,0.2)",
            borderRadius: 8,
            padding: "12px 16px",
            fontSize: 14,
            color: "#b91c1c",
          }}
        >
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        id="contact-submit"
        type="submit"
        disabled={status === "pending"}
        className="btn btn-primary"
        style={{ alignSelf: "flex-start", minWidth: 160, justifyContent: "center" }}
      >
        {status === "pending" ? (
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", animation: "spin 0.8s linear infinite", display: "inline-block" }} />
            Sending…
          </span>
        ) : (
          "Send Message →"
        )}
      </button>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 760px) {
          form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
