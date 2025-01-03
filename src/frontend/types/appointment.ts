export interface Appointment {
  id: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  type: 'donation' | 'checkup';
}