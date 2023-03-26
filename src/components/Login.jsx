import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom"
import { userLoginCall } from "../API-Adapter";

const Login = (props) => {

    const username = props.username
    const setUsername = props.setUsername
    const password = props.password
    const setPassword = props.setPassword
    const setIsLoggedIn = props.setIsLoggedIn
    
    const navigate = useNavigate()

    return(
        <div id="loginPage" onSubmit={async(event) => {
            event.preventDefault()
            try {

              if (localStorage.getItem("token")) {
                alert("Already logged in!")
              } else {

                const result =  await userLoginCall(username, password)
                 if (result !== undefined) {
                     setIsLoggedIn(true)
                     localStorage.setItem("token", result)
                     localStorage.setItem("username", username)
                     navigate("/")
                 } else {
                     console.log("Invalid Login Credentials")
                 }

              }

            } catch (error) {
                console.log(error)
            }


        }}>
          <form id="loginCard" >
            <h1>Please Login Below</h1>
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
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            ></input>

          <button id={"cardButton"} type="submit">
            Enter
          </button>
        </form>
        </div>

    )
    
}

export default Login