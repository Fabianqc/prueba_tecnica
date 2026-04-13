const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const pool = require('../db/pool');
require('dotenv').config();

function hashToken(token) {
    return crypto.createHash('sha256').update(token).digest('hex');
}

function generateAccessToken(user) {
    return jwt.sign(
        {
            userId: user.id,
            email: user.email
        },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
}

function generateRefreshToken(user) {
    return jwt.sign(
        {
            userId: user.id,
            type: 'refresh'
        },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
}

async function storeRefreshToken(userId, refreshToken) {
    const tokenHash = hashToken(refreshToken);

    const decoded = jwt.decode(refreshToken);
    const expiresAt = new Date(decode.exp * 1000);

    await pool.query(
        `INSERT INTO refresh_tokens (user_id, token_hash, expires_at) 
        VALUES ($1,$2,$3)`,
        [userId, tokenHash, expiresAt]
    )

}

async function verifyStoredRefreshToken(refreshToken) {
    const tokenHash = hashToken(refreshToken);

    const result = await pool.query(
        `SELECT 
        id,
        user_id,
        revoked,
        expires_at
        FROM refresh_tokens
        WHERE token_hash = $1`,
        [tokenHash]
    );

    if (result.rows.length === 0) {
        return null
    }

    const storedToken = result.rows[0];

    if (storedToken.revoked) {
        await revokeAllUserTokens(storedToken.user_id);
        return null;
    }

    if (new Date(storedToken.expires_at) < new Date()) {
        return null
    }

    return storedToken;
}

async function revokeRefreshToken(refreshToken){
    const tokenHash = hashToken(refreshToken);

    await pool.query(
        `UPDATE refresh_tokens
        SET revoked = true
        WHERE token_hash = $1
        `,
        [tokenHash]
    );
}

async function revokeAllUserTokens(userId){
    await pool.query(
        `UPDATE refresh_tokens
        SET revoked = true
        WHERE user_id = $1 AND revoked = false`,
        [userId]
    );
}

async function rotateRefreshToken(oldRefreshToken){
    let decoded;
    try{
        decoded = jwt.verify(oldRefreshToken, process.env.JWT_REFRESH_SECRET);
    }catch(err){
        return null;
    }

    const storedToken = await verifyStoredRefreshToken(oldRefreshToken);

    if(!storedToken){
        return null;
    }

    const userResult = await pool.query(
        `SELECT id, email FROM users WHERE id = $1`,
        [decoded.userId]
    );

    if(userResult.rows.length === 0){
        return null;
    }

    const user = userResult.rows[0];

    await revokeRefreshToken(oldRefreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    await storeRefreshToken(user.id, newRefreshToken);

    return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
        user: {
            id: user.id,
            email: user.email
        }
    };
}

async function cleanExpiredTokens(){
    await pool.query(
       `DELETE FROM refresh_tokens 
       WHERE expires_at < NOW() OR revoked = true`
    );
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    storeRefreshToken,
    verifyStoredRefreshToken,
    revokeRefreshToken,
    revokeAllUserTokens,
    rotateRefreshToken,
    cleanExpiredTokens
}