import React from 'react';
import { useDispatch } from 'react-redux';
import { addDonation } from '../../store/slices/authSlice';
import { Gift } from 'lucide-react';

export const RewardForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const donationData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      amount: Number(formData.get('amount')),
      date: new Date().toISOString(),
      type: 'Whole Blood',
      points: Math.floor(Number(formData.get('amount')) / 10), // 1 point per 10ml
    };

    dispatch(addDonation(donationData));
    form.reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <Gift className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900">Award Donation Points</h2>
        <p className="text-gray-600">Record a donation and award points</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Donor Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Blood Amount (ml)</label>
            <input
              type="number"
              name="amount"
              min="200"
              max="500"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
            <p className="mt-1 text-sm text-gray-500">Points awarded: 1 point per 10ml</p>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Award Points
        </button>
      </form>
    </div>
  );
};