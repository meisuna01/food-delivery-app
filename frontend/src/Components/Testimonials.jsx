import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Amina Noor",
    feedback:
      "Amaara Restaurant has the best meals I’ve ever tasted! The service is top-notch, and the atmosphere feels so welcoming.",
    image:
      "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    id: 2,
    name: "Hassan Mohamed",
    feedback:
      "Their food delivery is always on time and perfectly packed. Truly a five-star experience every time!",
    image:
      "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    id: 3,
    name: "Fatma Abdi",
    feedback:
      "From Garissa to Nairobi, Amaara never disappoints. The meals are flavorful and always fresh.",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-green-500 object-cover"
              />
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
              <h4 className="text-green-700 font-semibold">{t.name}</h4>

              <div className="flex justify-center mt-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
