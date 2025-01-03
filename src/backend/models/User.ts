import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  bloodType: string;
  points: number;
  donationCount: number;
  role: 'admin' | 'donor';
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bloodType: { type: String, required: true },
  points: { type: Number, default: 0 },
  donationCount: { type: Number, default: 0 },
  role: { type: String, enum: ['admin', 'donor'], default: 'donor' },
});

export default mongoose.model<IUser>('User', UserSchema);