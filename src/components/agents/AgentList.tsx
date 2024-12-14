import React from 'react';
import { AgentCard } from './AgentCard';
import { List, Grid } from 'lucide-react';

interface Agent {
  id: string;
  title: string;
  prompt: string;
  voiceId: string;
}

interface AgentListProps {
  agents: Agent[];
  viewMode: 'list' | 'grid';
}

export function AgentList({ agents, viewMode }: AgentListProps) {
  return (
    <div className={`mt-6 ${
      viewMode === 'grid' 
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
        : 'space-y-4'
    }`}>
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}