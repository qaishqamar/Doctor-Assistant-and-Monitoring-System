'use client';

import { useState } from 'react';
import { Search, Phone, Mail, Video, MoreVertical } from 'lucide-react';

// Mock data for messages/conversations
const mockConversations = [
  {
    id: 1,
    patientName: 'John Smith',
    lastMessage: 'Thank you for the advice, doctor.',
    time: '10:30 AM',
    unread: 2,
    avatar: 'JS'
  },
  {
    id: 2,
    patientName: 'Mary Johnson',
    lastMessage: 'I have some concerns about my medication...',
    time: 'Yesterday',
    unread: 0,
    avatar: 'MJ'
  },
  {
    id: 3,
    patientName: 'Robert Davis',
    lastMessage: 'Can we schedule a follow-up?',
    time: 'Nov 12',
    unread: 1,
    avatar: 'RD'
  },
  {
    id: 4,
    patientName: 'Patricia Wilson',
    lastMessage: 'My test results came back normal!',
    time: 'Nov 11',
    unread: 0,
    avatar: 'PW'
  },
  {
    id: 5,
    patientName: 'Michael Brown',
    lastMessage: 'I forgot to take my pills yesterday',
    time: 'Nov 10',
    unread: 0,
    avatar: 'MB'
  }
];

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState(mockConversations[0]);

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] sm:h-[calc(100vh-10rem)]">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl text-gray-900 mb-1 sm:mb-2">Messages</h1>
        <p className="text-gray-600">Communicate with your patients securely</p>
      </div>

      <div className="flex flex-1 gap-4 sm:gap-6">
        {/* Conversations List */}
        <div className="w-full sm:w-1/3 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-3 sm:p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
              />
            </div>
          </div>
          
          <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 14rem)' }}>
            {mockConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-3 sm:p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                  activeConversation.id === conversation.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                }`}
                onClick={() => setActiveConversation(conversation)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-medium">
                    {conversation.avatar}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {conversation.patientName}
                      </h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="ml-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="hidden sm:flex flex-1 flex-col bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="p-3 sm:p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-medium">
                {activeConversation.avatar}
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">{activeConversation.patientName}</h3>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                <Video className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 bg-gray-50" style={{ maxHeight: 'calc(100vh - 16rem)' }}>
            <div className="space-y-3 sm:space-y-4">
              {/* Sample messages */}
              <div className="flex justify-start">
                <div className="max-w-xs bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-800">Hi Dr. Johnson, I wanted to ask about my medication dosage.</p>
                  <p className="text-xs text-gray-500 mt-1">10:15 AM</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="max-w-xs bg-blue-500 text-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm">Hello John, your dosage is correct as prescribed. Take it once daily with food.</p>
                  <p className="text-xs text-blue-200 mt-1">10:17 AM</p>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="max-w-xs bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-800">Thank you for confirming. Should I continue for another month?</p>
                  <p className="text-xs text-gray-500 mt-1">10:20 AM</p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="max-w-xs bg-blue-500 text-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm">Yes, continue for the full course. We'll evaluate after a month.</p>
                  <p className="text-xs text-blue-200 mt-1">10:22 AM</p>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="max-w-xs bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-800">Thank you for the advice, doctor.</p>
                  <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-3 sm:p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              />
              <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}