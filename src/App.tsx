import React, { useState, useEffect, useMemo } from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Trophy, Users, TrendingUp, TrendingDown, Upload, Calendar, Clock } from 'lucide-react';

const calculatePointsForMember = (member) => {
  const base = member.floor * 5;
  const speed = Math.min(200, Math.max(0, member.speed * 10));
  const consistency = Math.floor((member.daysActive || 0) * 3);
  const bonus = member.floor >= 300 ? 500 : member.floor >= 200 ? 300 : 0;
  return base + speed + consistency + bonus;
};

const App = () => {
  const [activeView, setActiveView] = useState('dashboard');

  const [members, setMembers] = useState([
    { name: 'NectaRaven', floor: 231, speed: 7.5, daysActive: 9 },
    { name: 'Stormsean', floor: 102, speed: 4.2, daysActive: 6 },
    { name: 'Zytharion', floor: 189, speed: 5.1, daysActive: 8 },
  ]);

  const processedMembers = useMemo(() => members.map(m => ({
    ...m,
    points: calculatePointsForMember(m),
    projected: calculatePointsForMember(m) + Math.floor(m.speed * 22),
  })), [members]);

  const dailyData = useMemo(() => processedMembers.map(m => ({
    name: m.name,
    today: m.points,
    projected: m.projected,
  })), [processedMembers]);

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Guild Tracker Dashboard</h1>

      <div className="flex gap-4 mb-6">
        <button onClick={() => setActiveView('dashboard')} className="px-4 py-2 bg-blue-600 rounded-lg">Dashboard</button>
        <button onClick={() => setActiveView('members')} className="px-4 py-2 bg-green-600 rounded-lg">Members</button>
        <button onClick={() => setActiveView('import')} className="px-4 py-2 bg-purple-600 rounded-lg">Import</button>
      </div>

      {activeView === 'dashboard' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Guild Progress Overview</h2>
          <div className="w-full h-80 bg-gray-800 p-4 rounded-xl">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="today" stroke="#4ade80" strokeWidth={3} />
                <Line type="monotone" dataKey="projected" stroke="#60a5fa" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeView === 'members' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Member Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processedMembers.map(member => (
              <div key={member.name} className="bg-gray-800 p-4 rounded-xl shadow">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p>Floor: {member.floor}</p>
                <p>Speed: {member.speed} floors/day</p>
                <p>Days Active: {member.daysActive}</p>
                <p className="text-green-400 font-bold">Points: {member.points}</p>
                <p className="text-blue-400">Projected: {member.projected}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeView === 'import' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Import Member Data</h2>
          <p className="text-gray-300 mb-4">Paste JSON or upload data to update your guild stats.</p>
          <textarea className="w-full h-40 p-4 bg-gray-800 rounded-xl" placeholder="Paste JSON here..."></textarea>
          <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg">Import</button>
        </div>
      )}

    </div>
  );
};

export default App;
