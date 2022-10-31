import React, { useState } from "react";
import JobListing from "./JobListing";
import Filter from "./Filter";

function JobHome({allJobs}) {
  const [filterOption, setFilterOption] = useState("All")


  function handleFilter(event){
    setFilterOption(event.target.value)
  }

  const filteredJobs = allJobs.filter(job => job.open === true).filter((job) => {
    if (filterOption === "All") return true;

    return job.expired.toString() === filterOption;
  })

  const myJobs = filteredJobs.map(job => {
      return(
          <JobListing
          key={job.id}
          id={job.id}
          title={job.title}
          employment={job.employment}
          companyName={job.company_name}
          />
      )
  })

  return (
    <div>
      <Filter handleFilter={handleFilter}/>
      <ul className="listings">{myJobs}</ul>      
    </div>
    
    
  )
}

export default JobHome;
