const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, subject, htmlBody) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT),
      secure: process.env.MAIL_PORT == 465, // true for 465, false for 587
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // necessary on some cloud platforms
      },
    });

    const mailOptions = {
      from: `"StudyNotion" <${process.env.MAIL_USER}>`,
      to: email,
      subject: subject,
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("Error sending email:", err.message);
    throw err; // propagate to controller
  }
};

module.exports = mailSender;
