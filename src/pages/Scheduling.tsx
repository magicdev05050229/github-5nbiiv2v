import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Calendar } from 'lucide-react';

export function Scheduling() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <Calendar className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900">Scheduling</h2>
        </div>
        {/* Add your scheduling component here */}
        <p className="text-gray-600">Scheduling feature implementation goes here.</p>
      </div>
    </DashboardLayout>
  );
}