import React from "react";
import { useParams } from "react-router-dom"

function JobDetails({allJobs, onHireHipster, onDeleteJob }) {    
  const { id } = useParams()
  const {title, field, position, key_skill, open, expired, employment, company: {
          logo_url,
          hired_hipsters,
          name,
          slogan
        }
      } = allJobs.find(job => job.id === parseInt(id))

  function handleHireClick(){
    onHireHipster(id)
  }

  function handleDeleteClick(){
    onDeleteJob(id)
  }  

    
  return (
      <div className="jobDetails">                   
          <img src={logo_url} alt="company logo" />
          <h3>{name}</h3>
          <p>{hired_hipsters}</p> 
          <p><span style={{fontWeight: "bold"}}>Company slogan</span> {slogan}</p>
          <p>We're hiring a {title}. This {field} {position} is skilled in: {key_skill}</p>
          {expired? (
              <p>The position is expired. We weren't able to hire a hipster in time. Delete it</p>
                  ) : (
              <p>Active job posting</p>
          )}        
          <p><span style={{fontWeight: "bold"}}>Employment Type</span> {employment}</p>
          {open && !expired?(
            <button className="open job" onClick={handleHireClick}>Hire a Hipster</button>
                  ) : (
            <button className="expired" onClick={handleDeleteClick}>Need to delete? Click here</button>
          )}         
       </div>
      )
   } 

export default JobDetails;