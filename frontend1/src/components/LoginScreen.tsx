import React, { useState } from 'react';
import { Activity } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    onLogin();
  };

  const handleAzureLogin = () => {
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 items-center justify-center p-12">
        <div className="text-center text-white">
          <Activity className="w-24 h-24 mx-auto mb-6" />
          <h1 className="text-4xl mb-4">Clinical Care Platform</h1>
          <p className="text-xl text-blue-100">
            AI-Based Symptom Analysis & Patient Monitoring System
          </p>
          <div className="mt-12 space-y-4 text-left max-w-md">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
              <p className="text-blue-50">Real-time patient monitoring and alerts</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
              <p className="text-blue-50">AI-powered symptom analysis reports</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-300 rounded-full mt-2"></div>
              <p className="text-blue-50">Comprehensive medication adherence tracking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4 lg:hidden">
              <Activity className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-2xl text-center text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-center text-gray-600">Sign in to access your dashboard</p>
          </div>

          <button
            onClick={handleAzureLogin}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-6 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 23 23" fill="currentColor">
              <path d="M0 0h10.931v10.931H0V0zm12.069 0H23v10.931H12.069V0zM0 12.069h10.931V23H0V12.069zm12.069 0H23V23H12.069V12.069z"/>
            </svg>
            <span>Sign in with Azure AD</span>
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="doctor@clinic.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}