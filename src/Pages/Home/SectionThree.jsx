const SectionThree = () => {
  const features = [
    { title: 'Landing page, blog, and docs', hours: '40hs' },
    { title: 'Social logins & connected accounts', hours: '20hs' },
    { title: 'Email templates', hours: '15hs' },
    { title: 'Members & invites', hours: '10hs' },
    { title: 'Onboarding', hours: '6hs' },
    { title: 'Dashboard', hours: '5hs' },
    { title: 'Account settings', hours: '3hs' },
    { title: 'Signup user flow & caching', hours: '2hs' },
    { title: 'Credentials with all access', hours: '18hs' },
    { title: 'Multi-factor authentication', hours: '15hs' },
    { title: 'Organizations', hours: '13hs' },
    { title: 'Billing integration', hours: '8hs' },
    { title: 'Walking skeleton', hours: '6hs' },
    { title: 'Stripe checkout', hours: '5hs' },
    { title: 'Magic links & webhooks', hours: '3hs' },
  ];

  return (
    <section className="bg-white dark:bg-black py-20 font-myFont">
      <div className="container mx-auto px-44">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white capitalize">Building a web app takes time</h2>
        </div>

        <div className="flex flex-col lg:flex-row  items-center mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:w-[60%]">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-2 px-4 rounded-full flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{feature.hours}</p>
            </div>
            
            ))}
          </div>
            <div className="dark:bg-black rounded-lg lg:w-[40%]">
           <div className="text-center">
           <h2 className="text-4xl font-extrabold text-black dark:text-white">220+</h2>
            <p className="text-lg text-black dark:text-white mt-2">Hours saved</p>
            <p className="text-sm text-black dark:text-white">That's at least 27 work days.</p>
           </div>
          </div>
          </div>
        </div>
    </section>
  );
};

export default SectionThree;
