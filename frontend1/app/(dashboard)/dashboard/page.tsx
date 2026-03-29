'use client';

import Link from 'next/link';
import { FileText, AlertTriangle, Calendar, Users, TrendingDown, ArrowRight, Clock } from 'lucide-react';
import { mockAIReports, mockAlerts, mockPatients, mockAdherenceData } from '../../../src/data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardPage() {
  const newReports = mockAIReports.filter(r => r.status === 'New').length;
  const criticalAlerts = mockAlerts.filter(a => !a.read && a.severity === 'Critical').length;
  const todayAppointments = 8;
  const atRiskPatients = mockPatients.filter(p => p.adherence < 70).length;

  const recentReports = mockAIReports.slice(0, 5);
  const recentAlerts = mockAlerts.slice(0, 4);

  // Calculate average adherence trend
  const adherenceTrend = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(2024, 10, i + 1);
    const avgAdherence = mockPatients.reduce((sum, p) => {
      const data = mockAdherenceData[p.id]?.[i];
      return sum + (data?.adherence || 0);
    }, 0) / mockPatients.length;
    
    return {
      date: `${date.getMonth() + 1}/${date.getDate()}`,
      adherence: Math.round(avgAdherence)
    };
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Moderate': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'border-l-4 border-red-500 bg-red-50';
      case 'Warning': return 'border-l-4 border-yellow-500 bg-yellow-50';
      case 'Info': return 'border-l-4 border-blue-500 bg-blue-50';
      default: return 'border-l-4 border-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Dr. Johnson. Here's your patient overview.</p>
      </div>

      {/* Hero Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Link href="/reports" className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-3xl font-bold text-gray-900">{newReports}</span>
          </div>
          <div className="text-gray-900 font-semibold mb-1">New AI Reports</div>
          <div className="text-sm text-gray-500">Pending your review</div>
        </Link>

        <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-3xl font-bold text-gray-900">{criticalAlerts}</span>
          </div>
          <div className="text-gray-900 font-semibold mb-1">Triage Alerts</div>
          <div className="text-sm text-gray-500">Require immediate attention</div>
        </div>

        <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-3xl font-bold text-gray-900">{todayAppointments}</span>
          </div>
          <div className="text-gray-900 font-semibold mb-1">Today's Appointments</div>
          <div className="text-sm text-gray-500">Scheduled consultations</div>
        </div>

        <Link href="/patients" className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-3xl font-bold text-gray-900">{atRiskPatients}</span>
          </div>
          <div className="text-gray-900 font-semibold mb-1">At-Risk Patients</div>
          <div className="text-sm text-gray-500">Adherence below 70%</div>
        </Link>
      </div>

      {/* Middle Section - Reports and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Incoming AI Reports */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200">
          <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl text-gray-900">Incoming AI Reports</h2>
            <Link href="/reports" className="text-blue-600 hover:text-blue-700 flex items-center space-x-1">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentReports.map((report) => (
              <Link
                key={report.id}
                href={`/report/${report.id}`}
                className="p-3 sm:p-4 hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                    <span className="text-gray-900 font-medium">{report.patientName}</span>
                    <span className={`px-2 py-1 rounded text-xs border ${getSeverityColor(report.severity)}`}>
                      {report.severity}
                    </span>
                    {report.status === 'New' && (
                      <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700 border border-blue-200">
                        New
                      </span>
                    )}
                  </div>
                  <div className="text-gray-600 mb-1 text-sm">{report.primarySymptom}</div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(report.submittedTime).toLocaleString()}</span>
                    </span>
                    <span>MRN: {report.mrn}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 ml-2" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl text-gray-900">Recent Alerts</h2>
          </div>
          <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
            {recentAlerts.map((alert) => (
              <Link
                key={alert.id}
                href={`/patient/${alert.patientId}`}
                className={`block p-3 rounded-lg ${getAlertColor(alert.severity)} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between mb-1 sm:mb-2">
                  <span className="text-gray-900 font-medium">{alert.patientName}</span>
                  {!alert.read && (
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </div>
                <div className="text-sm text-gray-700 mb-1">{alert.message}</div>
                <div className="text-xs text-gray-500">
                  {new Date(alert.timestamp).toLocaleString()}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Medication Adherence Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2">Medication Adherence Summary</h2>
          <p className="text-gray-600 text-sm sm:text-base">30-day average adherence trend across all patients</p>
        </div>
        <div className="h-48 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={adherenceTrend}>
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
  );
}