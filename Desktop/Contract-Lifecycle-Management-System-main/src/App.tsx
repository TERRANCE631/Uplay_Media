import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import WorkflowPage from './pages/WorkflowPage';
import SecurityPage from './pages/SecurityPage';
import { GlobalContext } from './Hooks/useContext';

function App() {
  const { currentPage }: any = GlobalContext();
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'workflow':
        return <WorkflowPage />;
      case 'security':
        return <SecurityPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <nav className="bg-indigo-900 text-white p-4">
        <div className="container mx-auto flex justify-center space-x-6">
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              currentPage === 'dashboard' ? 'bg-indigo-700' : 'hover:bg-indigo-800'
            }`}
            onClick={() => setCurrentPage('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              currentPage === 'workflow' ? 'bg-indigo-700' : 'hover:bg-indigo-800'
            }`}
            onClick={() => setCurrentPage('workflow')}
          >
            Contract Workflow
          </button>
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              currentPage === 'security' ? 'bg-indigo-700' : 'hover:bg-indigo-800'
            }`}
            onClick={() => setCurrentPage('security')}
          >
            Security Matrix
          </button>
        </div>
      </nav> */}

      {renderPage()}
    </div>
  );
};

export default App;