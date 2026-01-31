'use client';

import { useParams } from 'next/navigation';
import { mockPatients } from '../../../../src/data/mockData';
import { Plus, Trash2, Calendar, Clock, User, FileText } from 'lucide-react';
import { useState } from 'react';

export default function PrescriptionScreen() {
  const { patientId } = useParams();
  const patient = mockPatients.find(p => p.id === patientId as string);
  
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      duration: '30 days',
      instructions: 'Take in the morning with water',
      startDate: '2024-11-15'
    }
  ]);
  
  const [newPrescription, setNewPrescription] = useState({
    name: '',
    dosage: '',
    frequency: '',
    duration: '',
    instructions: '',
    startDate: ''
  });
  
  if (!patient) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl text-gray-900">Patient Not Found</h1>
        <p className="text-gray-600">The requested patient could not be found.</p>
      </div>
    );
  }
  
  const handleAddPrescription = () => {
    if (!newPrescription.name || !newPrescription.dosage) return;
    
    const prescriptionToAdd = {
      ...newPrescription,
      id: prescriptions.length + 1
    };
    
    setPrescriptions([...prescriptions, prescriptionToAdd]);
    setNewPrescription({
      name: '',
      dosage: '',
      frequency: '',
      duration: '',
      instructions: '',
      startDate: ''
    });
  };
  
  const handleRemovePrescription = (id: number) => {
    setPrescriptions(prescriptions.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl text-gray-900 mb-2">Prescribe Medication</h1>
          <p className="text-gray-600">Create and manage prescriptions for {patient.name}</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <User className="w-4 h-4" />
          <span>MRN: {patient.mrn}</span>
        </div>
      </div>

      {/* Patient Info Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
            {patient.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-medium text-gray-900">{patient.name}</h2>
            <p className="text-sm text-gray-500">DOB: {patient.dob} • {patient.gender}</p>
          </div>
        </div>
      </div>

      {/* New Prescription Form */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl text-gray-900 mb-4">Add New Prescription</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Medication Name</label>
            <input
              type="text"
              value={newPrescription.name}
              onChange={(e) => setNewPrescription({...newPrescription, name: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter medication name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dosage</label>
            <input
              type="text"
              value={newPrescription.dosage}
              onChange={(e) => setNewPrescription({...newPrescription, dosage: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 10mg, 5ml"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
            <select
              value={newPrescription.frequency}
              onChange={(e) => setNewPrescription({...newPrescription, frequency: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select frequency</option>
              <option value="Once daily">Once daily</option>
              <option value="Twice daily">Twice daily</option>
              <option value="Three times daily">Three times daily</option>
              <option value="Four times daily">Four times daily</option>
              <option value="As needed">As needed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <input
              type="text"
              value={newPrescription.duration}
              onChange={(e) => setNewPrescription({...newPrescription, duration: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 7 days, 2 weeks"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
            <textarea
              value={newPrescription.instructions}
              onChange={(e) => setNewPrescription({...newPrescription, instructions: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
              placeholder="Additional instructions for patient..."
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              value={newPrescription.startDate}
              onChange={(e) => setNewPrescription({...newPrescription, startDate: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleAddPrescription}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Prescription</span>
          </button>
        </div>
      </div>

      {/* Current Prescriptions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-gray-900">Current Prescriptions</h2>
          <span className="text-sm text-gray-500">{prescriptions.length} active</span>
        </div>
        
        {prescriptions.length === 0 ? (
          <div className="text-center py-8">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-500">No prescriptions yet. Add a new prescription to get started.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {prescriptions.map((prescription) => (
              <div key={prescription.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-medium text-gray-900">{prescription.name}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {prescription.dosage}
                      </span>
                    </div>
                    
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{prescription.frequency}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{prescription.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Started: {prescription.startDate}</span>
                      </div>
                    </div>
                    
                    {prescription.instructions && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-700">{prescription.instructions}</p>
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleRemovePrescription(prescription.id)}
                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-end space-x-3">
        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Save & Send
        </button>
      </div>
    </div>
  );
}