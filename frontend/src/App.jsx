import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Layout and Main Website Pages
import LayOut from "./Components/LayOut/LayOut";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Delivery from "./Components/Delivery";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import SignUp from "./Components/SignUp";

// Dashboard and Related Pages
import Dashboard from "./Components/Dashboard";
import DashboardMenu from "./Components/MenuPage";
import OrdersPage from "./Components/OrdersPage";
import PaymentPage from "./Components/PaymentPage";
import ProfilePage from "./Components/ProfilePage";

// Context Provider
import { CartProvider } from "./Components/Context/CartContext";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* 🌍 Main Website Layout */}
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="contact" element={<Contact />} />

          {/* Auth Pages */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        {/* 📊 Dashboard Section (separate layout) */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Default dashboard page (optional redirect to /dashboard/menu) */}
          <Route index element={<Navigate to="/dashboard/menu" replace />} />
          <Route path="menu" element={<DashboardMenu />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </>
    )
  );

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
