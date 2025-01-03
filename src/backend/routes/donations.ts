import express from 'express';
import { authMiddleware } from '../middlewares/authMiddlewares.js';
import Donation from '../models/Donations.js';

const router = express.Router();

// Create a donation record
router.post('/', authMiddleware, async (req, res) => {
  const { userId, organizationId, amount, pressure, hemoglobin, date } = req.body;

  try {
    const donation = new Donation({ userId, organizationId, amount, pressure, hemoglobin, date });
    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Fetch donations for a user
router.get('/user/:userId', authMiddleware, async (req, res) => {
  try {
    const donations = await Donation.find({ userId: req.params.userId });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;