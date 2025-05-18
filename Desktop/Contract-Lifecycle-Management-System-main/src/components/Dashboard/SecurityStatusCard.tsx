import React from 'react';
import { Shield, AlertTriangle, Check } from 'lucide-react';

const SecurityStatusCard = () => {
  const securityItems = [
    { 
      name: 'Encryption (AES-256)', 
      status: 'active', 
      icon: <Shield className="h-4 w-4" /> 
    },
    { 
      name: 'MFA Compliance', 
      status: 'active',
      icon: <Shield className="h-4 w-4" /> 
    },
    { 
      name: 'Audit Logging', 
      status: 'active',
      icon: <Shield className="h-4 w-4" /> 
    },
    { 
      name: 'RBAC Enforcement', 
      status: 'active',
      icon: <Shield className="h-4 w-4" /> 
    },
    { 
      name: 'Data Retention', 
      status: 'warning',
      icon: <AlertTriangle className="h-4 w-4" /> 
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-gray-900">Overall Security</div>
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-sm font-medium text-green-700">Compliant</span>
        </div>
      </div>
      
      <div className="border-t border-b border-gray-200 py-4 space-y-3">
        <h3 className="text-sm font-medium text-gray-700">Security Controls</h3>
        {securityItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <span className={`mr-2 ${item.status === 'active' ? 'text-green-500' : 'text-amber-500'}`}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </div>
            <span className={`flex items-center ${
              item.status === 'active' ? 'text-green-500' : 'text-amber-500'
            }`}>
              {item.status === 'active' ? 
                <Check className="h-4 w-4" /> : 
                <AlertTriangle className="h-4 w-4" />
              }
            </span>
          </div>
        ))}
      </div>
      
      <div className="pt-2">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Last Security Scan</h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Today at 09:45 AM</span>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium">
            View Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityStatusCard;