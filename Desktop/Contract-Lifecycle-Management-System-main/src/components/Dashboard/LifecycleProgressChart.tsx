import React from 'react';

const LifecycleProgressChart = () => {
  // This would use a real chart library in production
  const phases = [
    { name: 'Registration', count: 45, color: 'bg-blue-500' },
    { name: 'Sourcing', count: 32, color: 'bg-indigo-500' },
    { name: 'Authoring', count: 28, color: 'bg-purple-500' },
    { name: 'Approval', count: 18, color: 'bg-pink-500' },
    { name: 'Repository', count: 62, color: 'bg-teal-500' },
    { name: 'Amendments', count: 15, color: 'bg-amber-500' },
    { name: 'Renewal', count: 24, color: 'bg-green-500' },
  ];

  const totalCount = phases.reduce((sum, phase) => sum + phase.count, 0);

  return (
    <div className="space-y-4">
      {/* Bar chart representation */}
      <div className="h-12 flex rounded-lg overflow-hidden">
        {phases.map((phase, index) => (
          <div 
            key={index}
            className={`${phase.color} h-full`}
            style={{ width: `${(phase.count / totalCount) * 100}%` }}
            title={`${phase.name}: ${phase.count} contracts`}
          />
        ))}
      </div>
      
      {/* Legend */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
        {phases.map((phase, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-3 h-3 rounded-sm ${phase.color} mr-2`} />
            <span>{phase.name} ({phase.count})</span>
          </div>
        ))}
      </div>
      
      <div className="mt-2 text-sm text-gray-500">
        <p>224 contracts currently in progress</p>
      </div>
    </div>
  );
};

export default LifecycleProgressChart;