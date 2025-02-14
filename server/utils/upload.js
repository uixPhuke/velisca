// middleware/upload.js
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_KEY,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadToCloudinary = async (file) => {
    const result = await cloudinary.uploader.upload(file.buffer, {
        resource_type: "auto",
    });
    return result.secure_url;
};

module.exports = { upload, uploadToCloudinary };
