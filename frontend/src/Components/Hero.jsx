import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1210"
          alt="Restaurant interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Green overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-700/50 via-green-600/30 to-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left text */}
        <div className="text-white max-w-2xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
            Welcome to <span className="text-white">Amaara Restaurant</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Where Flavor Meets Freshness — serving Garissa, Nairobi &amp; Mombasa.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/menu"
              className="inline-block px-6 py-3 rounded-lg bg-white text-green-700 font-semibold shadow hover:scale-105 transition-transform"
            >
              View Menu
            </Link>
            <a
              href="#delivery"
              className="inline-block px-6 py-3 rounded-lg bg-white text-green-700 font-semibold shadow hover:scale-105 transition-transform"
            >
              Order Now
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            <div className="bg-white/10 rounded-full px-3 py-2">Open: 9am - 10pm</div>
            <div className="bg-white/10 rounded-full px-3 py-2">
              Free delivery over KSh 1,200
            </div>
          </div>
        </div>

        {/* Right-side special card */}
        <div className="hidden lg:block w-[360px] bg-white rounded-2xl shadow-lg p-5 text-gray-800">
          <h3 className="text-lg font-semibold mb-3 text-green-700">Today's Special</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=200&auto=format&fit=crop"
                alt="Grilled Tilapia"
                className="w-14 h-14 object-cover rounded-md"
              />
              <div>
                <div className="font-medium">Grilled Tilapia</div>
                <div className="text-sm text-green-600 font-semibold">KSh 750</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1604908177522-13ca457f9b3e?q=80&w=200&auto=format&fit=crop"
                alt="Amaara Burger"
                className="w-14 h-14 object-cover rounded-md"
              />
              <div>
                <div className="font-medium">Amaara Burger</div>
                <div className="text-sm text-green-600 font-semibold">KSh 550</div>
              </div>
            </div>

            <Link
              to="/menu"
              className="block text-center mt-2 text-green-600 font-semibold hover:underline"
            >
              Explore full menu →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
