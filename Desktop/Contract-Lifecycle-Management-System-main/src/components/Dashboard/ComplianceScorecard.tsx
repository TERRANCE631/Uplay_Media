import React from 'react';

const ComplianceScorecard = () => {
  // This would connect to actual compliance data in production
  const complianceAreas = [
    { name: 'Data Privacy', score: 92, status: 'Compliant' },
    { name: 'Security Controls', score: 96, status: 'Compliant' },
    { name: 'Regulatory', score: 88, status: 'Compliant' },
    { name: 'Workflow Adherence', score: 78, status: 'Attention Needed' },
  ];

  const overallScore = Math.round(
    complianceAreas.reduce((sum, area) => sum + area.score, 0) / complianceAreas.length
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e6e6e6"
              strokeWidth="2"
              strokeDasharray="100, 100"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="2"
              strokeDasharray={`${overallScore}, 100`}
            />
            <text x="18" y="20.5" textAnchor="middle" fontSize="10" fill="#1F2937" fontWeight="bold">
              {overallScore}%
            </text>
          </svg>
        </div>
      </div>
      
      <div className="space-y-2">
        {complianceAreas.map((area, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className="text-gray-700">{area.name}</span>
            <div className="flex items-center">
              <div className="w-24 h-2 bg-gray-200 rounded-full mr-2 overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    area.score >= 90 ? 'bg-green-500' : 
                    area.score >= 80 ? 'bg-blue-500' : 
                    area.score >= 70 ? 'bg-amber-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${area.score}%` }}
                />
              </div>
              <span className="font-medium text-gray-900 w-8">{area.score}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceScorecard;