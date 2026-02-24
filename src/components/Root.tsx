import { Outlet } from 'react-router';
import { ThemeProvider } from '../contexts/ThemeContext';

export default function Root() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
