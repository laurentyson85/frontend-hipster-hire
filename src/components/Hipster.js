import React from "react";
import mustache from "../images/mustache.png"

function Hipster({name, bio, jobs}) {

  const hipsterBio = bio.replace(/[",]/g, ' ').replace("[", "''").replace("]", "''")

  if (jobs.length > 0){
    const hipsterJobs = jobs.map(job =>
      <ul key={job.id}>      
        <li>{job.title} at {job.company_name}. Position: {job.position}.  Employment: {job.employment}.</li>      
      </ul>    
    )
    return (
      <div className="card">
        <p>{name}</p>
        <img className ="mustacheImage" src={mustache} alt="hipster mustache"/>
        <p><span style={{fontWeight: "bold"}}>My Bio:</span> {hipsterBio}</p>
        <div className="hipsterjobs">
        <p><span style={{fontWeight: "bold"}}>My Jobs:</span></p>
          {hipsterJobs}
        </div>
      </div>    
    ); 
  } else{
    return (
      <div className="card">
        <p>{name}</p>
        <img className ="mustacheImage" src={mustache} alt="hipster mustache"/>
        <p><span style={{fontWeight: "bold"}}>My Bio:</span> {hipsterBio}</p>
        <p><span style={{fontWeight: "bold"}}>My Jobs: I'm new and ready to work!</span></p>
      </div>    
    )
  }  
}

export default Hipster;

