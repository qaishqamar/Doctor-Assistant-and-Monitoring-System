'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Dummy authentication - accept any email/password combination
    if (email && password) {
      // Store user session in localStorage
      localStorage.setItem('user', JSON.stringify({
        email,
        name: email.split('@')[0],
        isAuthenticated: true
      }));
      
      // Redirect to dashboard
      router.push('/dashboard');
    } else {
      setError('Please enter both email and password');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Side: Branding */}
      <div className="flex w-full flex-col justify-center bg-blue-600 p-12 text-white md:w-1/2">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-8 flex justify-center">
            {/* Heartbeat Icon Placeholder */}
            <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="mb-4 text-4xl font-bold">Clinical Care Platform</h1>
          <p className="mb-8 text-lg opacity-90">AI-Based Symptom Analysis & Patient Monitoring System</p>
          
          <ul className="space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <span className="h-2 w-2 rounded-full bg-blue-300"></span>
              <span>Real-time patient monitoring and alerts</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="h-2 w-2 rounded-full bg-blue-300"></span>
              <span>AI-powered symptom analysis reports</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="h-2 w-2 rounded-full bg-blue-300"></span>
              <span>Comprehensive medication adherence tracking</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex w-full items-center justify-center bg-blue-50 p-12 md:w-1/2">
        <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500">Sign in to access your dashboard</p>
          </div>

          <button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
            <span>Sign in with Azure AD</span>
          </button>

          <div className="my-6 flex items-center">
            <div className="grow border-t border-gray-200"></div>
            <span className="mx-4 text-sm text-gray-400">Or continue with email</span>
            <div className="grow border-t border-gray-200"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1 block text-sm text-gray-600">Email Address</label>
              <input 
                type="email" 
                placeholder="doctor@clinic.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none placeholder-gray-500 text-gray-900"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-600">Password</label>
              <input 
                type="password" 
                placeholder="Enter any password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none placeholder-gray-500 text-gray-900"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-gray-">
                <input type="checkbox" className="rounded border-gray-300" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center py-2">
                {error}
              </div>
            )}
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full rounded-lg bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}