import React from 'react';
import { Bot, Mic, MessageSquare } from 'lucide-react';

interface AgentCardProps {
  agent: {
    id: string;
    title: string;
    prompt: string;
    voiceId: string;
  };
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <Bot className="h-8 w-8 text-indigo-600" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{agent.title}</h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{agent.prompt}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center">
          <Mic className="h-4 w-4 mr-1" />
          <span>Voice Enabled</span>
        </div>
        <div className="flex items-center">
          <MessageSquare className="h-4 w-4 mr-1" />
          <span>Chat Ready</span>
        </div>
      </div>
    </div>
  );
}