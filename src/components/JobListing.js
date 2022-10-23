import React from "react";
import { Link } from "react-router-dom"

function JobListing({title, employment, companyName, id}) {

  return (
    <li className="Job listing">
      <span>{title}</span>
      <span className="employment">{employment}</span>
      <span className="company">Company: {companyName}</span>
      <Link className="detailsLink" to={`/${id}`}>View Details</Link>
    </li>
    
  )
}

export default JobListing;