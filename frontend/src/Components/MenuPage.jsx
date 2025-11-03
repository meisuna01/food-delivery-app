import React from "react";
import FoodCard from "./FoodCard";
import { useCart } from "./Context/CartContext";


const MenuPage = () => {
  const { addToCart } = useCart();

  const foods = [
    { id: 1, name: "Chicken Biryani", category: "Main", price: 400, image: "https://i.ibb.co/0rJmYFZ/biryani.jpg" },
    { id: 2, name: "Beef Steak", category: "Main", price: 600, image: "https://i.ibb.co/NLKNPzs/steak.jpg" },
    { id: 3, name: "Pasta Alfredo", category: "Main", price: 350, image: "https://i.ibb.co/z4qR2Dr/pasta.jpg" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} onAddToCart={() => addToCart(food)} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
