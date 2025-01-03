import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Action creator
const addRequest = (request: any) => ({
  type: 'ADD_REQUEST',
  payload: request
});

interface FormData {
  bloodType: string;
  units: string;
  urgency: 'high' | 'medium' | 'low';
  location: string;
  patientName: string;
  contactNumber: string;
  additionalInfo: string;
}

export const CreateRequest: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    bloodType: '',
    units: '',
    urgency: 'medium',
    location: '',
    patientName: '',
    contactNumber: '',
    additionalInfo: ''
  });

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now().toString(),
      ...formData,
      units: parseInt(formData.units, 10),
      status: 'open',
      createdAt: new Date().toISOString()
    };
    dispatch(addRequest(newRequest));
    navigate('/requests');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSOSClick = () => {
    const confirmSOS = window.confirm("Are you sure you need SOS service?");
    if (confirmSOS) {
      setFormData((prev) => ({ ...prev, urgency: 'high' }));
      navigate('/requests/SOS');  // Navigate after setting urgency
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create Blood Request</h1>
        <button
          type="button"
          className="bg-red-600 text-white px-4 py-2 rounded-md font-bold animate-pulse hover:bg-red-700"
          onClick={handleSOSClick}  // Handling the click here
        >
          SOS
        </button>
      </div>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Blood Request</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Blood Type</label>
              <select
                name="bloodType"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                value={formData.bloodType}
                onChange={handleChange}
              >
                <option value="">Select Blood Type</option>
                {bloodTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Units Required</label>
              <input
                type="number"
                name="units"
                required
                min="1"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                value={formData.units}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Urgency Level</label>
              <select
                name="urgency"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                value={formData.urgency}
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Hospital/Location</label>
              <input
                type="text"
                name="location"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Patient Name</label>
              <input
                type="text"
                name="patientName"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                value={formData.patientName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Information</label>
            <textarea
              name="additionalInfo"
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Create Request
            </button>
            <button
              type="button"
              onClick={() => navigate('/requests')}
              className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};