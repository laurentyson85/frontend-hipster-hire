import React from "react";
import { useParams } from "react-router-dom"

function JobDetails({allJobs, updateAllJobs, hipsterCount}) {
  const hiredHipster = Math.floor(Math.random() * `${hipsterCount}`) + 1      
  const { id } = useParams()




  const {title, position, key_skill, open, expired, employment, company_logo_url, company_name, company_slogan, hipster
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
          <p><span style={{fontWeight: "bold"}}>Company slogan</span> {company_slogan}</p>
          <p>{company_name} is hiring a {title}. This {position} is skilled in: {key_skill}</p>
          <p><span style={{fontWeight: "bold"}}>Employment Type</span> {employment}</p>          
          {expired?(
            <>
            <p>The position is expired.</p>
            <button className="expired" onClick={handleDeleteClick}>No longer on the market?</button>
            </>            
              ) : (
            <p>Active job posting</p>
          )}
          {open? (
            <button className="open job" onClick={handleHireClick}>Hire a Hipster!</button>
                  ) : (
            <p>This hipster already has the job: {hipster.name} their bio: {hipster.bio}</p>
          )}
         
       </div>
      )
   } 

export default JobDetails;

