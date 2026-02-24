import { Link, useLocation } from 'react-router';
import { Search, Github, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/Button';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="h-16 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-lg font-semibold text-black dark:text-white">
            NeedUI
          </Link>
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm ${location.pathname === '/' ? 'text-black dark:text-white' : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'} transition-colors`}
            >
              Docs
            </Link>
            <Link 
              to="/components" 
              className={`text-sm ${location.pathname.startsWith('/components') ? 'text-black dark:text-white' : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'} transition-colors`}
            >
              Components
            </Link>
            <Link 
              to="/playground" 
              className={`text-sm ${location.pathname === '/playground' ? 'text-black dark:text-white' : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'} transition-colors`}
            >
              Playground
            </Link>
            <Link 
              to="/community" 
              className={`text-sm ${location.pathname.startsWith('/community') ? 'text-black dark:text-white' : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'} transition-colors`}
            >
              Community
            </Link>
            <Link 
              to="/studio" 
              className={`text-sm ${location.pathname.startsWith('/studio') ? 'text-black dark:text-white' : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'} transition-colors`}
            >
              Studio
            </Link>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search components and docs..."
              className="w-full h-9 pl-10 pr-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-sm text-black dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500/20 dark:focus:ring-blue-500/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
            ) : (
              <Sun className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
            )}
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
          </a>
          <Link to="/studio/order">
            <Button variant="default" className="text-sm">
              Order UI/UX
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}