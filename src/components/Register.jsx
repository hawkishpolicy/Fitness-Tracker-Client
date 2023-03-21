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
    <div id="basicPage" onSubmit={async(event) => {
        event.preventDefault()
            try {
               const result =  await registerNewUserCall(username, password)
                if (result !== undefined) {
                    setIsLoggedIn(true)
                    navigate("/")
                    localStorage.setItem("token", result)
                    localStorage.setItem("username", username)
                } else {
                    console.log("Already Registered")
                }
            } catch (error) {
                console.log(error)
            }
        }}>

        <form
          id="registerCard"
          onSubmit={(event) => {
            event.preventDefault();
            sendUserInfo(username, password);
            navigate("/login");
          }}
        >
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

          <button id={"cardButton"} type="submit">
            Enter
          </button>
        </form>
        
    </div>
)}

export default Register