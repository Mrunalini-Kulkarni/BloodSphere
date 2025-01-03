import mongoose, { Schema, Document } from 'mongoose';

export interface IDonation extends Document {
  userId: string;
  organizationId: string;
  amount: number;
  pressure: string;
  hemoglobin: number;
  date: string;
}

const DonationSchema: Schema = new Schema({
  userId: { type: String, required: true },
  organizationId: { type: String, required: true },
  amount: { type: Number, required: true },
  pressure: { type: String, required: true },
  hemoglobin: { type: Number, required: true },
  date: { type: String, required: true },
});

export default mongoose.model<IDonation>('Donation', DonationSchema);