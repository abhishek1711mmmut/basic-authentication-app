const express = require('express');
const app = express();

const userRoute = require('./routes/User.js');

const database = require('./config/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 4000;

// database connect
database.connect();

// middleware
app.use(cookieParser());
app.use(express.json());

app.use(
    cors({
        origin: [
            /^http:\/\/localhost:\d+$/,
        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    })
);

// routes mount
app.use('/api/v1/auth', userRoute);

// testing server route
app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running...'
    })
})

// activate
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})