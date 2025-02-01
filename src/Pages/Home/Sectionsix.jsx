import { Button } from "@/Components/ui/button";
import img from "../../assets/Annotation 2025-01-30 150654.png"
const Sectionsix = () => {
  return (
    <div className="bg-white dark:bg-black font-myFont">
      <div className="container mx-auto py-20 flex flex-col md:flex-row gap-12 justify-center items-center">
        <div className="w-full md:w-1/2">
        <img className="border-2 border-gray-300 rounded" src={img} alt="image" />
        </div>
      
      <div className="w-full md:w-1/3"> 
        <h2 className="text-3xl font-bold mb-4">Less boilerplate build with speed</h2>
        <p className="text-gray-400 dark:text-gray-300 mb-6 font-medium">Achromatic ships with many foundational and advanced components that cover a 
            wide range of use cases. Carefully crafted to reduce boilerplate code without sacrificing flexibility and responsivedesign.</p>
        <p className="text-gray-400 dark:text-gray-300 mb-6 font-medium">Open the demo with your mobile phone or dev console. We understand how 
            challenging responsive design and UI/UX can be for developers,so we made it easy.</p>
            <Button className ="bg-gray-100 text-gray-500 hover:bg-gray-100 hover:text-black capitalize rounded-full border border-gray-200
             dark:bg-black dark:text-gray-400 dark:border-2 dark:border-gray-700 dark:hover:text-white">open demo</Button>
      </div>
    </div>
    </div>
  );
};

export default Sectionsix;
