import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Counters from "../Components/Counters";
import Menu from "../Components/Menu";
import Testimonials from "../Components/Testimonials";
import Delivery from "../Components/Delivery";
import Contact from "../Components/Contact";


const Home = () => {
  return (
    <div className="font-poppins bg-white text-gray-900 scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <About />
      </section>

      {/* Counters */}
      <section id="stats" className="py-16 bg-green-50">
        <Counters />
      </section>

      {/* Menu */}
      <section id="menu" className="py-16">
        <Menu />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-green-50">
        <Testimonials />
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-16">
        <Delivery />
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-green-50">
        <Contact />
      </section>

      
     
    </div>
  );
};

export default Home;
