
const SectionFive = () => {
  const technologies = [
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },
    { name: 'Next.js', icon: 'http://localhost:5173/src/assets/nextjs.png' },



  ];

  return (
    <section className="py-20 bg-white dark:bg-black font-myFont"> 
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Solid foundation</h2>
            <p className="text-gray-400 text-lg font-medium ">Achromatic uses top-tier libraries and tools to make<br></br> development easier and faster, including:</p>
            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
              <li className="font-bold text-lg text-black dark:text-white">Turborepo<span className="text-base text-gray-400 font-medium"> for best-in-class monorepo solution.</span></li>
              <li className="font-bold text-lg text-black dark:text-white">Turborepo<span className="text-base text-gray-400 font-medium"> for fast, modern web apps.</span></li>
              <li className="font-bold text-lg text-black dark:text-white">Shadcn/ui<span className="text-base text-gray-400 font-medium"> for sleek, customizable components.</span></li>
              <li className="font-bold text-lg text-black dark:text-white">React Hook Form<span className="text-base text-gray-400 font-medium"> for efficient, secure form handling.</span></li>
              <li className="font-bold text-lg text-black dark:text-white">React Table<span className="text-base text-gray-400 font-medium"> for powerful, flexible data grids.</span></li>
              <li className="font-bold text-lg text-black dark:text-white">Recharts<span className="text-base text-gray-400 font-medium"> for stunning, interactive visualizations.</span></li>
              <li className="font-bold text-lg text-black dark:text-white">Zod<span className="text-base text-gray-400 font-medium"> for robust, type-safe data validation.</span></li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 dark:bg-black dark:border dark:border-gray-700 rounded-lg shadow p-2 flex justify-center items-center"title={tech.name} >
                    <img src={tech.icon} alt={tech.name} className="h-12 w-auto" loading="lazy"/>
                    </div>
                ))}
                </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;