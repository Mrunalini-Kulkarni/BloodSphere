import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { addAppointment } from '../../store/slices/appointmentSlice';
import { v4 as uuidv4 } from 'uuid';

export const DonationForm = () => {
  const [step, setStep] = useState(1);
  const [selectedCenter, setSelectedCenter] = useState<string | null>(null); // Store selected center
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    // Create appointment from form data
    const appointment = {
      id: uuidv4(),
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      location: selectedCenter, // Use the selected center from state
      status: 'upcoming' as const,
      type: 'donation' as const
    };

    // Add appointment to store
    dispatch(addAppointment(appointment));
    navigate('/donate/confirmation');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= num ? 'bg-red-500 text-white' : 'bg-gray-200'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Select Donation Center</h2>
            <div className="grid gap-4">
              {['Parul Sevashram Hospital', 'Aadicura Superspeciality Hospital', 'Sterling Hospital'].map((center) => (
                <div
                  key={center}
                  onClick={() => setSelectedCenter(center)} // Set selected center on click
                  className={`border rounded-lg p-4 hover:border-red-500 cursor-pointer ${
                    selectedCenter === center ? 'border-red-500' : ''
                  }`}
                >
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-500 mt-1" />
                    <div className="ml-3">
                      <h3 className="font-semibold">{center}</h3>
                      <p className="text-sm text-gray-500">Vadodara, Gujarat</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              disabled={!selectedCenter} // Disable continue button until a center is selected
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Select Date & Time</h2>
            <div className="grid gap-4">
              <div className="flex items-center space-x-4">
                <Calendar className="h-5 w-5 text-red-500" />
                <input
                  type="date"
                  name="date"
                  className="flex-1 border rounded-md p-2"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-5 w-5 text-red-500" />
                <select name="time" className="flex-1 border rounded-md p-2" required>
                  <option value="">Select Time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Confirm Details</h2>
            <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <div>
                  <p className="font-semibold">{selectedCenter}</p>
                  <p className="text-sm text-gray-500">Vadodara, Gujarat</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-red-500" />
                <p>March 15, 2024</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-red-500" />
                <p>9:00 AM</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
              >
                Confirm Appointment
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};