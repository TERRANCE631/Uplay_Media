import React from 'react';
import { Shield, Eye, EyeOff, Lock, Unlock, Check, X } from 'lucide-react';

const SecurityMatrix = () => {
  const roles = [
    'Admin',
    'Legal',
    'Procurement',
    'Finance',
    'Business User',
    'Auditor',
    'Vendor',
  ];

  const permissions = [
    { 
      category: 'Supplier Management',
      actions: [
        { name: 'Create Supplier', id: 'create_supplier' },
        { name: 'View Supplier', id: 'view_supplier' },
        { name: 'Edit Supplier', id: 'edit_supplier' },
        { name: 'Delete Supplier', id: 'delete_supplier' },
      ]
    },
    { 
      category: 'Contract Authoring',
      actions: [
        { name: 'Create Contract', id: 'create_contract' },
        { name: 'View Contract', id: 'view_contract' },
        { name: 'Edit Contract', id: 'edit_contract' },
        { name: 'Delete Contract', id: 'delete_contract' },
      ]
    },
    { 
      category: 'Approvals',
      actions: [
        { name: 'Request Approval', id: 'request_approval' },
        { name: 'Approve Contract', id: 'approve_contract' },
        { name: 'Reject Contract', id: 'reject_contract' },
        { name: 'View Approval History', id: 'view_approval_history' },
      ]
    },
    { 
      category: 'Repository',
      actions: [
        { name: 'Upload Document', id: 'upload_document' },
        { name: 'Download Document', id: 'download_document' },
        { name: 'View Document', id: 'view_document' },
        { name: 'Delete Document', id: 'delete_document' },
      ]
    },
  ];

  // Mock permission matrix
  const permissionMatrix: Record<string, Record<string, string>> = {
    'Admin': {
      'create_supplier': 'full', 'view_supplier': 'full', 'edit_supplier': 'full', 'delete_supplier': 'full',
      'create_contract': 'full', 'view_contract': 'full', 'edit_contract': 'full', 'delete_contract': 'full',
      'request_approval': 'full', 'approve_contract': 'full', 'reject_contract': 'full', 'view_approval_history': 'full',
      'upload_document': 'full', 'download_document': 'full', 'view_document': 'full', 'delete_document': 'full',
    },
    'Legal': {
      'create_supplier': 'none', 'view_supplier': 'full', 'edit_supplier': 'none', 'delete_supplier': 'none',
      'create_contract': 'full', 'view_contract': 'full', 'edit_contract': 'full', 'delete_contract': 'limited',
      'request_approval': 'full', 'approve_contract': 'full', 'reject_contract': 'full', 'view_approval_history': 'full',
      'upload_document': 'full', 'download_document': 'full', 'view_document': 'full', 'delete_document': 'limited',
    },
    'Procurement': {
      'create_supplier': 'full', 'view_supplier': 'full', 'edit_supplier': 'full', 'delete_supplier': 'limited',
      'create_contract': 'full', 'view_contract': 'full', 'edit_contract': 'full', 'delete_contract': 'none',
      'request_approval': 'full', 'approve_contract': 'limited', 'reject_contract': 'limited', 'view_approval_history': 'full',
      'upload_document': 'full', 'download_document': 'full', 'view_document': 'full', 'delete_document': 'none',
    },
    'Finance': {
      'create_supplier': 'none', 'view_supplier': 'full', 'edit_supplier': 'limited', 'delete_supplier': 'none',
      'create_contract': 'none', 'view_contract': 'limited', 'edit_contract': 'none', 'delete_contract': 'none',
      'request_approval': 'none', 'approve_contract': 'limited', 'reject_contract': 'limited', 'view_approval_history': 'full',
      'upload_document': 'limited', 'download_document': 'limited', 'view_document': 'limited', 'delete_document': 'none',
    },
    'Business User': {
      'create_supplier': 'none', 'view_supplier': 'limited', 'edit_supplier': 'none', 'delete_supplier': 'none',
      'create_contract': 'limited', 'view_contract': 'limited', 'edit_contract': 'none', 'delete_contract': 'none',
      'request_approval': 'full', 'approve_contract': 'none', 'reject_contract': 'none', 'view_approval_history': 'limited',
      'upload_document': 'limited', 'download_document': 'limited', 'view_document': 'limited', 'delete_document': 'none',
    },
    'Auditor': {
      'create_supplier': 'none', 'view_supplier': 'full', 'edit_supplier': 'none', 'delete_supplier': 'none',
      'create_contract': 'none', 'view_contract': 'full', 'edit_contract': 'none', 'delete_contract': 'none',
      'request_approval': 'none', 'approve_contract': 'none', 'reject_contract': 'none', 'view_approval_history': 'full',
      'upload_document': 'none', 'download_document': 'none', 'view_document': 'full', 'delete_document': 'none',
    },
    'Vendor': {
      'create_supplier': 'none', 'view_supplier': 'none', 'edit_supplier': 'limited', 'delete_supplier': 'none',
      'create_contract': 'none', 'view_contract': 'limited', 'edit_contract': 'none', 'delete_contract': 'none',
      'request_approval': 'none', 'approve_contract': 'none', 'reject_contract': 'none', 'view_approval_history': 'none',
      'upload_document': 'limited', 'download_document': 'none', 'view_document': 'limited', 'delete_document': 'none',
    },
  };

  const getPermissionIcon = (level: string) => {
    switch (level) {
      case 'full':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'limited':
        return <Shield className="h-5 w-5 text-amber-500" />;
      case 'none':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return <X className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:px-6 bg-indigo-700 rounded-t-lg">
          <h3 className="text-lg font-medium leading-6 text-white">Security & Access Control Matrix</h3>
          <p className="mt-1 max-w-2xl text-sm text-indigo-100">
            Role-Based Access Control (RBAC) + Attribute-Based Access Control (ABAC)
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th scope="col" className="sticky left-0 bg-gray-50 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Permissions
                  </th>
                  {roles.map((role) => (
                    <th 
                      key={role} 
                      scope="col" 
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      {role}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {permissions.map((permissionGroup) => (
                  <React.Fragment key={permissionGroup.category}>
                    <tr className="bg-gray-100">
                      <th 
                        colSpan={roles.length + 1}
                        scope="colgroup" 
                        className="px-4 py-2 text-left text-sm font-semibold text-gray-900"
                      >
                        {permissionGroup.category}
                      </th>
                    </tr>
                    {permissionGroup.actions.map((action) => (
                      <tr key={action.id} className="hover:bg-gray-50">
                        <td className="sticky left-0 bg-white py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {action.name}
                        </td>
                        {roles.map((role) => (
                          <td key={`${role}-${action.id}`} className="px-3 py-4 text-sm text-gray-500 text-center">
                            {getPermissionIcon(permissionMatrix[role][action.id])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 rounded-b-lg flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-1" />
            <span>Full Access</span>
          </div>
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-amber-500 mr-1" />
            <span>Limited Access</span>
          </div>
          <div className="flex items-center">
            <X className="h-5 w-5 text-red-500 mr-1" />
            <span>No Access</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-5">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Security Implementation Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2 flex items-center">
              <Lock className="h-4 w-4 text-indigo-600 mr-2" />
              Encryption
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>• AES-256 for data at rest</li>
              <li>• TLS 1.2+ for data in transit</li>
              <li>• Encrypted document storage</li>
              <li>• End-to-end encrypted communication</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2 flex items-center">
              <Shield className="h-4 w-4 text-indigo-600 mr-2" />
              Authentication
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Multi-factor authentication</li>
              <li>• SSO integration (SAML, OIDC)</li>
              <li>• Password policy enforcement</li>
              <li>• Session management & timeouts</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2 flex items-center">
              <Eye className="h-4 w-4 text-indigo-600 mr-2" />
              Audit
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Immutable activity logging</li>
              <li>• SIEM integration</li>
              <li>• Real-time security alerts</li>
              <li>• Compliance reporting</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2 flex items-center">
              <Shield className="h-4 w-4 text-indigo-600 mr-2" />
              Data Protection
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Geographic data restrictions</li>
              <li>• Retention policies</li>
              <li>• Data classification</li>
              <li>• Legal hold mechanisms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityMatrix;