import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import FoodCard from "./FoodCard";
import { Outlet, useLocation } from "react-router-dom";
import { useCart } from "./Context/CartContext";

const Dashboard = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();

  const foods = [
    { id: 1, name: "Chicken Biriyani", price: 500, category: "Main Dish", image: "https://media.istockphoto.com/id/1058029096/photo/chicken-biryani.webp?a=1&b=1&s=612x612&w=0&k=20&c=jjPwycS_qHz52KYp4sNBXRy9gl6k4L8KXsN8b9En9fs=" },
    { id: 2, name: "Grilled Fish", price: 650, category: "Main Dish", image: "https://images.unsplash.com/photo-1673436977947-0787164a9abc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    { id: 3, name: "Beef Steak", price: 750, category: "Main Dish", image: "https://images.unsplash.com/photo-1633436375795-12b3b339712f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" },
    { id: 4, name: "Beef Burger", price: 350, category: "Fast Food", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1115" },
    { id: 5, name: "French Fries", price: 200, category: "Fast Food", image: "https://images.unsplash.com/photo-1598679253544-2c97992403ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974" },
    { id: 6, name: "Hot Dog", price: 250, category: "Fast Food", image: "https://images.unsplash.com/photo-1638368593249-7cadb261e8b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=691" },
    { id: 7, name: "Green Salad", price: 250, category: "Healthy", image: "https://media.istockphoto.com/id/2178350412/photo/fresh-garden-salad-with-mixed-greens-and-tomatoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=ntLZ2j5ZZYiRJFgVFePJ_ddwtGYMdMu7O41gpE7YCqQ=" },
    { id: 8, name: "Avocado Toast", price: 300, category: "Healthy", image: "https://images.unsplash.com/photo-1628556820645-63ba5f90e6a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXZvY2FkbyUyMFRvYXN0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" },
    { id: 9, name: "Fruit Bowl", price: 280, category: "Healthy", image: "https://media.istockphoto.com/id/2158539706/photo/mixed-berries-flat-lay-with-peaches-and-kiwis-food-photography.webp?a=1&b=1&s=612x612&w=0&k=20&c=hoIpUpFVoC2_aI2FKja-GdqlbF4SWIQnXZQrNp94E3Y=" },
    { id: 10, name: "Chocolate Cake", price: 450, category: "Dessert", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hvY29sYXRlJTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" },
    { id: 11, name: "Ice Cream Sundae", price: 300, category: "Dessert", image: "https://images.unsplash.com/photo-1447195047884-0f014b0d9288?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SWNlJTIwQ3JlYW0lMjBTdW5kYWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" },
    { id: 12, name: "Apple Pie", price: 400, category: "Dessert", image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QXBwbGUlMjBQaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" },
    { id: 13, name: "Coffee Latte", price: 180, category: "Drinks", image: "https://images.unsplash.com/photo-1611564494260-6f21b80af7ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29mZmVlJTIwTGF0dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" },
    { id: 14, name: "Mango Smoothie", price: 300, category: "Drinks", image: "https://images.unsplash.com/photo-1623400518626-6ea9ab64c5ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWFuZ28lMjBTbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" },
    { id: 15, name: "Fresh Juice", price: 200, category: "Drinks", image: "https://images.unsplash.com/photo-1626201339405-e3912075c1d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RnJlc2glMjBKdWljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" },
  ];

  const categories = ["All", "Main Dish", "Fast Food", "Healthy", "Dessert", "Drinks"];

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const showMenuOverview =
    location.pathname === "/dashboard" || location.pathname === "/dashboard/menu";

  return (
    <div className="flex h-screen bg-green-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <DashboardNavbar search={search} setSearch={setSearch} />

        <div className="p-6 overflow-y-auto">
          {showMenuOverview ? (
            <>
              <h2 className="text-2xl font-bold text-green-700 mb-4">Menu Overview</h2>

              <div className="flex flex-wrap gap-3 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                      selectedCategory === cat
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white text-green-600 border-green-600 hover:bg-green-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {filteredFoods.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredFoods.map((food) => (
                    <FoodCard key={food.id} food={food} onAddToCart={() => addToCart(food)} />
                  ))}
                </div>
              ) : (
                <p className="text-green-700 mt-10 text-center text-lg">
                  No foods found for this category.
                </p>
              )}
            </>
          ) : (
            <Outlet /> // Nested dashboard pages render here
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
