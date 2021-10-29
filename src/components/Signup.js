import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import "../styling/Signup.css";
//import axios from 'axios';


function Signup() {

    const history = useHistory();

    const [user, setUser] = useState({
        name:"", mail:"", password:"", cpassword:""
    })

    let name, value;
    const handle = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value});
    }

    const sendPost = async (e) => {
        e.preventDefault();

        const { name, mail, password, cpassword } = user;


        {/* this code is used for sending ur data to /register route it is like a postman */}
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, mail, password, cpassword
            })
        })     

        const data = await res.json();
        if(data.sum === 0 || !data){
            window.alert("invalid login");
            console.log("invalid login");
        }else{
            window.alert("success login");
            console.log("success login");

            history.push("/login");
        }
    }

    return (
        <div>
           {/* <h1>register</h1>
            <form method="POST">
                <input type="text" name="name" value={user.name} onChange={handle} />
                <input type="email" name="mail" value={user.mail} onChange={handle} />
                <input type="text" name="job" value={user.job} onChange={handle} />
                <input type="number" name="phone" value={user.phone} onChange={handle} />
                <input type="password" name="passvord" value={user.passvord} onChange={handle} />
                <input type="password" name="cpassvord" value={user.passvord} onChange={handle} />
                <input type="submit" name="submit"  value="register" onClick={sendPost} />
           </form>  */}
           <form method="POST">
              <div className="container">
                  <h1>Register Yourself</h1>
                  {/*<p>Please fill in this form to create an account.</p>*/}
                  

                  <label for="name"><b>Name</b></label>
                  <input type="text" placeholder="Enter Name" name="name" value={user.name} onChange={handle} id="name" required />
                  
                  <label for="email"><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name="mail" value={user.mail} onChange={handle} id="email" required />

                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handle} id="psw" required />

                  <label for="psw-repeat"><b>Confirm Password</b></label>
                  <input type="password" placeholder="Repeat Password" name="cpassword" value={user.cpassword} onChange={handle} id="psw-repeat" required />
                  

    
                  <button type="submit" className="registerbtn" onClick={sendPost}>Register</button>
              </div>

                <div className="container signin">
                   <p>Already have an account? <NavLink to="/login">Sign in</NavLink>.</p>
                </div>
           </form>
        </div>
    )
}

export default Signup
