import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message 🚀",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false });
  }
}