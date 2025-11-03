import React from "react";
import { Link } from "react-router-dom";

const dishes = [
  {
    id: 1,
    name: "Grilled Chicken Special",
    price: "Ksh 850",
    image:
      "https://plus.unsplash.com/premium_photo-1754254880658-f8de5e1c380c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    id: 2,
    name: "Seafood Platter",
    price: "Ksh 1200",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Beef Steak Deluxe",
    price: "Ksh 950",
    image:
      "https://plus.unsplash.com/premium_photo-1695658519636-5fc41203df9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 4,
    name: "Vegetarian Delight",
    price: "Ksh 700",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
  },
];

const MenuPreview = () => {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
          Our Popular Dishes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-green-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  {dish.name}
                </h3>
                <p className="text-gray-600 font-medium mb-3">{dish.price}</p>
                <Link
              to="/signup"
              className="w-full inline-block bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition"
                >
                Order Now
               </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
