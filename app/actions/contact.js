"use server";

import nodemailer from "nodemailer";

const EMAIL = process.env.NODEMAILER_EMAIL;
const PASS = process.env.NODEMAILER_APP_PASS;
const TO = process.env.NODEMAILER_CONTACT_TO || EMAIL;

// keep transporter local; don't export non-async values from a "use server" file
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: EMAIL, pass: PASS },
});

const clean = (s = "") => s.replace(/[\r\n]/g, " ").slice(0, 300);

export async function sendMessage(formData) {
  const name = clean(formData.get("name")?.toString().trim() || "");
  const email = clean(formData.get("email")?.toString().trim() || "");
  const message = formData.get("message")?.toString().trim() || "";

  if (!name || !email || !message) return;

  try {
    await transporter.sendMail({
      from: EMAIL,
      to: TO,
      replyTo: email, // so you can hit Reply
      subject: `New contact from ${name}`,
      text: message,
      // MUST be a STRING, not JSX
      html: `
      <h2>New Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <hr/>
      <p>${message
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br/>")}</p>
    `,
    });

    return { ok: true };
  } catch (err) {
    console.error(err);
    return { ok: false, error: "Failed to send email. Please try again." };
  }
}
