import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';  // Import Request and Response types
import User from '../models/User';  // Adjust the import path as necessary

// Register Controller
export const register = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, password, bloodType } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password before saving user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, bloodType });
    
    await newUser.save();  // Save the new user to the database

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error: unknown) {
    // Handle error more specifically
    if (error instanceof Error) {
      // If error is an instance of Error, handle it accordingly
      return res.status(500).json({ message: 'Server error', error: error.message });
    } else {
      // If the error is not an instance of Error, handle it as a general case
      return res.status(500).json({ message: 'Server error', error: 'Unknown error occurred' });
    }
  }
};

// Login Controller
export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'default_secret', // Fallback to 'default_secret' if not provided in the environment
      { expiresIn: '1d' }
    );

    return res.status(200).json({ token, user });
  } catch (error: unknown) {
    // Handle error more specifically
    if (error instanceof Error) {
      return res.status(500).json({ message: 'Server error', error: error.message });
    } else {
      return res.status(500).json({ message: 'Server error', error: 'Unknown error occurred' });
    }
  }
};
