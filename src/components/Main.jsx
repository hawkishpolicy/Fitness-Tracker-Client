import React, { useState } from "react";
import { Navbar, Footer, Home, Login, Routines, Activities, Register, MyRoutines, About, Contact } from "./";
import { Routes, Route } from "react-router-dom"


const Main = () => {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [isLoggedIn, setIsLoggedIn ] = useState(localStorage.getItem("token"))

    return(
        <div id="main">
            <Navbar />
            <div id ="container">
                <Routes>
                    <Route exact path ="/" element={<Home/>}/>
                    <Route path ="/myRoutines" element={<MyRoutines/>}/>
                    <Route path ="/routines" element={<Routines/>}/>
                    <Route path ="/activities" element={<Activities/>}/>
                    <Route path ="/login" element={<Login/>}/>
                    <Route path ="/register" element={<Register/>}/>
                    <Route path ="/about" element={<About/>}/>
                    <Route path = "/contact" element={<Contact/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default Main