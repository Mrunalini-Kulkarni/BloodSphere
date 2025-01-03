export interface User {
  id: string;
  name: string;
  email: string;
  bloodType: string;
  lastDonation?: string;
  points: number;
  donationCount: number;
}

export interface DonationRequest {
  id: string;
  bloodType: string;
  location: string;
  urgency: 'high' | 'medium' | 'low';
  createdAt: string;
  status: 'open' | 'fulfilled' | 'closed';
  requesterId: string;
}