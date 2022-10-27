import React from "react";
import { NavLink } from "react-router-dom"

let activeStyle = {
    color:"white",
    borderBottom: "2px solid white",
  }


function Nav() {
  return (
    <div className="navBar">
        <nav>
        <NavLink
            to="/"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>        
        <NavLink
            to="/jobs"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            All Jobs
          </NavLink>       
        <NavLink
            to="hipsters"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Hipster View
          </NavLink>        
        <NavLink
            to="new_posting"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            New Job Posting
          </NavLink>
        </nav>
    </div>
    
  );
}

export default Nav;