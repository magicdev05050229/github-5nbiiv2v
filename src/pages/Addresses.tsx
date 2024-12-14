import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { MapPin } from 'lucide-react';

export function Addresses() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <MapPin className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Addresses</h2>
        </div>
        {/* Add your addresses component here */}
        <p className="text-gray-600">Address management interface goes here.</p>
      </div>
    </DashboardLayout>
  );
}