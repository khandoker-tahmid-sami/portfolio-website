import nodemailer from "nodemailer";

const EMAIL = process.env.NODEMAILER_EMAIL;
const PASS = process.env.NODEMAILER_APP_PASS;
const TO = process.env.NODEMAILER_CONTACT_TO;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASS,
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

  await transporter.sendMail({
    from: EMAIL,
    to: TO,
    text: message,
    html: `
      <h2>New Message</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        `,
  });
};
