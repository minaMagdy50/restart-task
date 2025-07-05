"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const SettingsPage = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.settings-card',
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
      <div className="settings-card bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">
          Configure your account and application settings here.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((item , index) => (
          <div 
            key={index}
            className="settings-card bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Setting Category {index + 1}</h3>
                <p className="text-sm text-gray-600">Manage related settings</p>
              </div>
            </div>
            <p className="text-gray-700">
              This is a placeholder for setting configuration options.
              The actual implementation would go here.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SettingsPage;