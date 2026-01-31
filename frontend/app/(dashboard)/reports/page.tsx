'use client';

import Link from 'next/link';
import { FileText, Search, Filter, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { mockAIReports } from '../../../src/data/mockData';

export default function ReportsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Reviewed':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'High':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl text-gray-900 mb-1 sm:mb-2">AI Reports</h1>
          <p className="text-gray-600">Review and manage AI-generated patient reports</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search reports..."
              className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm sm:text-base">Total Reports</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">{mockAIReports.length}</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm sm:text-base">New Reports</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">{mockAIReports.filter(r => r.status === 'New').length}</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm sm:text-base">Critical</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">{mockAIReports.filter(r => r.severity === 'Critical').length}</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm sm:text-base">Completed</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">{mockAIReports.filter(r => r.status === 'Reviewed').length}</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl text-gray-900">Recent AI Reports</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symptom</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockAIReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{report.patientName}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{report.mrn}</div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{report.primarySymptom}</div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getSeverityColor(report.severity)}`}>
                      {report.severity}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    {new Date(report.submittedTime).toLocaleDateString()}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                    <Link 
                      href={`/report/${report.id}`} 
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Review
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}