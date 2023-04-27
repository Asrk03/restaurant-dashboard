import React from "react";
import { useState } from "react";
import { useUserData } from "../utils/dataFetching.js";
import HomePage from "./HomePage.js";
const LoginPage = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const raw = useUserData();
    const userData = raw;
    const handleLogin = ()=>{
        userData.map((data)=>{
            if(data.fields.username === username && data.fields.password === password){
                setLoggedIn(true);


            } else {
                setLoggedIn(false);
            }
        })
    }
    if(loggedIn){
        <HomePage loggedIn/>
    }
    return (!raw)?(<h1>Loading...</h1>):(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginPage;