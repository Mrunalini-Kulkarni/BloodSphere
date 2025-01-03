import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.ts" 
import donationRoutes from './routes/donations.ts';
import appointmentRoutes from './routes/appointment.ts';
import connectDB from './config/db.ts';
import { authMiddleware } from './middlewares/authMiddlewares.ts';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/appointments', appointmentRoutes);

// Connect to MongoDB
connectDB();

// Default Route
app.get('/', (req, res) => {
  res.send('Backend is up and running!');
});

app.get('/api/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'You have access', user: req.user });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
