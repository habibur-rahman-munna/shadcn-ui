import { Link } from "react-router-dom"
const Navmenu = () => {
  return (
    <nav>
        <ul className="flex space-x-4 justify-center items-center">
            <li><Link to="" className="text-gray-500 hover:text-black font-bold text-sm capitalize dark:hover:text-white">Starter Kits
            </Link></li>
            <li><Link to="" className="text-gray-500 hover:text-black font-bold text-sm capitalize dark:hover:text-white">Components</Link></li>
            <li><Link to="" className="text-gray-500 hover:text-black font-bold text-sm capitalize dark:hover:text-white">Pricing
            </Link></li>
            <li><Link to="" className="text-gray-500 hover:text-black font-bold text-sm capitalize dark:hover:text-white">Roadmap</Link></li>
            <li><Link to="" className="text-gray-500 hover:text-black font-bold text-sm capitalize dark:hover:text-white">
            Blog</Link></li>
        </ul>
        
    </nav>
  )
}

export default Navmenu