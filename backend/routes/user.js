const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
    ]);
});

router.get("/:id", (req, res) => {
    const userId = req.params.id;
    res.json({ id: userId, name: `User ${userId}`});
});

module.exports = router;