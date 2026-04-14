const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const authRoutes = require('./routes/api/login/authRoutes')
const translationRoutes = require('./routes/api/translationRoutes');
const authenticateToken = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ['http://localhost:5173', 'http://170.81.146.116'],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

upp.use('/api/translations', translationRoutes);




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});