import DarkModeToggle from "@/Components/Header/DarkModeToggle ";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-t dark:border-gray-800 text-gray-700 py-20">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-white">Copyright © 2024 - 2025 Achromatic. All rights reserved.</p>
        </div>

        <div className="flex items-center space-x-4">
          <span className="font-medium capitalize text-gray-500 dark:text-white">Status:</span>
          <span className="font-medium capitalize text-gray-500 dark:text-white">
            All systems normal
          </span>

          <div className="flex items-center space-x-2">
            <a href="https://github.com"target="_blank"rel="noopener noreferrer"className="text-black hover:bg-gray-100 px-2 py-1 dark:text-white dark:hover:bg-black dark:hover:text-white rounded-full"aria-label="Visit GitHub profile">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/achromaticlabs"target="_blank"rel="noopener noreferrer"className="text-black hover:bg-gray-100 px-2 py-1 dark:text-white dark:hover:bg-black dark:hover:text-white rounded-full"aria-label="Visit X profile">
              <i className="fab fa-x-twitter"></i>
            </a>
            <DarkModeToggle className="text-black hover:bg-gray-100 px-2 py-1 dark:text-white dark:hover:bg-black dark:hover:text-white rounded-full"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
