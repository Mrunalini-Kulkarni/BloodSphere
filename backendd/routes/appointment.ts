import express from 'express';
import { authMiddleware } from '../middlewares/authMiddlewares.js';
import Appointment from '../models/Appointments.js';

const router = express.Router();

// Schedule an appointment
router.post('/', authMiddleware, async (req, res) => {
  const { userId, organizationId, date, time, location, type } = req.body;

  try {
    const appointment = new Appointment({ userId, organizationId, date, time, location, type });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Fetch appointments for a user
router.get('/user/:userId', authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.params.userId });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Update appointment status
router.patch('/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;