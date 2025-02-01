import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import img1 from "../../assets/Masterpage.png";
import img2 from "../../assets/Detail-page.jpg";
import img3 from "../../assets/Settings.jpg";
import img4 from "../../assets/Dashboard.jpg";
import img5 from "../../assets/Login.jpg";

const SectionTwo = () => {
  return (
    <div className="bg-white dark:bg-black flex items-center justify-center pt-0 pb-20 font-myFont">
      <Tabs defaultValue="Masterpage" className="w-full max-w-7xl">
        <TabsList className="flex justify-center items-center gap-4 mb-6">
          <TabsTrigger value="Masterpage" className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:border-gray-400 dark:hover:border-white transition-all"
            data-state-active="border-b-2 border-blue-500 text-blue-600 dark:text-blue-400">Master page
          </TabsTrigger>
          <TabsTrigger value="Detail-page"className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:border-gray-400 dark:hover:border-white transition-all"
            data-state-active="border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"> Detail page
          </TabsTrigger>
          <TabsTrigger value="Settings"className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:border-gray-400 dark:hover:border-white transition-all"
            data-state-active="border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" > Settings
          </TabsTrigger>
          <TabsTrigger value="Dashboard" className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:border-gray-400 dark:hover:border-white transition-all" data-state-active="border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
          > Dashboard
          </TabsTrigger>
          <TabsTrigger value="Login" className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent
          hover:border-gray-400 dark:hover:border-white transition-all"data-state-active="border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"> Login
          </TabsTrigger>
        </TabsList>


        <TabsContent value="Masterpage">
          <Card className="shadow-lg rounded-lg">
            <CardContent className="flex justify-center items-center h-auto">
              <img src={img1}alt="Master page"className="object-cover max-w-full max-h-full rounded-lg"/>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="Detail-page">
          <Card className="shadow-lg rounded-lg">
            <CardContent className="flex justify-center items-center h-auto">
              <img src={img2} alt="Detail page" className="object-cover max-w-full max-h-full rounded-lg"/>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="Settings">
          <Card className="shadow-lg rounded-lg">
            <CardContent className="flex justify-center items-center h-auto">
              <img src={img3} alt="Settings"className="object-cover max-w-full max-h-full rounded-lg" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="Dashboard">
          <Card className="shadow-lg rounded-lg">
            <CardContent className="flex justify-center items-center h-auto">
              <img src={img4} alt="Dashboard" className="object-cover max-w-full max-h-full rounded-lg"/>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="Login">
          <Card className="shadow-lg rounded-lg">
            <CardContent className="flex justify-center items-center h-auto">
              <img src={img5} alt="Login" className="object-cover max-w-full max-h-full rounded-lg"/>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SectionTwo;
