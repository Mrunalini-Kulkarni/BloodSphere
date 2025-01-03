import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface AppointmentCardProps {
  date: string;
  time: string;
  location: string;
  status: string;
  type: string;
  onCancel?: () => void;
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  date,
  time,
  location,
  status,
  type,
  onCancel,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-50 text-blue-700';
      case 'completed':
        return 'bg-green-50 text-green-700';
      case 'cancelled':
        return 'bg-red-50 text-red-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <span className="ml-2 text-sm text-gray-500 capitalize">{type}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-700">
          <Calendar className="h-5 w-5 mr-3" />
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <Clock className="h-5 w-5 mr-3" />
          <span>{time}</span>
        </div>

        <div className="flex items-center text-gray-700">
          <MapPin className="h-5 w-5 mr-3" />
          <span>{location}</span>
        </div>
      </div>

      {status === 'upcoming' && onCancel && (
        <button
          onClick={onCancel}
          className="mt-4 w-full border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-50"
        >
          Cancel Appointment
        </button>
      )}
    </div>
  );
};