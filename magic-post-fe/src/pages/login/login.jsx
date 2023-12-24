import React, { useState } from "react";
import AuthenticationServices from "../../services/AuthenticationServices";

function Login(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loginFailed,setLoginFailed] = useState(false)
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const user = {
                username: username,
                password: password
            }
            const response = await AuthenticationServices.login(user)
            console.log(response)
            localStorage.setItem("token",response.data.token)
            window.location.href="/dashboard"
        } catch (error){
            console.log("login failed")
            setLoginFailed(true)
        }
    }
    return(
        <div className="container">
            <div className="login-form" onSubmit={handleSubmit}>
                <form>
                    <h1>User Login</h1>
                    <input
                        type="text"
                        id="username"
                        required
                        onChange={(event) => setUsername(event.target.value)}
                    >
                    </input>
                    <input
                        type="password"
                        id="password"
                        required   
                        onChange={(event) => setPassword(event.target.value)} 
                    >
                    </input>
                    <button className="button" type="submit" value="login">Login</button>
                    {loginFailed ? <span>login failed</span>: <span>&nbsp;</span>}
                </form>
            </div>
        </div>
    );
}

export default Login;