import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left image section */}
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=f9f8b76a5b2a50b"
            alt="Amaara Restaurant interior"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right text section */}
        <div className="lg:w-1/2 space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            About Amaara Restaurant
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Amaara Restaurant is a modern dining destination known for its
            authentic flavors, excellent hospitality, and beautiful ambiance. 
            Founded in Garissa, we’ve expanded our culinary experience to 
            <span className="font-semibold text-green-600"> Nairobi </span> 
            and 
            <span className="font-semibold text-green-600"> Mombasa</span>, 
            serving the best local and international dishes.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you’re craving fresh seafood, sizzling grilled dishes, or
            tasty desserts, Amaara delivers a delightful dining experience with 
            a touch of class and tradition.
          </p>

          <div className="pt-4">
            <a
              href="#menu"
              className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
