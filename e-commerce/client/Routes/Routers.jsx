import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AddYourProduct from "../src/components/add-product-form/AddYourProduct";

import AllProducts from "../src/components/all-products/AllProducts";
import Login from "../src/components/authentication/Login";
import Signup from "../src/components/authentication/Signup";

import Cart from "../src/components/cart/Cart";
import Contact from "../src/components/contact-page/Contact";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import Home from "../src/components/home-page/Home";
import ProductOrder from "../src/components/product/ProductOrder";
import SideDesign from "../src/components/UI/SideDesign";
import UserProducts from "../src/components/user-products/UserProducts";
import { contextManage } from "../src/context/ManageState";

function Routers() {
  const location = useLocation();
  const ctx = useContext(contextManage);
  let routes;
  const notShowmForThisRoutes = [
    "/login",
    "/signup",
    `/${ctx.userData.userName}/add-products`,
  ];
  console.log(!!ctx.token);

  if (ctx.token) {
    routes = (
      <>
        <Route
          path={`/${ctx.userData.userName}/add-products`}
          element={<AddYourProduct />}
        />
        <Route
          path={`/${ctx.userData.userName}-products`}
          element={<UserProducts />}
        />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </>
    );
  }

  return (
    <>
      {/* {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== `/${ctx.userData.userName}/add-products` && <Header />} */}
      {!notShowmForThisRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Cart />} />
        <Route path="/product/:pid" element={<ProductOrder />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        {routes}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!notShowmForThisRoutes.includes(location.pathname) && <Footer />}
      {!notShowmForThisRoutes.includes(location.pathname) && <SideDesign />}
    </>
  );
}

export default Routers;
