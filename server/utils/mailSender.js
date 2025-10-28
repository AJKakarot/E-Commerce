const nodemailer = require("nodemailer");
require('dotenv').config();

/**
 * Send email using Gmail SMTP
 * @param {string} email - Recipient email
 * @param {string} title - Email subject
 * @param {string} body - Email HTML body
 */
const mailSender = async (email, title, body) => {
    try {
        // Determine secure setting based on port
        const isSecure = process.env.MAIL_PORT == 465 ? true : false;

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,       // e.g., smtp.gmail.com
            port: parseInt(process.env.MAIL_PORT),
            secure: isSecure,                  // true for 465, false for 587
            auth: {
                user: process.env.MAIL_USER,  // your Gmail address
                pass: process.env.MAIL_PASS,  // your Gmail App Password
            },
            tls: {
                rejectUnauthorized: false     // needed sometimes on 587
            }
        });

        // Mail options
        const mailOptions = {
            from: `"StudyNotion" <${process.env.MAIL_USER}>`,
            to: email,
            subject: title,
            html: body
        };

        // Send mail
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error.message);
        return error;
    }
};

module.exports = mailSender;
