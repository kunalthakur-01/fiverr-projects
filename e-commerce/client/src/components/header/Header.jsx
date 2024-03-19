import React, { useState } from "react";
import Button from "../UI/Button";

import "./Header.css";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { contextManage } from "../../context/ManageState";
import AppLogo from "../UI/AppLogo";

const Header = () => {
  const ctx = useContext(contextManage);
  const [ isToggle, setIsToggle ] = useState(false);

  const logoutBtnHandler = () => {
    ctx.logout();
  };

  const renderBtn = ctx.token ? (
    <>
      <span className="user-name" onClick={() => setIsToggle(!isToggle)}>
        <i>Welcome, {ctx.userData.userName}</i>
        <div className={`${isToggle ? 'showOptions' : ''} userAccountMenu`}>
          <div className="userDetail">
            <span>
              <FaUserAlt />
            </span>
            <h4>
              Signed in as <br /> <p>{ctx.userData.userName} </p>
            </h4>
          </div>
          <hr />
          <ul className="userOptions">
            <li>
              <Link to={"/"}>Your Profile</Link>
            </li>
            <li>
              <Link to={`/${ctx.userData.userName}-products`}>Your Products</Link>
            </li>
            <li>
              <Link to={"/products"}>All Products</Link>
            </li>
            <li>
              <Link to={"/"}>Your Cart</Link>
            </li>
            <li>
              <Link to={`/${ctx.userData.userName}/add-products`}>Add your product</Link>
            </li>
            {/* <li>
              <Link to={"/"}>Settings</Link>
            </li> */}
          </ul>
        </div>
      </span>
      <Button onClick={logoutBtnHandler} className="logout-btn">
        Logout
      </Button>
    </>
  ) : (
    <>
      <Link to={"/login"}>
        <Button className={"login-btn"}>Login</Button>
      </Link>
      <Link to={"/signup"}>
        <Button className={"signup-btn"}>Signup</Button>
      </Link>
    </>
  );

  return (
    <header className="header">
      <AppLogo />
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <div className="authentication">{renderBtn}</div>
        </ul>
      </nav>
      <Link to={"/cart"} className="cart_btn">
        <AiOutlineShoppingCart className="cart_btn_icon" />
        <span>0</span>
      </Link>
    </header>
  );
};

export default Header;
