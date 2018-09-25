import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className ="sidebar">
    <ul>
      <li><NavLink to="/">Dashboard</NavLink></li>
      <li><NavLink to="/products">Products</NavLink></li>
    </ul>   
    </div>
  );
};

export default Sidebar;
