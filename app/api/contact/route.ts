import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  projectTypes?: string[];
  message: string;
}

function validate(data: Partial<ContactPayload>): string | null {
  if (!data.name || data.name.trim().length < 2) return "Name must be at least 2 characters.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Please provide a valid email address.";
  if (!data.subject || data.subject.trim().length < 3) return "Subject is too short.";
  if (!data.message || data.message.trim().length < 10) return "Message must be at least 10 characters.";
  return null;
}

export async function POST(request: NextRequest) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  // ── Stub: In production, send email via Resend / SendGrid / Nodemailer ──
  // await sendEmail({
  //   to: "hello@digitalchautari.com",
  //   subject: `[Contact] ${body.subject}`,
  //   html: `<p>From: ${body.name} &lt;${body.email}&gt;</p><p>${body.message}</p>`,
  // });

  // Simulate slight processing delay
  await new Promise((r) => setTimeout(r, 400));

  console.log("[contact form submission]", {
    name: body.name,
    email: body.email,
    subject: body.subject,
    projectTypes: body.projectTypes,
    messageLength: body.message!.length,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json(
    {
      success: true,
      message: "Your message has been received. We'll get back to you within 24 hours.",
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
