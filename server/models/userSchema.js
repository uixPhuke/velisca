// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    addresses: [{
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    }],
    isEmailVerified: { type: Boolean, default: false },
    isPhoneVerified: { type: Boolean, default: false },
    
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    createdAt: { type: Date, default: Date.now },
}, { timestamps: true });



module.exports = mongoose.model("User", userSchema);
