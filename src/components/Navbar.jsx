import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {

  const isLoggedIn = props.isLoggedIn
  const setIsLoggedIn = props.setIsLoggedIn

  const navigate = useNavigate();


  return (
      <div id="navbar">
      <h2>Fitness Tracker</h2>
      
      <div id="linkBar">
      <Link id={"homeLink"} to={"/"}>Home</Link>
      <Link id={"routinesLink"} to={"/routines"}>Routines</Link>

      {
        isLoggedIn && <Link id={"myRoutinesLink"} to={"/myroutines"}>My Routines</Link>
      }

      <Link id={"activitiesLink"} to={"/activities"}>Activities</Link>
      <Link id={"registerLink"} to={"/register"}>Register</Link>

      {
        isLoggedIn ? <button id={"logoutLink"} onClick={()=>{ 
          setIsLoggedIn(false)
          localStorage.removeItem("token")
          localStorage.removeItem("username")
          navigate("/", {replace: true}) 
          window.location.reload(true);
      }} className="navButton">Log Out</button>
      : <Link to="/login"><button id="loginLink">Login</button></Link> 
      }


      <button onClick={() => {
        console.log(localStorage.getItem("token"))
        // console.log
      }}>Print Token</button>
      

    </div>
    </div>
  );
};

export default Navbar;