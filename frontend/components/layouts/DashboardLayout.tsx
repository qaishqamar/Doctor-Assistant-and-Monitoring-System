'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Activity, LayoutDashboard, Users, FileText, Activity as Monitor, MessageSquare, Settings, LogOut, Bell } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onLogout?: () => void;
}

export function DashboardLayout({ children, onLogout }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    if (onLogout) {
      onLogout();
    } else {
      router.push('/login');
    }
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/patients', label: 'Patients', icon: Users },
    { path: '/reports', label: 'Reports', icon: FileText },
    { path: '/messages', label: 'Messages', icon: MessageSquare },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  // Only show layout for authenticated routes
  if (pathname === '/login' || pathname === '/') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Activity className="w-8 h-8 text-blue-600" />
              <span className="text-xl text-gray-900 font-semibold hidden sm:block">Clinical Care</span>
            </div>

            {/* Navigation Tabs */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right side - Notifications and Profile */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="flex items-center space-x-2 sm:space-x-3 p-2 hover:bg-gray-50 rounded-lg"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm sm:text-base">
                    DS
                  </div>
                  <div className="text-left hidden lg:block">
                    <div className="text-gray-900 text-sm">Dr. Sarah Johnson</div>
                    <div className="text-xs text-gray-500">Internal Medicine</div>
                  </div>
                </button>

                {showProfile && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="text-gray-900">Dr. Sarah Johnson</div>
                      <div className="text-sm text-gray-500">sarah.johnson@clinic.com</div>
                    </div>
                    <Link href="/settings" className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2 text-red-600"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {children}
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}