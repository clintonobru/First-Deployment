const express = require("express");
const router = express.Router();
const {
    addUser,
    loginUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} = require("../controller/userController");

const {  verifyToken, verifyAdmin } = require("../middleware/authenticate");

router.post("/", addUser);
router.post("/login", loginUser);
router.get("/users", verifyToken, verifyAdmin, getUsers);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;