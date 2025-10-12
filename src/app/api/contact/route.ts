import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  ContactConfirmationEmail,
  contactConfirmationSubject,
  renderContactConfirmationText,
} from "@/emails/contact-confirmation";

type ContactSubmission = {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  location: string;
  guestCount: string;
  serviceType: string;
  message: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL;
const resendToEmail = process.env.RESEND_TO_EMAIL;

const resendClient = resendApiKey ? new Resend(resendApiKey) : null;

const requiredFields: Array<keyof ContactSubmission> = [
  "fullName",
  "email",
  "phone",
  "eventDate",
  "location",
  "guestCount",
  "serviceType",
  "message",
];

const noStoreHeaders = { "Cache-Control": "private, no-store" };

export const dynamic = "force-dynamic";

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatSubmission(submission: ContactSubmission) {
  const entries: Array<[string, string]> = [
    ["Täisnimi", submission.fullName],
    ["E-post", submission.email],
    ["Telefon", submission.phone],
    ["Ürituse kuupäev", submission.eventDate],
    ["Asukoht", submission.location],
    ["Külaliste arv", submission.guestCount],
    ["Teenuse valik", submission.serviceType],
    ["Sõnum", submission.message],
  ];

  const text = entries.map(([label, value]) => `${label}: ${value}`).join("\n");

  const html = `<div>${entries
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}:</strong><br/>${escapeHtml(value)}</p>`
    )
    .join("")}</div>`;

  return { text, html };
}

export async function POST(request: Request) {
  if (!resendClient) {
    return NextResponse.json(
      { error: "Resend API key is not configured." },
      { status: 500, headers: noStoreHeaders }
    );
  }

  if (!resendFromEmail || !resendToEmail) {
    return NextResponse.json(
      { error: "Resend sender or recipient email is not configured." },
      { status: 500, headers: noStoreHeaders }
    );
  }

  let payload: Partial<ContactSubmission>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400, headers: noStoreHeaders }
    );
  }

  for (const field of requiredFields) {
    const value = payload[field];
    if (!value || (typeof value === "string" && value.trim().length === 0)) {
      return NextResponse.json(
        { error: `Missing field: ${field}` },
        { status: 400, headers: noStoreHeaders }
      );
    }
  }

  const submission: ContactSubmission = {
    fullName: String(payload.fullName),
    email: String(payload.email),
    phone: String(payload.phone),
    eventDate: String(payload.eventDate),
    location: String(payload.location),
    guestCount: String(payload.guestCount),
    serviceType: String(payload.serviceType),
    message: String(payload.message),
  };

  const serviceLabelMap: Record<string, string> = {
    trailer: "Haagisbaar",
    mobile: "Liikuv baar",
    both: "Mõlemad",
  };

  const formattedServiceType =
    serviceLabelMap[submission.serviceType] ?? submission.serviceType;

  const recipients = resendToEmail
    .split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);

  const { text, html } = formatSubmission(submission);

  try {
    await resendClient.emails.send({
      from: resendFromEmail,
      to: recipients,
      replyTo: submission.email,
      subject: `Uus päring kodulehelt! Nimi: ${submission.fullName} - Teenuse valik: ${submission.serviceType} - Ürituse kuupäev: ${submission.eventDate}`,
      text,
      html,
    });
  } catch (error) {
    console.error("Failed to send email via Resend", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 502, headers: noStoreHeaders }
    );
  }

  const confirmationText = renderContactConfirmationText({
    fullName: submission.fullName,
    eventDate: submission.eventDate,
    serviceType: formattedServiceType,
  });

  try {
    await resendClient.emails.send({
      from: resendFromEmail,
      to: submission.email,
      subject: contactConfirmationSubject,
      react: ContactConfirmationEmail({
        fullName: submission.fullName,
        eventDate: submission.eventDate,
        serviceType: formattedServiceType,
      }),
      text: confirmationText,
    });
  } catch (error) {
    console.error("Failed to send confirmation email via Resend", error);
  }

  return NextResponse.json({ success: true }, { headers: noStoreHeaders });
}
