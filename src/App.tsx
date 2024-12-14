import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { Scheduling } from './pages/Scheduling';
import { Agents } from './pages/Agents';
import { Addresses } from './pages/Addresses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/scheduling" element={<Scheduling />} />
        <Route path="/dashboard/agents" element={<Agents />} />
        <Route path="/dashboard/addresses" element={<Addresses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;