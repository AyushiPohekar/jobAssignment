import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="NavabarOne">
        Click and collect is now available at select stores.Enjoy complimentary
        carbon neutral shipping on all orders.
        <span>+</span>
      </div>
      <div className="NavbarTwo">
        <div className="FirstDiv">
        <a>Shop</a>
        <a>Read</a>
        <a>Store</a>
        <a>Search</a>
        </div>
        <div className="Seconddiv">
            <a>Login</a>
            <a>Cabinet</a>
            <a>Cart</a>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
