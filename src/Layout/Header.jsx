import AllDemos from "@/Components/Header/AllDemos"
import DarkModeToggle from "@/Components/Header/DarkModeToggle "
import Navmenu from "@/Components/Header/Navmenu"
import SearchBar from "@/Components/Header/SearchBar"
import { Button } from "@/Components/ui/button"

const Header = () => {
  return (
    <header className="sticky top-0 bg-white dark:bg-black text-black py-3 border-b border-gray-200 dark:border-b dark:border-gray-800">
        <div className="container mx-auto flex justify-between items-center px-4">
        <div className="col-md-6 flex space-x-10">
        <div className="flex justify-center items-center space-x-2">
            <img src="../../public/sitelogo.png" className="h-30 flex items-center justify-center w-6 h-6n" alt="sitelogo" />
            <a href="/" className="font-bold dark:text-white">Achromatic</a>
        </div>
        <div className="navmenu">
        <Navmenu/>
        </div>
        </div>
        <div className="col-md-6">
        <div className="flex justify-center items-center space-x-2">
            <SearchBar/>
            <Button className="bg-white text-black text-xs py-2 px-5 capitalize hover:bg-gray-100 rounded-full">Contact</Button>
            <AllDemos/>
            <DarkModeToggle/>

        </div>
        </div>
        </div>
    </header>
  )
}

export default Header