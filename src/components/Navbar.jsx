import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2> I am navbar</h2>
      <Link id={"homeLink"} to={"/"}>
              Home
            </Link>
      <Link id={"registerLink"} to={"/register"}>
              Register
            </Link>
            <Link id={"loginLink"} to={"/login"}>
              Login
            </Link>
      

    </div>
  );
};

export default Navbar;