import Donation from '../models/Donation';

// Create Donation Record
export const createDonation = async (req: Request, res: Response) => {
  const { userId, organizationId, amount, pressure, hemoglobin, date } = req.body;

  try {
    const donation = new Donation({ userId, organizationId, amount, pressure, hemoglobin, date });
    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Fetch Donations for a User
export const getUserDonations = async (req: Request, res: Response) => {
  try {
    const donations = await Donation.find({ userId: req.params.userId });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
