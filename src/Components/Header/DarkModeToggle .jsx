import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      className="flex items-center rounded-full p-2 hover:bg-gray-100 dark:hover:bg-black dark:text-white"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <MoonIcon className="w-5 h-5 text-gray-700 dark:text-white" />
      ) : (
        <SunIcon className="w-5 h-5 text-gray-700 dark:text-white" />
      )}
    </button>
  );
}

export default DarkModeToggle;
