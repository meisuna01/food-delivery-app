import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./Context/CartContext";

const FoodCard = ({ food }) => {
  const { cartItems, addToCart } = useCart(); // ✅ use correct name

  const existingItem = cartItems.find((item) => item.id === food.id);

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
      <img src={food.image} alt={food.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-700">{food.name}</h3>
        <p className="text-sm text-green-500">{food.category}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-green-700 font-bold">Ksh {food.price}</span>
          <button
            onClick={() => addToCart(food)}
            className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 relative"
          >
            <ShoppingCart size={18} /> Add
            {existingItem && existingItem.quantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {existingItem.quantity}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
