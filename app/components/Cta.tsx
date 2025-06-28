import React from "react";

const Cta = () => {
  return (
    <section
      className="py-20 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900
            bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Learning?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join Nexdu today and experience the future of online education. Start
          your journey with our comprehensive LMS platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Get Started Free
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
