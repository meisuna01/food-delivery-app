import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Forgot Password
        </h1>

        <form className="space-y-4">
          <p className="text-gray-600 text-center mb-4">
            Enter your email address and we’ll send you a link to reset your password.
          </p>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
          >
            Send Reset Link
          </button>

          <p className="text-center text-gray-600 mt-4">
            Remember your password?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Back to Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
