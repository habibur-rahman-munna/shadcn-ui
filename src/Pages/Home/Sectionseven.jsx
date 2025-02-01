import { Button } from "@/Components/ui/button";

const Sectionseven = () => {
  return (
    <section className="py-20 bg-white dark:bg-black font-myFont">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 justify-center items-center">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4">Pay once, own it forever</h2>
          <p className="text-gray-500 font-medium mb-6">
            Upon purchase, you can use the starter kit for personal and commercial projects 
            with no restrictions on the number of developers or projects.  
            <a href="#" className="text-gray-500 hover:underline"> Click here to download license.</a>
          </p>
          <p className="text-gray-500 font-medium mb-6">
            Achromatic is 2-4 times more affordable than comparable Next.js starter kit alternatives. 
            There is no catch, we are just cheaper and not overpriced.
          </p>
        </div>

        <div className="w-full md:w-1/3 bg-white dark:bg-black dark:border border-gray-900 rounded-lg shadow-md p-6 flex flex-row justify-between items-start">
          <div className="flex flex-col items-start">
            <div className="mb-6 pr-8">
              <div className="flex justify-between items-end space-x-2">
                <span className="text-4xl font-bold">$180</span>
                <span className="text-base text-gray-400 font-medium"> USD</span>
              </div>
              <div className="text-sm text-gray-400 font-medium pt-2 items-center ">Lifetime updates</div>
              <Button className="mt-4 w-full py-2 px-4 text-sm rounded-full dark:bg-white dark:text-black dark:border border-gray-300">Purchase</Button>
            </div>
          </div>

          <ul className="list-disc pl-20 space-y-2 text-gray-700 dark:text-white border-l-2">
            <li>Next 15 & React 19</li>
            <li>Auth, billing emails, members, invites, organizations, onboarding, profile, dashboard, API keys, webhooks, and more</li>
            <li>Unlimited developers/projects</li>
            <li>Personal and commercial usage</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sectionseven;
