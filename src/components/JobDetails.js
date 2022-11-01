import React from "react";
import { useParams, useNavigate} from "react-router-dom"

function JobDetails({allJobs, updateAllJobs, allHipsters, updateAllHipsters}) { 
  const hipsterIds = allHipsters.map(hipster => hipster.id)
  const randomHipsterId = hipsterIds[Math.floor(Math.random()*hipsterIds.length)]
  
  const { id } = useParams()
  const navigate = useNavigate()


  const {title, position, key_skill, expired, employment, company_logo_url, company_name, company_slogan}= allJobs.find(job => job.id === Number(id))

  
  function handleHireClick(){
    onHireHipster(id)
  }

  function handleDeleteClick(){
    onDeleteJob(id)
  } 


  function onHireHipster(id){
    fetch(`http://localhost:9292/jobs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
    }, 
    body: JSON.stringify({      
        "hipster_id": `${randomHipsterId}`,
        "open": false
    }),
  })
  .then((response) => response.json())
  .then((data) => {
    updateAllHipsters(data.hipster)
    updateAllJobs(data.job)
    });
    navigate("/hipsters")
  }
  
  function onDeleteJob(id){
    console.log(id)
    fetch(`http://localhost:9292/jobs/${id}`,{
      method: "DELETE",
    })
    .then(response => response.json())
    .then(() => {
      const updatedJobs = allJobs.filter((job) => job.id !== Number(id))
      updateAllJobs(updatedJobs)
    })
    navigate("/jobs")
  }  

  //remove open logic and navigate someone to Hipsterview once hired
 

  return (
      <div className="jobDetails">                   
          <img src={company_logo_url} alt="company logo" />
          <p><span style={{fontWeight: "bold"}}>Company slogan</span> {company_slogan}</p>
          <p>{company_name} is hiring a {title}. This {position} is skilled in: {key_skill}</p>
          <p><span style={{fontWeight: "bold"}}>Employment Type</span> {employment}</p>                           
          {expired ?
            <>
              <p>The position is expired.</p>
              <button className="expired" onClick={handleDeleteClick}>No longer on the market? Remove it</button>
            </>    
          :
            <>
              <p>Active job posting</p>
              <button className="open job" onClick={handleHireClick}>Hire a Hipster!</button>
            </>                
          }
       </div>
      )
   } 

export default JobDetails;



