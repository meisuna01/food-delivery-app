import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./Context/CartContext";

const OrdersPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // ✅ Calculate total order amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">My Orders</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">No items in your order yet.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                {/* ✅ Food Image */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                )}

                {/* ✅ Food Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-green-700">{item.name}</h3>
                  <p className="text-gray-700">
                    Ksh {item.price} × {item.quantity}
                  </p>
                </div>

                {/* ✅ Item Total */}
                <p className="font-bold text-green-800">
                  Ksh {item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          {/* ✅ Order Summary and Navigation */}
          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-green-700">
              Total: Ksh {totalAmount}
            </h3>

            <button
              onClick={() =>
                navigate("/dashboard/payment", { state: { total: totalAmount } })
              }
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrdersPage;
