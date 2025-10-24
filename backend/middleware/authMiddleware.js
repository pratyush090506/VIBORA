const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    console.log("🔹 Incoming Auth Header:", authHeader);

    const token = authHeader && authHeader.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : null;

    if (!token) {
        console.log("❌ No token found in Authorization header");
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        console.log("🔹 Verifying token with secret:", process.env.JWT_SECRET);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("✅ Token decoded successfully:", decoded);
        req.user = decoded;
        next();
    } catch (err) {
        console.log("❌ Token verification failed:", err.message);
        res.status(401).json({ msg: 'Invalid token' });
    }
};

module.exports = authMiddleware;
