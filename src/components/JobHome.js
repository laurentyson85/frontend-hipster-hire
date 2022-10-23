import React from "react";
import JobListing from "./JobListing";

function JobHome({allJobs}) {
const myJobs = allJobs.map(job => {
    return(
        <JobListing
        key={job.id}
        id={job.id}
        title={job.title}
        employment={job.employment}
        companyName={job.company.name}
        />
    )
})

  return (
    <ul className="cards">{myJobs}</ul>
    
  )
}

export default JobHome;