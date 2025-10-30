const mongoose = require("mongoose");
c
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

// Export OTP model
const OTP = mongoose.model("OTP", OTPSchema);
module.exports = OTP;
