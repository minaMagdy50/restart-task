import { FiMenu } from 'react-icons/fi';

interface HeaderProps {
  logout: () => void;
}

const Header = ({ logout }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center">
          <button className="md:hidden mr-4 p-2 rounded-md text-gray-600 hover:bg-gray-100">
            <FiMenu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
            <span className="ml-2 text-sm font-medium">Admin</span>
          </div>
          <button
            onClick={logout}
            className="px-3 py-1 text-sm text-red-600 hover:text-red-800 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;