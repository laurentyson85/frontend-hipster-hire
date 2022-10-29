import React from "react";
import mustache from "../images/mustache.png"

function Hipster({name, bio, jobs}) {
  
  const hipsterJobs = jobs.map(job =>
    <ul key={job.id}>
      <li>{job.title}</li>
      <li>{job.position}</li>
      <li>{job.employment}</li>
      <li>{job.company_name}</li>
    </ul>
    
    )

  return (
    <div className="card">
      <p>{name}</p>
      <img className ="mustacheImage" src={mustache} alt="hipster mustache"/>
      <p>{bio}</p>
      <div className="hipsterjobs">
        {hipsterJobs}
      </div>
      </div>    
  )
}

export default Hipster;

