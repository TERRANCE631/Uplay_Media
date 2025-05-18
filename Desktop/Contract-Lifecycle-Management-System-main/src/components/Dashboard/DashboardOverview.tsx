import React from 'react';
import { 
  FileText, 
  AlertTriangle, 
  Clock, 
  CheckSquare, 
  TrendingUp,
  Shield
} from 'lucide-react';

import ContractStatCard from './ContractStatCard';
import SecurityStatusCard from './SecurityStatusCard';
import LifecycleProgressChart from './LifecycleProgressChart';
import ComplianceScorecard from './ComplianceScorecard';
import RecentActivityList from './RecentActivityList';

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-3/4 space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contract Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ContractStatCard 
                title="Active Contracts" 
                value="247" 
                icon={<FileText className="h-8 w-8 text-indigo-500" />} 
                trend="+3.2%"
                trendUp={true}
              />
              <ContractStatCard 
                title="Expiring Soon" 
                value="32" 
                icon={<Clock className="h-8 w-8 text-amber-500" />} 
                trend="+5"
                trendUp={false}
              />
              <ContractStatCard 
                title="Pending Approval" 
                value="18" 
                icon={<CheckSquare className="h-8 w-8 text-teal-500" />} 
                trend="-2"
                trendUp={true}
              />
              <ContractStatCard 
                title="Compliance Issues" 
                value="7" 
                icon={<AlertTriangle className="h-8 w-8 text-red-500" />} 
                trend="-1"
                trendUp={true}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Lifecycle Progress</h2>
                <select className="text-sm border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Last year</option>
                </select>
              </div>
              <LifecycleProgressChart />
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Compliance Score</h2>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">+2.5%</span>
                </div>
              </div>
              <ComplianceScorecard />
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow p-6 h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Security Status</h2>
              <Shield className="w-5 h-5 text-green-500" />
            </div>
            <SecurityStatusCard />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <RecentActivityList />
      </div>
    </div>
  );
};

export default DashboardOverview;