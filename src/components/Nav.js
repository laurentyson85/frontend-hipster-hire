import React from "react";
import { Link } from "react-router-dom"


function Nav() {
  return (
    <div className="navBar">
        <nav>
        <Link to="/">All Jobs</Link>
        <Link to="hipsters">Hipster View</Link>
        <Link to="new_posting">New Job Posting</Link>
        </nav>
    </div>
    
  );
}

export default Nav;