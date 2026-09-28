import { NextResponse } from "next/server";

type Payload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  interests?: unknown;
  budget?: unknown;
};

const str = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const lead = {
    name: str(body.name, 120),
    email: str(body.email, 200),
    company: str(body.company, 200),
    message: str(body.message, 5000),
    budget: str(body.budget, 40),
    interests: Array.isArray(body.interests) ? body.interests.map((i) => str(i, 40)).filter(Boolean).slice(0, 10) : [],
  };

  if (!lead.name || !lead.message) {
    return NextResponse.json({ error: "Please add your name and a short project description." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // Forward leads to your CRM / inbox by setting CONTACT_WEBHOOK_URL
  // (e.g. a Slack incoming webhook, Zapier, Make or your own endpoint).
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `New lead: ${lead.name} <${lead.email}> — ${lead.budget}\n${lead.interests.join(", ")}\n\n${lead.message}`,
          lead,
        }),
      });
    } catch {
      return NextResponse.json({ error: "Could not send right now. Please email us instead." }, { status: 502 });
    }
  } else {
    console.info("[contact] new lead", lead);
  }

  return NextResponse.json({ ok: true });
}
