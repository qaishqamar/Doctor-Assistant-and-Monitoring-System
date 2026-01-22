'use client';

import React from 'react';

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600 mt-1">View and manage your messages</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow border">
        <p className="text-gray-500">No messages yet. Your conversations will appear here.</p>
      </div>
    </div>
  );
}