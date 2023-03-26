import React from "react";
import { Link } from "react-router-dom"
const Footer = () => {
    return(
        <div id="footer">
            <Link id={"aboutLink"} to={"/about"}>About</Link>
            <Link id={"contactLink"} to={"/contact"}>Contact</Link>
        </div>

    )
    
}

export default Footer