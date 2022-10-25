import React from "react";
import JobListing from "./JobListing";

function JobHome({allJobs}) {
    console.log(allJobs)
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

// TO DOs: add a "see more" button. Initially only show 5 jobs from state. the button will show the next 5. Also, add a ton of filtering: open vs expired. By employment, by company, some others. Make sure I "see" my models. Think about doing infinite scroll