import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, MapPin } from 'lucide-react';

export const DonationConfirmation = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Appointment Confirmed!</h1>
        <p className="text-gray-600 mt-2">Thank you for scheduling your donation.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Appointment Details</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-red-500 mr-3" />
            <div>
              <p className="font-medium">March 15, 2024</p>
              <p className="text-sm text-gray-500">9:00 AM</p>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-red-500 mr-3" />
            <div>
              <p className="font-medium">Parul Sevashram</p>
              <p className="text-sm text-gray-500">vadodara, Gujarat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-blue-900 mb-2">Preparation Guidelines</h3>
        <ul className="text-sm text-blue-800 space-y-2">
          <li>Get adequate sleep the night before</li>
          <li>Eat a healthy meal within 3 hours of donation</li>
          <li>Drink plenty of water</li>
          <li>Bring a valid ID</li>
        </ul>
      </div>

      <div className="flex space-x-4">
        <Link
          to="/appointments"
          className="flex-1 bg-white border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50 text-center"
        >
          View Appointments
        </Link>
        <Link
          to="/"
          className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 text-center"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};