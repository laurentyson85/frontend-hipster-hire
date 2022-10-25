import React from "react";
import { useParams } from "react-router-dom"

function JobDetails({allJobs}) {
    
const { id } = useParams()

function handleHireClick(){
    console.log("hired a hipster")
}

function handleDeleteClick(){
    console.log("deleted that job")
}

if (allJobs.length > 0){
    const {title, field, position, key_skill, open, expired, employment, company: {
        logo_url,
        hired_hipsters,
        name,
        slogan
    },
    } = allJobs.find(job => job.id === parseInt(id))

    //clean up open and expired logic and text. display some combo of filled, open and avtive, and open and expired.

    
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
            {open? (
                <button className="open job" onClick={handleHireClick}>Hire a Hipster</button>
                    ) : (
                null
            )}
            <button className="expired" onClick={handleDeleteClick}>Need to delete? Click here</button>
        </div>
      ); 
  } else{
     return null
  }
}

export default JobDetails;

//TO DOs: add hire a hipster functionality and delete a listing functionality. Add a button - Say if the position is filled..if not filled, can click to hire a hipster (post request). Another button - if a position is not filled AND is expired then can delete listing (delete request) Two big, buttons at the bottom find some fun icons. 