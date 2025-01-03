import React from 'react';
import { Droplet, User, Calendar, Activity } from 'lucide-react';
import { DonationData } from '../../types/donation';

interface DonationFormProps {
  onSubmit: (data: DonationData) => void;
}

export const DonationForm: React.FC<DonationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    onSubmit({
      amount: Number(formData.get('amount')),
      pressure: formData.get('pressure') as string,
      hemoglobin: Number(formData.get('hemoglobin')),
      date: formData.get('date') as string,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Record Donation</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount Donated (ml)
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Droplet className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                required
                min="200"
                max="500"
                className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="450"
              />
            </div>
          </div>

          <div>
            <label htmlFor="pressure" className="block text-sm font-medium text-gray-700">
              Blood Pressure
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Activity className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="pressure"
                id="pressure"
                required
                pattern="\d{2,3}\/\d{2,3}"
                className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="120/80"
              />
            </div>
          </div>

          <div>
            <label htmlFor="hemoglobin" className="block text-sm font-medium text-gray-700">
              Hemoglobin Level (g/dL)
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                name="hemoglobin"
                id="hemoglobin"
                required
                step="0.1"
                min="12"
                max="18"
                className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="13.5"
              />
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Donation Date
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                name="date"
                id="date"
                required
                max={new Date().toISOString().split('T')[0]}
                className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Submit Donation Record
        </button>
      </form>
    </div>
  );
};