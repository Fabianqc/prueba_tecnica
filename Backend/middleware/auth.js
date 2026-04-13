const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({error: 'Access token required'});
    try {
        const decoded = jwt.verify(token, proccess.env.JWT_ACCESS_SECRET);
        req.user = decoded;
        next();
    }catch ( err){
        if (err.name === 'TokenExpiredError'){
            return res.status(401).json({
                error: 'Access token expired',
                code: 'TOKEN_EXPIRED'
            });
        }
        return res.status(403).json({ error: 'Invalid access token'});
    }
}

module.exports = authenticateToken;