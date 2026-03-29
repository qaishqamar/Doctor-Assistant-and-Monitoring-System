'use client';

import { useParams } from 'next/navigation';
import { mockPatients, mockAdherenceData } from '../../../../src/data/mockData';
import { Activity, Calendar, Pill, AlertTriangle, TrendingUp, Stethoscope } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function PatientProfilePage() {
  const { patientId } = useParams();
  
  const patient = mockPatients.find(p => p.id === patientId as string);
  
  if (!patient) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl text-gray-900">Patient Not Found</h1>
        <p className="text-gray-600">The requested patient profile could not be found.</p>
      </div>
    );
  }
  
  const adherenceData = mockAdherenceData[patient.id] || [];
  
  // Calculate average adherence
  const avgAdherence = adherenceData.length > 0 
    ? Math.round(adherenceData.reduce((sum, day) => sum + day.adherence, 0) / adherenceData.length)
    : patient.adherence;

  return (
    <div className="space-y-6">
      {/* Patient Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
            {patient.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl text-gray-900">{patient.name}</h1>
            <p className="text-gray-600">{patient.mrn} • {patient.gender} • {calculateAge(patient.dob)}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Contact
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Edit
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Adherence Rate</p>
              <p className="text-3xl font-bold text-gray-900">{avgAdherence}%</p>
            </div>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              avgAdherence >= 80 ? 'bg-green-100' : avgAdherence >= 60 ? 'bg-yellow-100' : 'bg-red-100'
            }`}>
              <Pill className={`w-6 h-6 ${
                avgAdherence >= 80 ? 'text-green-600' : avgAdherence >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Risk Level</p>
              <p className="text-3xl font-bold text-gray-900 capitalize">{patient.riskLevel}</p>
            </div>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              patient.riskLevel === 'High' ? 'bg-red-100' : 
              patient.riskLevel === 'Medium' ? 'bg-yellow-100' : 'bg-green-100'
            }`}>
              <AlertTriangle className={`w-6 h-6 ${
                patient.riskLevel === 'High' ? 'text-red-600' : 
                patient.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-green-600'
              }`} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Primary Condition</p>
              <p className="text-xl font-bold text-gray-900">{patient.primaryCondition}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Last Visit</p>
              <p className="text-xl font-bold text-gray-900">{patient.lastVisit}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Medications and Adherence Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Medications */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl text-gray-900 mb-4">Current Medications</h2>
          <div className="space-y-4">
            {patient.medications.map((med, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{med}</h3>
                  <p className="text-sm text-gray-500">Take as prescribed</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Adjust Dosage
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Adherence Chart */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl text-gray-900 mb-4">Adherence Trend</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={adherenceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  stroke="#9ca3af"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="#9ca3af"
                  style={{ fontSize: '12px' }}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="adherence" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                  dot={false}
                  name="Adherence %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Additional Patient Info */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl text-gray-900 mb-4">Patient Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Demographics</h3>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">Date of Birth</dt>
                <dd className="text-sm text-gray-900">{patient.dob}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">Gender</dt>
                <dd className="text-sm text-gray-900">{patient.gender}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">Medical Record Number</dt>
                <dd className="text-sm text-gray-900">{patient.mrn}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Medical History</h3>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">Primary Condition</dt>
                <dd className="text-sm text-gray-900">{patient.primaryCondition}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">Risk Level</dt>
                <dd className="text-sm text-gray-900 capitalize">{patient.riskLevel}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">Last Visit</dt>
                <dd className="text-sm text-gray-900">{patient.lastVisit}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateAge(dob: string): string {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return `${age} years`;
}