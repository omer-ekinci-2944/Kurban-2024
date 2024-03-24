import { Route, Routes } from "react-router-dom";

import Coming from "./pages/Coming";

import Home from "./pages/Home";
import About from "./pages/About";
import Buy from "./pages/Buy";
import Query from "./pages/Query";
import Contact from "./pages/Contact";
import Follow from "./pages/Follow";

import AdminLayout from "./pages/AdminLayout";
import Admin from "./pages/Admin";

import AuthLayout from "./pages/AuthLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

import PageNotFound from "./pages/PageNotFound";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Coming />} />

      <Route path="/home" element={<Home />} />
      <Route path="/hakkimizda" element={<About />} />
      <Route path="/hisseal" element={<Buy />} />
      <Route path="/sorgula" element={<Query />} />
      <Route path="/iletisim" element={<Contact />} />
      <Route path="/follow" element={<Follow />} />

      <Route path="/mlk" element={<AdminLayout />}>
        <Route path="/mlk" element={<Admin />} />
      </Route>

      <Route path="/mlk" element={<AuthLayout />}>
        <Route path="/mlk/sign-in" element={<SignIn />} />
        <Route path="/mlk/sign-up" element={<SignUp />} />
        <Route path="/mlk/forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default SiteRoutes;
