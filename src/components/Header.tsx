import { User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

interface HeaderProps {
  userInitial: string;
}

export function Header({ userInitial }: HeaderProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="https://www.extioninfotech.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Logo />
        </a>

        <h1 className="text-2xl font-bold text-gray-800">
          Extion Examination Portal
        </h1>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-DEFAULT text-white flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}