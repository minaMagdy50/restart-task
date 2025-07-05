"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const DashboardPage = () => {

  useGSAP(() => {
    gsap.fromTo(
      '.dashboard-card',
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.7, 
        stagger: 0.1,
        ease: 'power3.out' 
      }
    );
  });



  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6 dashboard-card">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome, Admin!
        </h1>
        <p className="text-gray-600">
          This is your dashboard. You can manage products and settings from here.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((item , index) => (
          <div 
            key={index}
            className="dashboard-card bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <div className="bg-indigo-600 rounded-full w-4 h-4" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Card Title {index + 1}</h3>
            <p className="text-sm text-gray-600">
              This is a sample card with some content.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;