import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Utensils, ShoppingCart, CreditCard, Settings } from "lucide-react";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded hover:text-green-200 transition ${
      isActive ? "bg-green-600 text-white" : "text-white"
    }`;

  return (
    <div className="w-64 bg-green-700 text-white flex flex-col p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10">Amaara Restaurant</h1>

      <nav className="flex flex-col gap-2">
        <NavLink to="/dashboard" className={linkClass}>
          <Home size={20} /> Dashboard
        </NavLink>

        <NavLink to="/dashboard/menu" className={linkClass}>
          <Utensils size={20} /> Menu
        </NavLink>

        <NavLink to="/dashboard/orders" className={linkClass}>
          <ShoppingCart size={20} /> Orders
        </NavLink>

        <NavLink to="/dashboard/payment" className={linkClass}>
          <CreditCard size={20} /> Payments
        </NavLink>

        <NavLink to="/dashboard/profile" className={linkClass}>
          <Settings size={20} /> Settings
        </NavLink>
      </nav>

      <div className="mt-auto pt-10 border-t border-green-500">
        <p className="text-sm text-green-100">© 2025 Amaara Restaurant</p>
      </div>
    </div>
  );
};

export default Sidebar;
