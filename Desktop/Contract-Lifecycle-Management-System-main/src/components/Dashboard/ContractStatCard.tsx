import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ContractStatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  trendUp: boolean;
}

const ContractStatCard = ({ title, value, icon, trend, trendUp }: ContractStatCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        {icon}
      </div>
      <div className={`flex items-center mt-3 text-sm ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
        {trendUp ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
        <span>{trend} from last month</span>
      </div>
    </div>
  );
};

export default ContractStatCard;