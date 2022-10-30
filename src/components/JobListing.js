import React from "react";
import { Link } from "react-router-dom"

function JobListing({title, employment, companyName, id}) {

  return (
    <li className="Job listing">
       <p><span style={{fontWeight: "bold"}}>Title:</span> {title}</p>
      <span className="employment">{employment} position at </span>
      <span className="company">{companyName} </span>
      <Link className="detailsLink" to={`/jobs/${id}`}>View Details</Link>
    </li>
    
  )
}

export default JobListing;