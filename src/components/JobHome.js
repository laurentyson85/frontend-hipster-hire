import React from "react";
import JobListing from "./JobListing";
import Filter from "./Filter";

function JobHome({allJobs}) {
  const [filterOption, setFilterOption] = useState("All")



  function handleFilter(event){
    setFilterOption(event.target.value)
  }


  const filteredJobs = allJobs.filter((job) => {
    if (selectedGroup === "All") return true;

    return job.open === selectedGroup;
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
    <ul className="cards">{myJobs}</ul>
    
  )
}

export default JobHome;

// TO DOs: add a "see more" button. Initially only show 5 jobs from state. the button will show the next 5. Also, add a ton of filtering: open vs expired. By employment, by company, some others. Make sure I "see" my models. Think about doing infinite scroll