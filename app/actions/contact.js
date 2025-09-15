"use server";

import nodemailer from "nodemailer";

const email = process.env.NODEMAILER_EMAIL;
const pass = process.env.NODEMAILER_APP_PASS;
const to = process.env.NODEMAILER_CONTACT_TO;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
  //   from: email,
});

export const sendMessage = async (formData) => {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return null;
  }

  await transporter.sendMail({});
};
