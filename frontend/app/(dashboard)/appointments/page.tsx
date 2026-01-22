'use client';

import React from 'react';

const AppointmentsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600">Manage patient appointments</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            New Appointment
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-medium text-gray-900">Patient Name {item}</h3>
              <p className="text-sm text-gray-500">Date: Today, 10:{30 + item} AM</p>
              <p className="text-sm text-gray-500">Type: Follow-up consultation</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Past Appointments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2].map((item) => (
                <tr key={item}>
                  <td className="px-6 py-4 whitespace-nowrap">Patient {item}</td>
                  <td className="px-6 py-4 whitespace-nowrap">Jan {15 + item}, 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap">Consultation</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;