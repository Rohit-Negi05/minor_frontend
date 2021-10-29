import React from 'react';
import "bootstrap/dist/css/bootstrap.css";  
import { NavLink } from "react-router-dom";
// jo bootstrap download kia h uska path h ye or ye responsive bhi h
//mtlb css ke part ki tension khtm
// bhr sahi chiz h bootstrap css ki tnsn khtm ispe kaam jarur kario
                                            
function Navbar() {
    return (
        <>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <NavLink className="navbar-brand" to="#">Navbar</NavLink>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">    {/* bich m aane ka reason h m-auto, mr-auto usko right m kr dega */}
                        <li className="nav-item active">
                             <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        {/*<li className="nav-item">
                             <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                             <NavLink className="nav-link" to="/contact">Contact</NavLink>
    </li>*/}

                        <li className="nav-item">
                             <NavLink className="nav-link" to="/signup">Registration</NavLink>
                        </li>

                        <li className="nav-item">
                             <NavLink className="nav-link" to="/login">LogIn</NavLink>
                        </li>


                    </ul>
               </div>
           </nav>          
        </>
    )
}

export default Navbar
