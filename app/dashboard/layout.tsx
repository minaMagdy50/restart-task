"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthProvider';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { logout } = useContext(AuthContext)!;

  useGSAP(() => {
    gsap.fromTo(
      '.sidebar',
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.main-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: 'power3.out' }
    );
  });

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-50">
      <div className="sidebar hidden md:block w-64 bg-white shadow-md z-10">
        <Sidebar logout={logout} />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header logout={logout} />
        
        <main className="main-content flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
          {children}
        </main>
      </div>
      
      {/* Mobile sidebar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t">
        <div className="flex justify-around items-center">
          <Sidebar logout={logout} mobile />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;