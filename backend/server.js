import express from 'express';
import connectDB from './Config/db.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});