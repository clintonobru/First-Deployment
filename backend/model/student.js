const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, require: true, minlength: 3, maxlength: 50 },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 80,
    },
    course: {
        type:String,
        enum: ["Computer Science", "Mathematics", "Physics"],
    },
    entrolled: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;