import React from "react";
import { useParams } from "react-router-dom"

function JobDetails({allJobs}) {
    
const { id } = useParams() 

if (allJobs.length > 0){
    const {title, field, position, key_skill, employment, company: {
        logoUrl,
        name,
        slogan
    },
    } = allJobs.find(job => job.id === parseInt(id))

    
    return (
        <div className="jobDetails">                   
            <img src={logoUrl} alt="company logo" />
            <h3>{name}</h3> 
            <p><span style={{fontWeight: "bold"}}>Company slogan</span> {slogan}</p>
            <p>We're hiring a {title}. A {field} {position} who is skilled in: {key_skill}</p>
            <p><span style={{fontWeight: "bold"}}>Employment Type</span> {employment}</p>
        </div>
      ); 
  } else{
     return null
  }
}

export default JobDetails;