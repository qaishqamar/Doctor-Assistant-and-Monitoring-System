'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, FileText, MessageSquare, Settings, Bell, LogOut } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);
  
  // Hide on login/auth pages
  if (pathname === '/' || pathname.startsWith('/login') || pathname.startsWith('/auth')) {
    return null;
  }

  useEffect(() => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if (userData.isAuthenticated) {
          setUser({
            email: userData.email,
            name: userData.name || userData.email.split('@')[0]
          });
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Patients', icon: Users, href: '/dashboard/patients' },
    { name: 'Reports', icon: FileText, href: '/dashboard/reports' },
    { name: 'Messages', icon: MessageSquare, href: '/dashboard/messages' },
    { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-blue-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-800">Clinical Care</span>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-600">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            <div className="flex items-center space-x-3 border-l pl-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-medium text-gray-900 leading-none">
                  Dr. {user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 mt-1">{user?.email || 'user@example.com'}</p>
              </div>
              <button 
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-gray-600"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;