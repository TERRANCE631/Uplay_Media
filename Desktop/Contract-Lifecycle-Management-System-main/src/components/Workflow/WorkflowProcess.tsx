import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProcessPhaseCard from './ProcessPhaseCard';

const WorkflowProcess = () => {
  const phases = [
    {
      id: 1,
      name: 'Supplier Registration',
      description: 'Supplier registration and verification process',
      icon: 'Users',
      objectives: [
        'Capture comprehensive supplier data',
        'Verify identity and legal status',
        'Assess risk profile',
        'Enable secure portal access'
      ],
      stakeholders: ['Procurement', 'Legal', 'Security'],
      securityControls: [
        'AES-256 data encryption',
        'Multi-factor authentication',
        'Identity verification'
      ],
      auditReqs: [
        'Full audit trail of registration steps',
        'Document verification logs',
        'Access attempt records'
      ],
      exceptions: [
        'Expedited onboarding process for critical vendors',
        'Enhanced verification for high-risk suppliers'
      ]
    },
    {
      id: 2,
      name: 'Sourcing & Bid Management',
      description: 'RFP creation, distribution and bid evaluation',
      icon: 'Search',
      objectives: [
        'Standardize RFx creation',
        'Secure distribution of requirements',
        'Structured evaluation of responses',
        'Selection with audit trail'
      ],
      stakeholders: ['Procurement', 'Business Units', 'Finance'],
      securityControls: [
        'Document access controls',
        'Bid encryption',
        'Non-disclosure enforcement'
      ],
      auditReqs: [
        'Timestamped bid receipts',
        'Evaluation criteria documentation',
        'Decision justification'
      ],
      exceptions: [
        'Sole source justification workflow',
        'Emergency procurement process'
      ]
    },
    {
      id: 3,
      name: 'Contract Authoring',
      description: 'Contract creation, negotiation, and finalization',
      icon: 'Pen',
      objectives: [
        'Template-based authoring',
        'Controlled negotiation workflow',
        'Version control',
        'Change tracking with history'
      ],
      stakeholders: ['Legal', 'Procurement', 'Business Units'],
      securityControls: [
        'Clause-level permissions',
        'Redlining security',
        'Document watermarking'
      ],
      auditReqs: [
        'Full version history',
        'Negotiation interaction logs',
        'Approval timestamps'
      ],
      exceptions: [
        'Fast-track for standard agreements',
        'Legal override for special terms'
      ]
    },
    {
      id: 4,
      name: 'Approval Workflow',
      description: 'Multi-level approvals and e-signature process',
      icon: 'CheckSquare',
      objectives: [
        'Role-based approval routing',
        'Conditional approval paths',
        'E-signature integration',
        'Delegation management'
      ],
      stakeholders: ['Legal', 'Finance', 'Executives', 'Business Units'],
      securityControls: [
        'Signature authentication',
        'Authority verification',
        'Tamper-evident signing'
      ],
      auditReqs: [
        'Approval timestamps',
        'IP address tracking',
        'Certificate of completion'
      ],
      exceptions: [
        'Emergency approval path',
        'Escalation for delayed responses'
      ]
    },
    {
      id: 5,
      name: 'Repository Management',
      description: 'Secure storage, search, and compliance tracking',
      icon: 'Archive',
      objectives: [
        'Structured metadata tagging',
        'Full-text search capability',
        'Obligation tracking',
        'Compliance monitoring'
      ],
      stakeholders: ['Legal', 'Compliance', 'Business Units'],
      securityControls: [
        'Granular access controls',
        'Document encryption',
        'Geographic data restrictions'
      ],
      auditReqs: [
        'Access logs',
        'Download tracking',
        'Search history'
      ],
      exceptions: [
        'Legal hold process',
        'Regulatory disclosure workflow'
      ]
    },
    {
      id: 6,
      name: 'Change Management',
      description: 'Contract amendments and change process',
      icon: 'FileCheck',
      objectives: [
        'Controlled amendment process',
        'Impact assessment',
        'Approval routing',
        'Version relationship tracking'
      ],
      stakeholders: ['Legal', 'Procurement', 'Business Units'],
      securityControls: [
        'Amendment authentication',
        'Change verification',
        'Authority validation'
      ],
      auditReqs: [
        'Amendment history',
        'Justification documentation',
        'Approval chain'
      ],
      exceptions: [
        'Administrative change fast-track',
        'Force majeure process'
      ]
    },
    {
      id: 7,
      name: 'Renewal Management',
      description: 'Expiration tracking, renewal, and termination',
      icon: 'RefreshCw',
      objectives: [
        'Advanced notification system',
        'Performance evaluation',
        'Renewal decision workflow',
        'Termination processing'
      ],
      stakeholders: ['Procurement', 'Business Units', 'Finance'],
      securityControls: [
        'Renewal authorization',
        'Term verification',
        'Notification security'
      ],
      auditReqs: [
        'Notification acknowledgments',
        'Decision documentation',
        'Renewal terms comparison'
      ],
      exceptions: [
        'Auto-renewal override',
        'Extension process'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contract Lifecycle Management Process</h2>
        <p className="text-gray-600 mb-6">
          A secure, automated end-to-end contract management workflow with comprehensive audit trails,
          compliance monitoring, and role-based access controls.
        </p>
        
        <div className="relative">
          {/* Connected workflow line */}
          {/* <div className="absolute top-20 left-1/2 w-[95%] h-0.5 bg-indigo-200 -translate-x-1/2 hidden lg:block"></div> */}
          
          {/* Phase indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
            {phases.map((phase, index) => (
              <div key={phase.id} className="flex flex-col items-center">
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white z-10">
                    {phase.id}
                  </div>
                  {index < phases.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-indigo-500 absolute -right-5 top-2.5 hidden lg:block" />
                  )}
                </div>
                <div className="text-center mt-2">
                  <h3 className="font-medium text-gray-900 text-sm">{phase.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Detailed phase cards */}
      <div className="space-y-4">
        {phases.map((phase) => (
          <ProcessPhaseCard key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  );
};

export default WorkflowProcess;