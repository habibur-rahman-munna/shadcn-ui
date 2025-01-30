
const Sectionnine = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Want to book a call?</h2>
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 bg-gray-50 text-black text-xs font-bold rounded-full hover:bg-gray-100 border border-gray-300 dark:bg-black dark:text-white dark:border-gray-800">Write & DM on<a href="https://x.com/achromaticlabs"target="_blank"rel="noopener noreferrer"className="text-black hover:bg-gray-100 px-2 py-1 dark:text-white dark:hover:bg-black dark:hover:text-white rounded-full"aria-label="Visit X profile">
              <i className="fab fa-x-twitter"></i>
            </a></button>
          <button className="px-4 py-2 bg-gray-50 text-black text-xs font-bold rounded-full hover:bg-gray-100 border border-gray-300 dark:bg-black dark:text-white dark:border-gray-800">Use contact form</button>
        </div>
      </div>
    </section>
  );
};

export default Sectionnine;