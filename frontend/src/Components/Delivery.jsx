import React from "react";
import deliveryImg from "../assets/delivery.png"; // You can replace this with your image

const Delivery = () => {
  return (
    <section id="delivery" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={deliveryImg}
            alt="Food Delivery"
            className="w-80 md:w-[420px] rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Fast & Fresh Food Delivery 🚚
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Amaara Cuisine, we value your time and comfort. Our delivery team
            ensures that every meal arrives hot, fresh, and right to your
            doorstep — wherever you are.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We partner with trusted local couriers for safe, on-time delivery.
            Whether it's lunch, dinner, or a special event, Amaara brings the
            flavor to you!
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-200">
            Track Your Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
