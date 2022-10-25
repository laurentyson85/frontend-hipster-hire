import React from "react";
import { useParams } from "react-router-dom"

function JobDetails({allJobs}) {
    
const { id } = useParams() 

if (allJobs.length > 0){
    const {title, field, position, key_skill, employment, company: {
        logo_url,
        hired_hipsters,
        name,
        slogan
    },
    } = allJobs.find(job => job.id === parseInt(id))

    
    return (
        <div className="jobDetails">                   
            <img src={logo_url} alt="company logo" />
            <h3>{name}</h3>
            <p>{hired_hipsters}</p> 
            <p><span style={{fontWeight: "bold"}}>Company slogan</span> {slogan}</p>
            <p>We're hiring a {title}. This {field} {position} is skilled in: {key_skill}</p>
            <p><span style={{fontWeight: "bold"}}>Employment Type</span> {employment}</p>
        </div>
      ); 
  } else{
     return null
  }
}

export default JobDetails;

//TO DOs: add hire a hipster functionality and delete a listing functionality. Add a button - Say if the position is filled..if not filled, can click to hire a hipster (post request). Another button - if a position is not filled AND is expired then can delete listing (delete request) Two big, buttons at the bottom find some fun icons 