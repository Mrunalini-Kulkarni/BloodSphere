import React from 'react';
import { useDispatch } from 'react-redux';
import { addRequest } from '../../store/slices/requestSlice';
import { v4 as uuidv4 } from 'uuid';

export const RequestForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const request = {
      id: uuidv4(),
      requestingOrgId: '1', // Replace with actual org ID
      bloodType: formData.get('bloodType') as string,
      quantity: Number(formData.get('quantity')),
      urgency: formData.get('urgency') as 'critical' | 'high' | 'normal',
      requiredBy: formData.get('requiredBy') as string,
      status: 'pending' as const,
      notes: formData.get('notes') as string,
      createdAt: new Date().toISOString(),
    };

    dispatch(addRequest(request));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">New Blood Request</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Type</label>
          <select
            name="bloodType"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity (units)</label>
          <input
            type="number"
            name="quantity"
            min="1"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Urgency</label>
          <select
            name="urgency"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="critical">Critical</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Required By</label>
          <input
            type="datetime-local"
            name="requiredBy"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            name="notes"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          ></textarea>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
};