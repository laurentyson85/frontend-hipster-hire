import React from "react";
import mustache from "../images/mustache.png"

function Hipster({name, bio, jobs}) {
  
  const hipsterJobs = jobs.map(job =>
    <div key={job.id}>
      <p>{job.title}</p>
      <p>{job.position}</p>
      <p>{job.employment}</p>
      <p>{job.company_name}</p>
    </div>
    
    )

  return (
    <li className="card">
      <p>{name}</p>
      <img slassName ="mustacheImage" src={mustache} alt="hipster mustache"/>
      <p>{bio}</p>
      <div className="hipsterjobs">
        {hipsterJobs}
      </div>
      </li>    
  )
}

export default Hipster;

