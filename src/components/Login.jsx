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
        <div id="basicPage" onSubmit={async(event) => {
            event.preventDefault()
            try {
               const result =  await userLoginCall(username, password)
                if (result !== undefined) {
                    setIsLoggedIn(true)
                    navigate("/")
                    localStorage.setItem("token", result)
                    localStorage.setItem("username", username)
                } else {
                    console.log("Already Logged In")
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

          <button id={"cardButton"} type="submit">
            Enter
          </button>
        </form>
        </div>

    )
    
}

export default Login