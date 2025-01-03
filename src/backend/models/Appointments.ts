import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  userId: string;
  organizationId: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  type: 'donation' | 'checkup';
}

const AppointmentSchema: Schema = new Schema({
  userId: { type: String, required: true },
  organizationId: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ['upcoming', 'completed', 'cancelled'], default: 'upcoming' },
  type: { type: String, enum: ['donation', 'checkup'], required: true },
});

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);