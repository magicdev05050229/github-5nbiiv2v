import React, { useState } from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Users, Plus, List, Grid } from 'lucide-react';
import { AgentList } from '../components/agents/AgentList';
import { CreateAgentForm } from '../components/agents/CreateAgentForm';

interface Agent {
  id: string;
  title: string;
  prompt: string;
  voiceId: string;
}

export function Agents() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateAgent = (newAgent: Omit<Agent, 'id'>) => {
    const agent: Agent = {
      ...newAgent,
      id: Date.now().toString(),
    };
    setAgents([...agents, agent]);
    setIsCreating(false);
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Users className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Agents</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${
                  viewMode === 'list' 
                    ? 'bg-white shadow-sm text-indigo-600' 
                    : 'text-gray-600'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${
                  viewMode === 'grid' 
                    ? 'bg-white shadow-sm text-indigo-600' 
                    : 'text-gray-600'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
            </div>
            
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create an Agent
            </button>
          </div>
        </div>

        {agents.length === 0 ? (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No agents created yet</h3>
            <p className="text-gray-500">Get started by creating your first AI agent.</p>
          </div>
        ) : (
          <AgentList agents={agents} viewMode={viewMode} />
        )}

        {isCreating && (
          <CreateAgentForm
            onCancel={() => setIsCreating(false)}
            onSubmit={handleCreateAgent}
          />
        )}
      </div>
    </DashboardLayout>
  );
}