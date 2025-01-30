import { useState } from "react";

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [setPopupMessage] = useState("");

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setPopupMessage(""); // Reset popup message when reopening
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    setPopupMessage("Popup closed!"); // Show popup message when closed
  };

  return (
    <div className="relative">
      <button onClick={handleButtonClick}className="bg-gray-100 dark:bg-gray-900 dark:hover:text-white text-gray-400 hover:text-black py-2 px-4 text-sm rounded-full inline-flex items-center">{isOpen ? "Close" : "Search documentation..."}</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative p-6 bg-white rounded shadow-md w-96">
            <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"onClick={handleCloseClick}>&times;</button>
            <h2 className="text-lg font-semibold mb-4">Links</h2>
            <ul>
              <li><a href="#" className="block py-2 hover:bg-gray-100 rounded">Demo</a></li>
              <li><a href="#" className="block py-2 hover:bg-gray-100 rounded">Docs</a></li>
              <li><a href="#" className="block py-2 hover:bg-gray-100 rounded">Pricing</a></li>
              <li><a href="#" className="block py-2 hover:bg-gray-100 rounded">Roadmap</a></li>
            </ul>
            <h2 className="text-lg font-semibold mt-6 mb-4">Getting Started</h2>
            <ul>
              <li><a href="#" className="block py-2 hover:bg-gray-100 rounded">Introduction</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
