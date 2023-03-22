import React from "react";
import { Link } from "react-router-dom"
const Footer = () => {
    return(
        <div id="footer">
            <Link id={"aboutLink"} to={"/about"}>About</Link>
            <Link id={"contactLink"} to={"/contact"}>Contact</Link>
            {/* <h2 id="aboutLink">About</h2>
            <h2 id="contactLink">Contact</h2> */}
        </div>

    )
    
}

export default Footer