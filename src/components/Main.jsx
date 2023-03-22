import React, { useState } from "react";
import { Navbar, Footer, Home, Login, Routines, Activities, Register, MyRoutines, About, Contact } from "./";
import { Routes, Route } from "react-router-dom"


const Main = () => {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [isLoggedIn, setIsLoggedIn ] = useState(localStorage.getItem("token"))

    return(
        <div id="main">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <div id ="container">
                <Routes>
                    <Route exact path ="/" element={
                        <Home />}/>
                    <Route path ="/login" element={
                        <Login
                            username={username} setUsername={setUsername}
                            password={password} setPassword={setPassword}
                            setIsLoggedIn={setIsLoggedIn}
                        />}/>
                    <Route path ="/register" element={
                        <Register
                            username={username} setUsername={setUsername}
                            password={password} setPassword={setPassword}
                            setIsLoggedIn={setIsLoggedIn}
                    />}/>
                    <Route path ="/myRoutines" element={<MyRoutines/>}/>
                    <Route path ="/routines" element={<Routines/>}/>
                    <Route path ="/activities" element={<Activities/>}/>
                    <Route path ="/about" element={<About/>}/>
                    <Route path = "/contact" element={<Contact/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default Main