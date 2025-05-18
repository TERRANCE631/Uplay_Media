import React, { useState } from 'react';
import {
  FileText,
  Users,
  FileCheck,
  Pen,
  CheckSquare,
  Archive,
  RefreshCw,
  BarChart,
  Settings,
  ChevronRight,
  LogOut,
  ChevronUp,
  Workflow,
  ShieldCheck
} from 'lucide-react';
import { GlobalContext } from '../../Hooks/useContext';

interface SidebarItemProps {
  icon: React.ReactNode;
  text?: string;
  active?: boolean;
  hasSubmenu?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const SidebarItem = ({
  icon,
  text,
  active = false,
  hasSubmenu = false,
  onClick,
  children
}: SidebarItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (hasSubmenu) {
      setExpanded(!expanded);
    }
    if (onClick) onClick();
  };

  return (
    <div>
      <button
        className={`w-full px-3 py-[0.6rem] text-sm font-medium rounded-md ${active
          ? 'text-white bg-indigo-800 border-2'
          : 'text-indigo-800 hover:text-white bg-white border-2 hover:bg-indigo-700'
          } transition duration-150 ease-in-out`}
        onClick={handleClick}
      >
        <span className="mr- h-5 w-5">{icon}</span>
        <span className="flex-1 text-left">{text}</span>
        {hasSubmenu && (
          <span className="flex justify-center pt-1">
            {expanded ? <ChevronRight className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </span>
        )}
      </button>
      {hasSubmenu && (
        <div className={`pl-10 space-y-1 mt-1 duration-200 ${expanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}>
          {children}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const { showSiderBar, currentPage, setCurrentPage }: any = GlobalContext();

  return (
    <div className={`${showSiderBar ? "-translate-x-[110%]" : "translate-x-0"} duration-500 w-16 h-full fixed bg-white 
    border-r border-gray-200 hidden md:block z-10`}>
      <div className="px-1 py-24 space-y-2">
        <SidebarItem
          icon={<BarChart />}
          active={currentPage === 'dashboard'}
          onClick={() => setCurrentPage('dashboard')}
        />

        <SidebarItem
          icon={<Users />}
          active={activeItem === 'suppliers'}
          onClick={() => setActiveItem('suppliers')}
        />

        <SidebarItem
          icon={<Workflow />}
          active={currentPage === 'workflow'}
          onClick={() => setCurrentPage('workflow')}
        />

        <SidebarItem
          icon={<ShieldCheck />}
          active={currentPage === 'security'}
          onClick={() => setCurrentPage('security')}
        />
        <SidebarItem
          icon={<FileText />}
          hasSubmenu={true}
          active={['sourcing', 'authoring', 'approval', 'repository', 'changes', 'renewals'].includes(activeItem)}
        >

          <div className="fixed backdrop-blur-md bg-black bg-opacity-20 p-2 rounded-lg flex flex-col gap-1 ml-6 md:-mt-[7.5rem] xl:-mt-[3.5rem] 2xl:-mt-8">
            <SidebarItem
              icon={<FileText />}
              active={activeItem === 'sourcing'}
              onClick={() => setActiveItem('sourcing')}
            />
            <SidebarItem
              icon={<Pen />}
              active={activeItem === 'authoring'}
              onClick={() => setActiveItem('authoring')}
            />
            <SidebarItem
              icon={<CheckSquare />}
              active={activeItem === 'approval'}
              onClick={() => setActiveItem('approval')}
            />
            <SidebarItem
              icon={<Archive />}
              active={activeItem === 'repository'}
              onClick={() => setActiveItem('repository')}
            />
            <SidebarItem
              icon={<FileCheck />}
              active={activeItem === 'changes'}
              onClick={() => setActiveItem('changes')}
            />
            <SidebarItem
              icon={<RefreshCw />}
              active={activeItem === 'renewals'}
              onClick={() => setActiveItem('renewals')}
            />
          </div>
        </SidebarItem>

        <div className="flex flex-col justify-center items-center fixed bottom-0 inset-x-0 py-4 border-t gap-2 w-full">
          <SidebarItem
            icon={<LogOut />}
            active={activeItem === 'Sign Out'}
            onClick={() => setActiveItem('Sign Out')}
          />

          <SidebarItem
            icon={<Settings />}
            active={activeItem === 'settings'}
            onClick={() => setActiveItem('settings')}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;