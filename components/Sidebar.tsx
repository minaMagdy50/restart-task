"use client";
import { SidebarProps } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiShoppingBag, FiSettings, FiLogOut } from 'react-icons/fi';



const Sidebar = ({ logout, mobile = false }: SidebarProps) => {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/dashboard', icon: FiHome, label: 'Dashboard' },
    { href: '/dashboard/products', icon: FiShoppingBag, label: 'Products' },
    { href: '/dashboard/settings', icon: FiSettings, label: 'Settings' },
  ];

  if (mobile) {
    return (
      <div className="flex w-full">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center p-3 flex-1 ${
              pathname === item.href
                ? 'text-indigo-600 border-t-2 border-indigo-600'
                : 'text-gray-600 hover:text-indigo-500'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
        <button
          onClick={logout}
          className="flex flex-col items-center justify-center p-3 flex-1 text-gray-600 hover:text-red-500"
        >
          <FiLogOut className="w-5 h-5" />
          <span className="text-xs mt-1">Logout</span>
        </button>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-indigo-700">Admin Panel</h2>
      </div>
      
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="mr-3 w-5 h-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
        >
          <FiLogOut className="mr-2 w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;