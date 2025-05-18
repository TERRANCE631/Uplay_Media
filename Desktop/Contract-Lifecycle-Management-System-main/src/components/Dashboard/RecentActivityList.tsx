import React from 'react';
import { 
  FileText, 
  UserCheck, 
  Edit, 
  Check, 
  AlertCircle,
  Clock,
  Calendar
} from 'lucide-react';

interface ActivityItem {
  id: number;
  action: string;
  description: string;
  user: string;
  timestamp: string;
  icon: React.ReactNode;
  iconBg: string;
}

const RecentActivityList = () => {
  const activities: ActivityItem[] = [
    {
      id: 1,
      action: 'Contract Approved',
      description: 'MSA with Acme Corp was approved',
      user: 'Sarah Johnson',
      timestamp: '2 hours ago',
      icon: <Check className="h-4 w-4" />,
      iconBg: 'bg-green-100 text-green-600'
    },
    {
      id: 2,
      action: 'Vendor Registered',
      description: 'New vendor TechSupplies Inc registered',
      user: 'System',
      timestamp: '3 hours ago',
      icon: <UserCheck className="h-4 w-4" />,
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      id: 3,
      action: 'Contract Modified',
      description: 'Terms updated on GlobalCorp service agreement',
      user: 'Michael Chen',
      timestamp: '5 hours ago',
      icon: <Edit className="h-4 w-4" />,
      iconBg: 'bg-amber-100 text-amber-600'
    },
    {
      id: 4,
      action: 'Compliance Alert',
      description: 'Insurance certificate expired for VendorX',
      user: 'System',
      timestamp: 'Yesterday',
      icon: <AlertCircle className="h-4 w-4" />,
      iconBg: 'bg-red-100 text-red-600'
    },
    {
      id: 5,
      action: 'Contract Renewal',
      description: 'Annual renewal processed for SupplyChain Ltd',
      user: 'Jennifer Smith',
      timestamp: 'Yesterday',
      icon: <Calendar className="h-4 w-4" />,
      iconBg: 'bg-purple-100 text-purple-600'
    },
  ];

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {activities.map((activity, index) => (
          <li key={activity.id}>
            <div className="relative pb-8">
              {index !== activities.length - 1 && (
                <span 
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" 
                  aria-hidden="true"
                />
              )}
              <div className="relative flex items-start space-x-3">
                <div>
                  <div className={`relative px-1 h-10 w-10 rounded-full flex items-center justify-center ${activity.iconBg}`}>
                    {activity.icon}
                  </div>
                </div>
                <div className="min-w-0 flex-1 py-1.5">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-900">{activity.action}</span>
                    <span className="mx-1">•</span>
                    <span>{activity.description}</span>
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">{activity.user}</span>
                    <Clock className="mr-1.5 h-3.5 w-3.5 text-gray-400" />
                    <span>{activity.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
          View all activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivityList;