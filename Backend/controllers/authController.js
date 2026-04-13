const bcrypt = require('bcrypt');
const pool = require('../db/pool');
const tokenService = require('./tokenService');

// post /api/auth/login
async function login(req, res){
    try{
        const { email, password} = req.body;

        if(email || !password){
            return res.status(400).json({ error:'Email and password are required'});
        }

        const result = await pool.query(`
            SELECT id, email, password_hash FROM users WHERE email = $1
            `,
            [email]
        );

        if (result.rows.length === 0){
            return res.status(401).json({ error: 'Invalid credentials'});
        }

        const user = result.rows[0];

        const validPassword = await bcrypt.compare(password, user.password_hash);

        if (!validPassword){
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const accessToken = tokenService.generateAccessToken(user);
        const refreshToken = tokenService.generateRefreshToken(user);

        await tokenService.storeRefreshToken(user.id, refreshToken);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            accessToken,
            user: {id:user.id, email: user.email}
        });

    } catch (err){
        console.error('Login error:', err);
        return res.status(500).json({ error: "Internal server error"});
    }
}

// POST /api/auth/refresh
async function refresh(req, res){
    try{
        const oldRefreshToken = req.cookies.refreshToken;

        if(!oldRefreshToken){
            return res.status(401).json({ error: 'Refresh token requiered' });
        }
        const tokens = await tokenService.rotateRefreshToken(oldRefreshToken);
        if(!tokens){
            res.clearCookie('refreshToken');
            return res.status(401).json({ error: 'Invalid or expired refresh token'});
        }
        res.cookie('refreshToken', tokens.refreshToken,{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.status(200).json({
            accessToken: tokens.accessToken,
            user: tokens.user
        });
    }catch(err){
        console.error('Refresh error:', err);
        return res.status(500).json({ error: ' Internal server error'});
    }
}

// POST /api/auth/logout 

async function logout(req,res){
    try{
        const refreshToken = req.cookies.refreshToken;
        if (refreshToken) { 
            await tokenService.revokeRefreshToken(refreshToken);
        }
        res.clearCookie('refreshToken');
        return res.status(200).json({ message: 'Logged out successfully'});
    } catch (err){
        console.error('Logout error:', err);
        return res.status(500).json({ error: 'Internal server error'});
    }
}

module.exports = {
    login,
    refresh,
    logout
}