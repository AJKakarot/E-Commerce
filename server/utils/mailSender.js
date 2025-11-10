const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, subject, htmlBody) => {
  try {
    // Create transporter using SendGrid SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,             // smtp.sendgrid.net
      port: parseInt(process.env.MAIL_PORT),   // 587
      secure: false,                           // false for STARTTLS
      auth: {
        user: process.env.MAIL_USER,           // literally "apikey"
        pass: process.env.MAIL_PASS,           // your SendGrid API key
      },
      tls: {
        rejectUnauthorized: false,             // optional, avoids TLS issues on some cloud hosts
      },
    });

    const mailOptions = {
      from: `"StudyNotion" <gajeet031@gmail.com>`, // visible sender email
      to: email,
      subject: subject,
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    return info;
  } catch (err) {
    console.error("❌ Error sending email:", err);
    throw err;
  }
};

module.exports = mailSender;
