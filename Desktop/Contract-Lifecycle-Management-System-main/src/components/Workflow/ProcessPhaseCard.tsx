import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Pen, 
  CheckSquare, 
  Archive, 
  FileCheck, 
  RefreshCw,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  ClipboardList,
  UsersRound,
  AlertTriangle
} from 'lucide-react';

interface PhaseProps {
  id: number;
  name: string;
  description: string;
  icon: string;
  objectives: string[];
  stakeholders: string[];
  securityControls: string[];
  auditReqs: string[];
  exceptions: string[];
}

interface ProcessPhaseCardProps {
  phase: PhaseProps;
}

const ProcessPhaseCard = ({ phase }: ProcessPhaseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="h-6 w-6" />;
      case 'Search': return <Search className="h-6 w-6" />;
      case 'Pen': return <Pen className="h-6 w-6" />;
      case 'CheckSquare': return <CheckSquare className="h-6 w-6" />;
      case 'Archive': return <Archive className="h-6 w-6" />;
      case 'FileCheck': return <FileCheck className="h-6 w-6" />;
      case 'RefreshCw': return <RefreshCw className="h-6 w-6" />;
      default: return <FileCheck className="h-6 w-6" />;
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow overflow-hidden transition-all duration-300 ${
      isExpanded ? 'ring-2 ring-indigo-500' : ''
    }`}>
      <div 
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
            {getIcon(phase.icon)}
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {phase.id}. {phase.name}
            </h3>
            <p className="text-sm text-gray-500">{phase.description}</p>
          </div>
        </div>
        <button 
          className="p-1 rounded-full hover:bg-gray-200"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
        >
          {isExpanded ? 
            <ChevronUp className="h-5 w-5 text-gray-500" /> : 
            <ChevronDown className="h-5 w-5 text-gray-500" />
          }
        </button>
      </div>
      
      {isExpanded && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center text-gray-700 font-medium mb-2">
                  <ClipboardList className="h-4 w-4 mr-2 text-indigo-600" />
                  <h4>Phase Objectives</h4>
                </div>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {phase.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="flex items-center text-gray-700 font-medium mb-2">
                  <UsersRound className="h-4 w-4 mr-2 text-indigo-600" />
                  <h4>Key Stakeholders</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {phase.stakeholders.map((stakeholder, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                    >
                      {stakeholder}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center text-gray-700 font-medium mb-2">
                  <ShieldCheck className="h-4 w-4 mr-2 text-indigo-600" />
                  <h4>Security Controls</h4>
                </div>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {phase.securityControls.map((control, index) => (
                    <li key={index}>{control}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center text-gray-700 font-medium mb-2">
                  <ClipboardList className="h-4 w-4 mr-2 text-indigo-600" />
                  <h4>Audit Requirements</h4>
                </div>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {phase.auditReqs.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="flex items-center text-gray-700 font-medium mb-2">
                  <AlertTriangle className="h-4 w-4 mr-2 text-indigo-600" />
                  <h4>Exception Handling</h4>
                </div>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {phase.exceptions.map((exception, index) => (
                    <li key={index}>{exception}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessPhaseCard;