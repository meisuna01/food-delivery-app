import React from "react";
import { Search, Bell } from "lucide-react";

const DashboardNavbar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4">
      <div className="flex items-center bg-green-100 rounded-lg px-3 py-1 w-full sm:w-1/2">
        <Search className="text-green-600 mr-2" size={20} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search food..."
          className="bg-transparent focus:outline-none text-green-800 w-full"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell className="text-green-600 cursor-pointer" size={22} />
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40?img=8"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-green-500"
          />
          <span className="text-green-700 font-medium">Manager</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
