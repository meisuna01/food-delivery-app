import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "./Context/CartContext";

const PaymentPage = () => {
  const { cartItems, clearCart } = useCart();
  const location = useLocation();

  // ✅ Calculate total either from passed state or current cart
  const totalFromState = location.state?.total;
  const total =
    totalFromState ||
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // ✅ Form State for User Details
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "mpesa",
  });

  // ✅ Handle Form Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("⚠️ Please fill in all your details before confirming payment.");
      return;
    }

    alert(
      `✅ Payment Successful!\n\nName: ${formData.name}\nEmail: ${formData.email}\nAmount: Ksh ${total}`
    );

    clearCart();
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod: "mpesa",
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
        Payment Summary
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">
          Your cart is empty. Add something from the menu.
        </p>
      ) : (
        <form onSubmit={handlePayment} className="space-y-6">
          {/* ✅ Order Items Summary */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Your Order</h3>
            <ul className="space-y-3 mb-4 border rounded-lg p-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b border-gray-100 pb-2"
                >
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity} × Ksh {item.price}
                    </p>
                  </div>
                  <span className="text-green-700 font-semibold">
                    Ksh {item.price * item.quantity}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between text-lg font-bold text-green-700">
              <span>Total:</span>
              <span>Ksh {total}</span>
            </div>
          </div>

          {/* ✅ User Details Form */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Customer Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* ✅ Payment Method */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Payment Method</h3>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mpesa"
                  checked={formData.paymentMethod === "mpesa"}
                  onChange={handleChange}
                />
                <span>M-Pesa</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === "card"}
                  onChange={handleChange}
                />
                <span>Credit/Debit Card</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === "cash"}
                  onChange={handleChange}
                />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>

          {/* ✅ Confirm Payment Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Confirm Payment
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PaymentPage;
