import React from "react";
import { Link } from "react-router-dom"

function JobListing({title, employment, companyName, id}) {

  return (
    <li className="jobListing">
      <p><span style={{fontWeight: "bold"}}>Title:</span> {title}</p>
      <span>{employment} position at </span>
      <span>{companyName} </span>
      <br></br>
      <Link className="detailsLink" to={`/jobs/${id}`}>View Details</Link>
    </li>
    
  )
}

export default JobListing;