'use client';

import React from 'react';

const PatientsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600">Manage patient records</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add Patient
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((patient) => (
          <div key={patient} className="bg-white p-6 rounded-lg shadow border">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Patient {patient}</h3>
                <p className="text-sm text-gray-500">Age: {25 + patient}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Last Visit:</span>
                <span className="font-medium">Jan {10 + patient}, 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Condition:</span>
                <span className="font-medium">Stable</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 text-center text-sm py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                View
              </button>
              <button className="flex-1 text-center text-sm py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsPage;