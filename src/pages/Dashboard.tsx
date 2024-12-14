import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';

export function Dashboard() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Dashboard</h2>
        <p className="text-gray-600">Select an option from the sidebar to get started.</p>
      </div>
    </DashboardLayout>
  );
}