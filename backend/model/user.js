const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {type: String, min: 10, max: 40, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true},
        phone: Number,
        role: { type: String, default: "user", enum: ["user", "admin"] },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;