import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, MapPin, Clock, User, Phone, Droplet } from 'lucide-react';

interface Request {
  id: string;
  bloodType: string;
  units: number;
  urgency: 'high' | 'medium' | 'low';
  status: 'open' | 'closed';
  patientName: string;
  location: string;
  contactNumber: string;
  createdAt: string;
  additionalInfo?: string;
}

export const RequestList: React.FC = () => {
  const dummyRequests: Request[] = [
    {
      id: '1',
      bloodType: 'O+',
      units: 3,
      urgency: 'high',
      status: 'open',
      patientName: 'Nikhil Patil',
      location: 'Parul Sevashram Hospital',
      contactNumber: '+917898654722',
      createdAt: '2024-12-31T10:30:00',
      additionalInfo: 'The patient is undergoing surgery and needs immediate assistance.',
    },
    {
      id: '2',
      bloodType: 'A-',
      units: 2,
      urgency: 'medium',
      status: 'open',
      patientName: 'Geet Bisoi',
      location: 'Aadicura Superspeciality Hospital',
      contactNumber: '+917898654722',
      createdAt: '2024-12-30T15:00:00',
      additionalInfo: 'Blood required for anemic patient.',
    },
    {
      id: '3',
      bloodType: 'B+',
      units: 1,
      urgency: 'low',
      status: 'closed',
      patientName: 'Mohit Reddy',
      location: 'Red Cross Blood Bank',
      contactNumber: '+917898654722',
      createdAt: '2024-12-29T09:00:00',
      additionalInfo: 'Request closed as donation received.',
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Blood Requests</h1>
        <Link
          to="/requests/new"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          New Request
        </Link>
      </div>

      {dummyRequests.length === 0 ? (
        <div className="text-center py-12">
          <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No Active Requests</h3>
          <p className="text-gray-500">There are currently no blood donation requests.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dummyRequests.map((request) => (
            <div key={request.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <Droplet className="h-6 w-6 text-red-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">
                    {request.bloodType}
                  </span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(request.urgency)}`}>
                  {request.urgency.toUpperCase()}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-700">
                  <User className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">{request.patientName}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{request.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">{request.contactNumber}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">Posted {new Date(request.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium text-gray-700">Units required: </span>
                <span className="text-sm text-gray-900">{request.units}</span>
              </div>

              {request.additionalInfo && (
                <p className="text-sm text-gray-600 mb-4">{request.additionalInfo}</p>
              )}

              <div className="flex justify-between items-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  request.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {request.status.toUpperCase()}
                </span>
                <Link
                  to={`/requests/${request.id}`}
                  className="text-red-500 hover:text-red-600 text-sm font-medium"
                >
                  {/* View Details */}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
