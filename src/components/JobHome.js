import React, { useState } from "react";
import JobListing from "./JobListing";
import Filter from "./Filter";

function JobHome({allJobs}) {
  const [filterOption, setFilterOption] = useState("All")



  function handleFilter(event){
    const booleanString = event.target.value
    const option = booleanString.toLowerCase()==="true"? true :false
    setFilterOption(option)
  }


  const filteredJobs = allJobs.filter((job) => {
    if (filterOption === "All") return true;

    return job.open === filterOption;
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
      <ul className="cards">{myJobs}</ul>
      <Filter handleFilter={handleFilter}/>
    </div>
    
    
  )
}

export default JobHome;

// TO DOs: add a "see more" button. Initially only show 5 jobs from state. the button will show the next 5. Also, add a ton of filtering: open vs expired. By employment, by company, some others. Make sure I "see" my models. Think about doing infinite scroll