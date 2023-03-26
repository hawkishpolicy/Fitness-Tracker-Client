import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { registerNewUserCall } from "../API-Adapter";


const Register = (props) => {

const username = props.username
const setUsername = props.setUsername
const password = props.password
const setPassword = props.setPassword
const setIsLoggedIn = props.setIsLoggedIn

const navigate = useNavigate()

return (
    <div id="registerPage" onSubmit={async(event) => {
        console.log("This is getting triggered")
        event.preventDefault()
            try {

              if (localStorage.getItem("token")) {
                alert("Need to log out before creating a new account")
              } else {
                
                const result =  await registerNewUserCall(username, password)
                 if (result !== undefined) {
                     setIsLoggedIn(true)
                     localStorage.setItem("token", result)
                     localStorage.setItem("username", username)
                     navigate("/")
                 } else {
                     console.log("token came back undefined")
                 }

              }

            } catch (error) {
                console.log(error)
            }
        }}>
    
        <form id="registerCard">
            <h1>Please Register Below</h1>
          <input
            id={"userNameInput"}
            type={"text"}
            placeholder={"User Name"}
            value={username}
            required
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>

          <input
            id={"userPassword"}
            type={"password"}
            placeholder={"Password"}
            min={"8"}
            required
          ></input>

          <input
            id={"confirmPassword"}
            type={"password"}
            placeholder={"Confirm Password"}
            min={"8"}
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>

          <button id={"cardButton"} type="submit" value="Register">Enter</button>
        </form>
    </div>
)}

export default Register