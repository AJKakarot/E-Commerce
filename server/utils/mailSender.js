const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, subject, htmlBody) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,         // smtp.gmail.com
      port: parseInt(process.env.MAIL_PORT), // 587
      secure: false,                       // ❌ must be false for STARTTLS
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"StudyNotion" <${process.env.MAIL_USER}>`,
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
