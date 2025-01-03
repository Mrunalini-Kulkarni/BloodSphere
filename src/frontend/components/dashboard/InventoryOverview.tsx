import React from 'react';
import { BarChart3, AlertTriangle, TrendingUp } from 'lucide-react';
import { BloodInventory } from '../../types/organization';

interface InventoryOverviewProps {
  inventory: BloodInventory[];
}

export const InventoryOverview: React.FC<InventoryOverviewProps> = ({ inventory }) => {
  const getLowStockItems = () => {
    return inventory.filter(item => item.quantity < 100);
  };

  const getExpiringItems = () => {
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    return inventory.filter(item => new Date(item.expirationDate) <= thirtyDaysFromNow);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Current Stock</h3>
          <BarChart3 className="h-6 w-6 text-blue-500" />
        </div>
        <div className="space-y-4">
          {inventory.map(item => (
            <div key={item.id} className="flex justify-between items-center">
              <span className="text-gray-600">{item.bloodType}</span>
              <span className="font-semibold">{item.quantity} units</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Low Stock Alert</h3>
          <AlertTriangle className="h-6 w-6 text-orange-500" />
        </div>
        <div className="space-y-4">
          {getLowStockItems().map(item => (
            <div key={item.id} className="flex justify-between items-center text-orange-600">
              <span>{item.bloodType}</span>
              <span className="font-semibold">{item.quantity} units</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Expiring Soon</h3>
          <TrendingUp className="h-6 w-6 text-red-500" />
        </div>
        <div className="space-y-4">
          {getExpiringItems().map(item => (
            <div key={item.id} className="flex justify-between items-center text-red-600">
              <span>{item.bloodType}</span>
              <span className="font-semibold">
                Expires {new Date(item.expirationDate).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};