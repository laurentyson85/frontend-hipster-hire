import React from "react";
import { useParams } from "react-router-dom"

function JobDetails({allJobs, updateAllJobs, hipsterCount}) {
  const hiredHipster = Math.floor(Math.random() * `${hipsterCount}`) + 1      
  const { id } = useParams()
  const {title, position, key_skill, open, expired, hipster_id, employment, company_logo_url, company_name, company_slogan, hipster: {
          bio,
          name,
        }
      } = allJobs.find(job => job.id === Number(id))

  function handleHireClick(){
    onHireHipster(id)
  }

  function handleDeleteClick(){
    onDeleteJob(id)
  } 


  function onHireHipster(id){
    console.log(id)
    fetch(`http://localhost:9292/jobs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
    }, 
    body: JSON.stringify({      
        "hipster_id": `${hiredHipster}`,
        "open": false
    }),
  })
  .then((response) => response.json())
  .then((data) => {
    const updatedJobs = allJobs.map((job) => {
      if (job.id === Number(id)){
        return data
      } else {
        return job
      }
    })
      updateAllJobs(updatedJobs)
    });  
  }
  
  function onDeleteJob(id){
    console.log(id)
    // fetch(`http://localhost:9292/jobs/${id}`,{
    //   method: "DELETE",
    // })
    // .then(response => response.json())
    // .then(() => {
      const updatedJobs = allJobs.filter((job) => job.id !== Number(id))
      console.log(updatedJobs)
    // })
  }
  


  return (
      <div className="jobDetails">                   
          <img src={company_logo_url} alt="company logo" />
          <h3>{name}</h3>
          <p><span style={{fontWeight: "bold"}}>Company slogan</span> {company_slogan}</p>
          <p>We're hiring a {title}. This {position} is skilled in: {key_skill}</p>
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

