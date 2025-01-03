import React from 'react';
import { useSelector } from 'react-redux';
import { Award, Trophy, Star } from 'lucide-react';
import { RootState } from '../../store';

interface PointsSummaryProps {
  onClose: () => void;
}

export const PointsSummary: React.FC<PointsSummaryProps> = ({ onClose }) => {
  const user = useSelector((state: RootState) => state.user.currentUser);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
          <Trophy className="h-8 w-8 text-red-500" />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Thank You for Donating!</h2>
        <p className="mt-2 text-gray-600">Your contribution helps save lives.</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Award className="h-6 w-6 text-red-500" />
          <span className="text-xl font-semibold text-gray-900">Points Earned</span>
        </div>
        <div className="text-3xl font-bold text-red-500 mb-2">+50 Points</div>
        <p className="text-sm text-gray-600">Total Points: {user?.points || 0}</p>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Star className="h-5 w-5 text-blue-500" />
          <span className="font-semibold text-blue-900">Next Milestone</span>
        </div>
        <p className="text-sm text-blue-800">
          {100 - (user?.points || 0) % 100} points until your next reward!
        </p>
      </div>

      <button
        onClick={onClose}
        className="w-full bg-red-500 text-white py-3 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        View My Profile
      </button>
    </div>
  );
};