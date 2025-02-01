const HeroSection = () => {
    return (
      <section className="bg-white dark:bg-black py-24 text-center font-myFont">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <h1 className="bg-gray-100 text-sm font-medium w-52 rounded-full p-1 mb-6 dark:bg-gray-900 dark:text-white">Next 15 SaaS Starter Kits</h1>
          <h1 className="text-7xl font-bold mb-4 text-black dark:text-white">Building your SaaS</h1>
          <h1 className="text-7xl font-bold mb-4 text-black dark:text-white">just got unfairly easy</h1>
          <p className="text-lg mt-4 max-w-2xl text-gray-700 dark:text-gray-300">
            Why spend valuable time tackling auth, billing, emails, organizations, 
            invites and onboarding? Focus on your business and skip the noise.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full hover:bg-gray-800 font-medium">Open Demo</button>
            <button className="bg-white border border-gray-200 text-black px-6 py-3 rounded-full dark:bg-black dark:text-white dark:border dark:border-gray-200">Read Docs</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  