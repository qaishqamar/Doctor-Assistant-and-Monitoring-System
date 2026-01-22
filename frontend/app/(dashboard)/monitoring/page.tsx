'use client';

import React from 'react';

const MonitoringPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Patient Monitoring</h1>
        <p className="text-gray-600 mt-1">Real-time health monitoring dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((patient) => (
          <div key={patient} className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Patient {patient}</h3>
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Stable</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Heart Rate</span>
                <span className="font-medium">72 bpm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Blood Pressure</span>
                <span className="font-medium">120/80 mmHg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Temperature</span>
                <span className="font-medium">98.6°F</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-500">Last updated: 2 minutes ago</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Alerts</h2>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="mr-3 text-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-yellow-800">Blood pressure elevated for Patient 2</p>
              <p className="text-sm text-yellow-600">5 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringPage;