// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rating" }],
    feedback: [{ type: mongoose.Schema.Types.ObjectId, ref: "Feedback" }],
    imageUrl:[ { type: String, required: true }],
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
