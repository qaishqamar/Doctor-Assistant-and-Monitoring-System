'use client';

import { useState } from 'react';
import { Settings, User, Shield, Bell, Lock, HelpCircle, LogOut } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });
  const [privacy, setPrivacy] = useState({
    profilePublic: false,
    shareData: true
  });

  const handleNotificationChange = (type: string) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof notifications]
    }));
  };

  const handlePrivacyChange = (type: string) => {
    setPrivacy(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof privacy]
    }));
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl text-gray-900 mb-1 sm:mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-3 sm:p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Settings</h2>
            </div>
            <nav className="p-2">
              {[
                { id: 'profile', label: 'Profile', icon: User },
                { id: 'security', label: 'Security', icon: Shield },
                { id: 'notifications', label: 'Notifications', icon: Bell },
                { id: 'privacy', label: 'Privacy', icon: Lock },
                { id: 'help', label: 'Help & Support', icon: HelpCircle },
                { id: 'logout', label: 'Logout', icon: LogOut }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    className={`w-full flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-left rounded-lg transition-colors ${
                      activeTab === tab.id 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-lg sm:text-xl text-gray-900 mb-4 sm:mb-6">Profile Settings</h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="Dr. Sarah Johnson"
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="sarah.johnson@clinic.com"
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Specialty</label>
                    <input
                      type="text"
                      defaultValue="Internal Medicine"
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Bio</label>
                    <textarea
                      rows={3}
                      defaultValue="Experienced physician specializing in internal medicine with over 10 years of practice."
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Profile Picture</label>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-500">DS</span>
                      </div>
                      <button className="bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                        Change Photo
                      </button>
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg sm:text-xl text-gray-900 mb-4 sm:mb-6">Notification Preferences</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-xs sm:text-sm text-gray-500">Receive emails about appointments and updates</p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange('email')}
                      className={`relative inline-flex h-5 sm:h-6 w-9 sm:w-11 items-center rounded-full ${
                        notifications.email ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 sm:h-4 w-3 sm:w-4 transform rounded-full bg-white transition ${
                          notifications.email ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0.5 sm:translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">SMS Notifications</h3>
                      <p className="text-xs sm:text-sm text-gray-500">Receive SMS about appointments</p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange('sms')}
                      className={`relative inline-flex h-5 sm:h-6 w-9 sm:w-11 items-center rounded-full ${
                        notifications.sms ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 sm:h-4 w-3 sm:w-4 transform rounded-full bg-white transition ${
                          notifications.sms ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0.5 sm:translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
                      <p className="text-xs sm:text-sm text-gray-500">Receive push notifications on your device</p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange('push')}
                      className={`relative inline-flex h-5 sm:h-6 w-9 sm:w-11 items-center rounded-full ${
                        notifications.push ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 sm:h-4 w-3 sm:w-4 transform rounded-full bg-white transition ${
                          notifications.push ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0.5 sm:translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'privacy' && (
              <div>
                <h2 className="text-lg sm:text-xl text-gray-900 mb-4 sm:mb-6">Privacy Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Profile Visibility</h3>
                      <p className="text-xs sm:text-sm text-gray-500">Allow other doctors to see your profile</p>
                    </div>
                    <button
                      onClick={() => handlePrivacyChange('profilePublic')}
                      className={`relative inline-flex h-5 sm:h-6 w-9 sm:w-11 items-center rounded-full ${
                        privacy.profilePublic ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 sm:h-4 w-3 sm:w-4 transform rounded-full bg-white transition ${
                          privacy.profilePublic ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0.5 sm:translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Share Usage Data</h3>
                      <p className="text-xs sm:text-sm text-gray-500">Help us improve our service by sharing anonymous usage data</p>
                    </div>
                    <button
                      onClick={() => handlePrivacyChange('shareData')}
                      className={`relative inline-flex h-5 sm:h-6 w-9 sm:w-11 items-center rounded-full ${
                        privacy.shareData ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-3 sm:h-4 w-3 sm:w-4 transform rounded-full bg-white transition ${
                          privacy.shareData ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0.5 sm:translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'security' && (
              <div>
                <h2 className="text-lg sm:text-xl text-gray-900 mb-4 sm:mb-6">Security Settings</h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Change Password</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                      />
                      <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Update Password
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Two-Factor Authentication</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Add an extra layer of security to your account</p>
                    <button className="bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition-colors">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'help' && (
              <div>
                <h2 className="text-lg sm:text-xl text-gray-900 mb-4 sm:mb-6">Help & Support</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Contact Support</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">Having trouble? Our support team is here to help.</p>
                    <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Contact Support
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Documentation</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">Learn how to use our platform effectively.</p>
                    <button className="text-blue-600 hover:text-blue-800">
                      View Documentation →
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Send Feedback</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">Help us improve the platform.</p>
                    <button className="text-blue-600 hover:text-blue-800">
                      Share Feedback →
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'logout' && (
              <div>
                <h2 className="text-lg sm:text-xl text-gray-900 mb-4 sm:mb-6">Logout</h2>
                
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">Are you sure you want to logout? You will need to sign in again to access your account.</p>
                  <button className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-700 transition-colors">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}