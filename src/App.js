import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () =>{
  return(
    <>
       <Navbar />

       <Route exact path="/">    {/* Its most basic responsibility is to render some UI when its path matches the current URL.*/}
         <Home />
       </Route>

       <Route path="/about">
         <About />
       </Route>

       <Route path="/contact">
         <Contact />
       </Route>

       <Route path="/login">
         <Login />
       </Route>

       <Route path="/signup">
         <Signup />
       </Route>
       
                 {/* note the path must matches with the path given in the navbar */}
                 {/* because as clicking the navbar link its url will change and the changed url will change the path */}
                 {/* of current route and it will render the corresponding component */}
    </>
  )
}

export default App;