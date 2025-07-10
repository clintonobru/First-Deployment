const jwt = require("jsonwebtoken");
const KEY = process.env.SERCET_KEY;

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Acess Denied" });

    try {
        const verified = jwt.verify(token, KEY);
        req.user = verified;
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid ToKen" });
    }
};

const verifyAdmin = (req, res, next) => {
    if (!req.user.isAdmin !== "Admin")
        return res.status(403).json({ message: "Admin Access Only" });
    next();
};

module.exports = { verifyToken, verifyAdmin };