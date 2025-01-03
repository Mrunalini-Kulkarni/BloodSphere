import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Award, Gift, Calendar, TrendingUp, Plus } from 'lucide-react';
import { RootState } from '../../store';
import { RewardForm } from '../../components/rewards/RewardForm';

export const RewardsPage = () => {
  const [showRewardForm, setShowRewardForm] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Rewards Dashboard</h1>
          <p className="text-gray-600">Track your donations and rewards</p>
        </div>
        <button
          onClick={() => setShowRewardForm(!showRewardForm)}
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Donation
        </button>
      </div>

      {showRewardForm ? (
        <RewardForm />
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Total Points</h3>
                <Award className="h-6 w-6 text-red-500" />
              </div>
              <p className="text-3xl font-bold text-red-500">{user.points}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Next Reward At</h3>
                <Gift className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-3xl font-bold text-green-500">{200} points</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Donations</h3>
                <TrendingUp className="h-6 w-6 text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-blue-500">{user.donationHistory.length}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Donation History</h2>
            <div className="space-y-4">
              {user.donationHistory.map((donation, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium">{donation.type}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(donation.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold text-red-500">+{donation.points} points</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};