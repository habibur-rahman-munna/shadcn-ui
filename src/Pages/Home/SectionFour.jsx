import { Button } from "@/Components/ui/button";
import img from "../../assets/justin-blake.png";
import { BackspaceIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const SectionFour = () => {
  const [showActions, setShowActions] = useState(null); 
  const contacts = [
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Adobe", email: "info@adobe.com" },
  ];

  return (
    <div className="bg-white dark:bg-black">
      <div className="container mx-auto flex flex-col md:flex-row p-8 gap-8">
        <div className="w-full md:w-1/3">
          <div>
            <div className="flex items-center">
              <img src={img}alt="Justin Blake"className="h-10 w-10 mr-2 rounded-full"/>
              <span className="font-medium">Justin Blake</span>
            </div>
            <div className="relative mt-8 w-72">
              <input type="text"placeholder="Search"className="w-full font-medium border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 dark:bg-gray-900 dark:text-white"/>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <BackspaceIcon className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/3 h-32 bg-white dark:bg-black rounded-lg shadow p-6">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left border-b">
                <th><input type="checkbox" /></th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index} className={`hover:bg-gray-100 dark:hover:bg-black ${showActions === index ? "bg-gray-200 dark:bg-black" : ""}`}
                onMouseEnter={() => setShowActions(index)}
                onMouseLeave={() => setShowActions(null)}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full md:w-1/4 bg-white dark:bg-black rounded-lg shadow p-10">
          <h2 className="text-sm font-bold mb-4"><span className="bg-gray-100 dark:bg-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 text-sm">1</span>
           Personal Information
          </h2>
          <label htmlFor="name" className="block mb-2 text-gray-400 dark:text-gray-300 text-sm font-medium">Name</label>
          <input type="text"className="w-full font-medium border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 dark:bg-gray-900 dark:text-white"/>
          <Button className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 hover:bg-gray-900 dark:hover:bg-gray-200 
          w-full rounded">Next
          </Button>
          <p className="mt-8 text-black dark:text-white font-bold text-sm">
            <span className="bg-gray-100 dark:bg-gray-800 dark:text-white py-2 px-4 rounded-full mr-2 text-sm">2</span>Account</p>
      </div>

      </div>
    </div>
  );
};

export default SectionFour;
