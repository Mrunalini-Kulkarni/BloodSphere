import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/blood_donation';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);  // Removed the deprecated options
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
