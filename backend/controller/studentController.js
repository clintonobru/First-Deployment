const Student = require("../model/student");

const addStudent = async (req, res) => {
    let { name, age, course } = req.body;
    try {
        if (!name && !age && !course)
            return res
                .status(400)
                .json("Name, age and course Important, Please input all");

        await Student.create({
            name,
            age,
            course,
        });
        res.status(200).json("Student Data Saved successfully.");
    } catch (err) {
        res.status(500).json({ err: "Unable to save student data" });
    }
};

const getStudent = async (req, res) => {
    let {age} = req.body;
    try {
        if (!age) return res.status(400).json("Input age");
        const students = await Student.find({ age })
            .sort({ name: 1 })
            .limit(5)
            .select("name age data course");
        res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ err: "Unable to find student data" });
    }
};

const updateStudent = async (req, res) => {
    const id = req.params.id;
    const {name, age, course, entrolled, date} = req.body;
    try {
        const student = await Student.findByIdAndUpdate(
            id,
            { name, age, course, entrolled, date},
            {
             new:true,
            }
        );
        res.status(200).json("Student data has been update sucessfully", student);
    } catch (err) {
        res.status(500).json({ err: "Unable to update student" })
    }
};

const deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        await Student.findByIdAndDelete(id);
        res.status(200).json("Student deleted successfully")
    } catch (err) {
        res.status(500).send("Unable to delete Student data")
    }
};

module.exports = { addStudent, getStudent, updateStudent, deleteStudent };