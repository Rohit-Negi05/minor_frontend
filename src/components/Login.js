import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../styling/Login.css";

function Login() {

    const history = useHistory();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mail, password
        })
    });
    const data = await res.json();
        if(data.sum === 0 || !data){
            window.alert("invalid login");
            console.log("invalid login");
        }else{
            window.alert("success login");
            console.log("success login");

            history.push("/");
        }
    }


    return (
        <div>
            <form method="POST">
              <div class="container">
                 <h1>Login to Your Account</h1><br></br>
                 <label for="uname"><b>Email</b></label>
                 <input type="text" placeholder="Enter Email" name="mail" value={mail} onChange={(e) => setMail(e.target.value)} required />

                 <label for="psw"><b>Password</b></label>
                 <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                 <button type="submit" onClick={loginUser}>Login</button>
              </div>
            </form>
        </div>
    )
}

export default Login
