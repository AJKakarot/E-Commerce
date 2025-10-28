const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

// OTP Schema
const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 5, // auto-delete after 5 mins
    },
});

// Function to send verification email
async function sendVerificationEmail(email, otp) {
    try {
        const mailResponse = await mailSender(
            email,
            "Verification Email",
            emailTemplate(otp)
        );
        console.log("Email sent successfully:", mailResponse.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

// Post-save hook to send OTP email after saving to DB
OTPSchema.post("save", async function (doc) {
    console.log("New OTP saved for:", doc.email);
    await sendVerificationEmail(doc.email, doc.otp);
});

// Export OTP model
const OTP = mongoose.model("OTP", OTPSchema);
module.exports = OTP;
