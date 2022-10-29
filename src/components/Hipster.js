import React from "react";
import mustache from "../images/mustache.png"

function Hipster({name, bio, jobs}) { 

  return (
    <li className="card">
      <p>{name}</p>
      <img slassName ="mustacheImage" src={mustache} alt="hipster mustache"/>
      <p>{bio}</p>      
      </li>    
  )
}

export default Hipster;

{/* <div>
        <p><span style={{fontWeight: "bold"}}>Name:</span> {name}</p>
        <p>{bio}</p>
        <p><span style={{fontWeight: "bold"}}>Employment Type</span></p>
        <p>{hipsterJobs}</p>
      </div>    */}

      