import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePoints, updateLastDonation } from '../../store/slices/userSlice';
import { calculatePoints } from '../../utils/pointsCalculator';
import { DonationForm } from '../../components/donate/DonationForm';
import { PointsSummary } from '../../components/donate/PointsSummary';
import { DonationData } from '../../types/donation';

export const DonationRecord = () => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDonationSubmit = (data: DonationData) => {
    const points = calculatePoints(data.amount);
    dispatch(updatePoints(points));
    dispatch(updateLastDonation(new Date().toISOString()));
    setStep(2);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {step === 1 ? (
        <DonationForm onSubmit={handleDonationSubmit} />
      ) : (
        <PointsSummary onClose={() => navigate('/profile')} />
      )}
    </div>
  );
};