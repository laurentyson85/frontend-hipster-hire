import React from "react";
import { useParams } from "react-router-dom"

function HipsterDetails({allHipsters}) {
    const { id } = useParams()

    const {name, bio, jobs} = allHipsters.find(hipster => hipster.id === Number(id))

    const hipsterJobs = jobs.map( job =>
        <div>
            {job.title}
            {job.position}
            {job.position}
        </div>        
        

        
        )


    return (
      <div>
        <p><span style={{fontWeight: "bold"}}>Name:</span> {name}</p>
        <p>{bio}</p>
        <p><span style={{fontWeight: "bold"}}>Employment Type</span></p>
        <p>{hipsterJobs}</p>
      </div>     
    )
  }
  
  export default HipsterDetails;