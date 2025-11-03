import React, { useEffect, useState } from "react";
import { FaUsers, FaUtensils, FaMapMarkerAlt, FaAward } from "react-icons/fa";

const CounterCard = ({ icon: Icon, label, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = Math.floor(totalDuration / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="bg-green-100 p-4 rounded-full mb-4">
        <Icon className="text-green-600 text-4xl" />
      </div>
      <h3 className="text-3xl font-bold text-green-700">{count}+</h3>
      <p className="text-gray-600 font-medium mt-1">{label}</p>
    </div>
  );
};

const Counters = () => {
  return (
    <section id="stats" className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <CounterCard icon={FaUsers} label="Happy Customers" target={300} />
          <CounterCard icon={FaUtensils} label="Delicious Dishes" target={50} />
          <CounterCard icon={FaMapMarkerAlt} label="Branches in Kenya" target={3} />
          <CounterCard icon={FaAward} label="Years of Excellence" target={10} />
        </div>
      </div>
    </section>
  );
};

export default Counters;
