import React, { useState } from "react";
import AuthenticationServices from "../../services/AuthenticationServices";
import Navbar from "../../components/navbar/navbar";
import LoginBachGround from "../../assets/47f24d49376753.58b346965a50a.png"
import "./login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailed, setLoginFailed] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = {
                username: username,
                password: password
            }
            const response = await AuthenticationServices.login(user)
            console.log(response)
            localStorage.setItem("token", response.data.token)

            window.location.href = "/dashboard"
        } catch (error) {
            console.log("login failed")
            console.log(error)
            setLoginFailed(true)
        }
    }
    return (
        <div className="login">
            <Navbar />
            <div className="container">
                <img src={LoginBachGround} alt="loginBG"></img>
                <div className="login-form" onSubmit={handleSubmit}>
                    <form>
                        <h1>User Login</h1>
                        <div>
                            <div className="userInput">
                                <input
                                    type="text"
                                    id="username"
                                    required
                                    onChange={(event) => setUsername(event.target.value)}
                                >
                                </input>
                            </div>
                            <div className="userInput">
                                <input
                                    type="password"
                                    id="password"
                                    required
                                    onChange={(event) => setPassword(event.target.value)}
                                >
                                </input>
                            </div>
                            <div>
                                {loginFailed ? <span className="loginStat">login failed</span> : <span>&nbsp;</span>}

                            </div>
                            <button className="button" type="submit" value="login">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;