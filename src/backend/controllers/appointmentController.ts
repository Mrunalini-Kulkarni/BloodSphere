import Appointment from '../models/Appointments.js';

// Schedule Appointment
export const scheduleAppointment = async (req: Request, res: Response) => {
  const { userId, organizationId, date, time, location, type } = req.body;

  try {
    const appointment = new Appointment({ userId, organizationId, date, time, location, type });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Fetch User Appointments
export const getUserAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await Appointment.find({ userId: req.params.userId });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update Appointment Status
export const updateAppointmentStatus = async (req: Request, res: Response) => {
  const { status } = req.body;
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
