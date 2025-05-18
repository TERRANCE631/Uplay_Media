import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import SlideInBar from './SlideInBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar /><SlideInBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-2 my-[5rem] md:ml-[4rem]">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;