import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div id="navbar">
      <h2>Fitness Tracker</h2>
      
      <div id="linkBar">
      <Link id={"homeLink"} to={"/"}>Home</Link>
      <Link id={"routinesLink"} to={"/routines"}>Routines</Link>
      <Link id={"activitiesLink"} to={"/activities"}>Activities</Link>
      <Link id={"registerLink"} to={"/register"}>Register</Link>
      <Link id={"loginLink"} to={"/login"}>Login</Link>
      

    </div>
    </div>
  );
};

export default Navbar;