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
  ChevronDown,
  SidebarClose,
  LogOut,
  Workflow,
  ShieldCheck
} from 'lucide-react';
import { GlobalContext } from '../../Hooks/useContext';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
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
        className={`w-full flex items-center px-3 py-[0.6rem] text-sm font-medium rounded-md ${active
          ? 'text-white bg-indigo-800 border-2'
          : 'text-indigo-800 hover:text-white border-2 hover:bg-indigo-700'
          } transition duration-150 ease-in-out`}
        onClick={handleClick}
      >
        <span className="mr-3 h-5 w-5">{icon}</span>
        <span className="flex-1 text-left truncate">{text}</span>
        {hasSubmenu && (
          <span className="ml-2">
            {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </span>
        )}
      </button>
      {hasSubmenu && expanded && (
        <div className="space-y-1 mt-1 bg-gray-200 rounded-lg">
          {children}
        </div>
      )}
    </div>
  );
};

const SlideInBar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const { showSiderBar, setShowSideBar, currentPage, setCurrentPage }: any = GlobalContext();
  return (
    <div className={`${showSiderBar ? "translate-x-0" : "-translate-x-[110%]"} duration-500 o md:w-64 w-[100%] h-full z-20 fixed 
    bg-white border-r border-gray-200`}>
      <div className="flex px-4 pt-4 pb-6 border-b items-center gap-4">
        <p
          onClick={() => setShowSideBar((prev: boolean) => !prev)}
          className="text-white border-2 shadow-inner shadow-indigo-700 bg-gradient-to-tr from-indigo-700 to-green-700 
                    scale-150 rounded-md">
          <SidebarClose />
        </p>
        <p
          onClick={() => { setCurrentPage('dashboard'); setShowSideBar(false) }}
          className="text-2xl uppercase font-extrabold bg-gradient-to-tr from-indigo-700 to-green-700 
                bg-clip-text text-transparent">
          CLMS
        </p>
      </div>
      <div className="px-3 pt-4 pb-10 space-y-2 overflow-y-scroll h-[80%]">
        <SidebarItem
          icon={<BarChart />}
          text="Dashboard"
          active={currentPage === 'dashboard'}
          onClick={() => { setCurrentPage('dashboard'); setShowSideBar(false) }}
        />

        <SidebarItem
          icon={<Users />}
          text="Supplier Management"
          active={currentPage === 'suppliers'}
          onClick={() => setActiveItem('suppliers')}
        />
        <SidebarItem
          icon={<Workflow />}
          text="Contract Workflow"
          active={currentPage === 'workflow'}
          onClick={() => { setCurrentPage('workflow'); setShowSideBar(false) }}
        />
        <SidebarItem
          icon={<ShieldCheck />}
          text="Security Matrix"
          active={currentPage === 'security'}
          onClick={() => { setCurrentPage('security'); setShowSideBar(false) }}
        />

        <SidebarItem
          icon={<FileCheck />}
          text="Contract Lifecycle"
          hasSubmenu={true}
          active={['sourcing', 'authoring', 'approval', 'repository', 'changes', 'renewals'].includes(activeItem)}
        >
          <SidebarItem
            icon={<FileText />}
            text="Sourcing & Bids"
            active={currentPage === 'sourcing'}
            onClick={() => setActiveItem('sourcing')}
          />
          <SidebarItem
            icon={<Pen />}
            text="Authoring & Negotiation"
            active={currentPage === 'authoring'}
            onClick={() => setActiveItem('authoring')}
          />
          <SidebarItem
            icon={<CheckSquare />}
            text="Approval & Signatures"
            active={currentPage === 'approval'}
            onClick={() => setActiveItem('approval')}
          />
          <SidebarItem
            icon={<Archive />}
            text="Repository & Compliance"
            active={currentPage === 'repository'}
            onClick={() => setActiveItem('repository')}
          />
          <SidebarItem
            icon={<FileCheck />}
            text="Changes & Amendments"
            active={currentPage === 'changes'}
            onClick={() => setActiveItem('changes')}
          />
          <SidebarItem
            icon={<RefreshCw />}
            text="Renewals & Expirations"
            active={currentPage === 'renewals'}
            onClick={() => setActiveItem('renewals')}
          />
        </SidebarItem>

        <div className="fixed flex items-center w-full inset-x-0 justify-center gap-2 border-t 
        overflow-hidden border-spacing-x-24 bg-white py-3 bottom-0">
          <SidebarItem
            icon={<Settings />}
            text="Settings"
            active={activeItem === 'settings'}
            onClick={() => setActiveItem('settings')}
          />
          <SidebarItem
            icon={<LogOut />}
            text="Sign Out"
            active={activeItem === 'settings'}
            onClick={() => setActiveItem('settings')}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideInBar;