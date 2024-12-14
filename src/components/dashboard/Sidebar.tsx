'use client';

import { Calendar, Users, MapPin, Home } from 'lucide-react';
import { NavLink } from './NavLink';

export function Sidebar() {
  return (
    <aside className="fixed left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-sm">
      <nav className="p-4 space-y-2">
        <NavLink href="/dashboard" icon={Home}>
          Dashboard
        </NavLink>
        <NavLink href="/dashboard/scheduling" icon={Calendar}>
          Scheduling
        </NavLink>
        <NavLink href="/dashboard/agents" icon={Users}>
          Agents
        </NavLink>
        <NavLink href="/dashboard/addresses" icon={MapPin}>
          Addresses
        </NavLink>
      </nav>
    </aside>
  );
}