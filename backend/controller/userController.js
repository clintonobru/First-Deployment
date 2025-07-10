const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const KEY = process.env.SERCET_KEY;

// {
//     "email": "kk@gmail.com",
//     "password": "kk10009912"
  
// }

const addUser = async (req, res) => {
    try {
        const { name, password, email, phone } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, password: hashedPassword, email, phone });
        await user.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid Password" });

        const token = jwt.sign({  userId: user._id, isAdmin: user.role }, KEY, {
            expiresIn: "1d",
        });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};

const getUsers = async (req, res) => {
    const users = await User.find().select("-password");
    res.status(200).json(users);
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(400).json("User not found");

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ err: "Error fetched user data" });
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, password, email, phone } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            id,
            { name, password, email, phone },
            {
                new: true,
            }
        );
        res.status(200).json("User updated successfully", user);
    } catch (err) {
        res.status(500).json({ err: "Error updating user" });
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json("User deleted successfuly");
    } catch (err) {
        res.status(500).send("Error deleting user");
    }
};

module.exports = { addUser, getUserById, updateUser, deleteUser, loginUser, getUsers }