import { useState } from 'react';
import { Bell, ChevronDown, Search, SidebarOpen, User } from 'lucide-react';
import { GlobalContext } from '../../Hooks/useContext';

const Header = () => {
  const { setShowSideBar }: any = GlobalContext();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-white fixed w-full border-b border-gray-200 z-50">
      <div className="px-4 py-4 gap-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p
            onClick={() => setShowSideBar((prev: boolean) => !prev)}
            className="text-white border-2 shadow-inner shadow-indigo-700 bg-gradient-to-tr from-indigo-700 to-green-700 
            scale-150 rounded-md">
            <SidebarOpen />
          </p>
          <p className="text-2xl hidden md:block uppercase font-extrabold bg-gradient-to-tr from-indigo-700 to-green-700 
            bg-clip-text text-transparent">
            CLMS
          </p>
        </div>
        <div className="flex-1 min-w-0">
          <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-600">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="search"
              className="block w-full h-10 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search contracts, vendors, or documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="ml-4 flex items-center md:ml-6 space-x-4">
          <button
            type="button"
            className="p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" />
          </button>
          <div className="bg-rose-600 rounded-full text-sm absolute text-white px-1 top-4">
            0
          </div>
          <div className="border-l border-gray-200 h-6 mx-2" />
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
              <User className="h-5 w-5" />
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">Admin User</span>
            <span><ChevronDown className='h-4 w-4' /></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;