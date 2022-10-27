import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Nav from'./Nav';
import JobHome from './JobHome';
import HipsterView from './HipsterView';
import JobForm from './JobForm';
import JobDetails from './JobDetails';



function App() {
  const [allJobs, setAllJobs] = useState([])
  const [hipsterCount, setHipsterCount] = useState(25) //to do: update hipsterCount state when new hipster is created

  useEffect(() => {
    fetch("http://localhost:9292")
    .then(response => response.json())
    .then(data => setAllJobs(data))
  }, [])

 const hiredHipster = Math.floor(Math.random() * `${hipsterCount}`) + 1

 //maybe move this to the details level and send state up
//this code works, but have something visually happen to show a hipster was hired
  function onHireHipster(id){
    fetch(`http://localhost:9292/jobs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
    }, 
    body: JSON.stringify({      
        "hipster_id": `${hiredHipster}`,
        "open": false
    }),
  })
  .then((response) => response.json())
  .then((data) => {
    const updatedAllJobs = allJobs.map((job) => {
      if (job.id == id){
        return data
      } else {
        return job
      }
    })
      setAllJobs(updatedAllJobs)
    });  
  }

 //maybe move this to the details level and send state up 
//this code works, add useHistory hook here 👇 to route user somewhere else when job is deleted. Maybe route to new job posting
  function onDeleteJob(id){
    fetch(`http://localhost:9292/jobs/${id}`,{
      method: "DELETE",      
  })
  .then(response => response.json())
  .then(() => {
      const updatedAllJobs = allJobs.filter((job) => job.id != id)
      setAllJobs(updatedAllJobs)
    })
  }


  return (    
      <div>
        <Header />
        <Nav />        
        <Routes>        
          <Route 
            path="hipsters" 
            element={<HipsterView />}
            />          
          <Route 
            path=":id" 
            element={<JobDetails allJobs={allJobs} onHireHipster={onHireHipster} onDeleteJob={onDeleteJob}/>}
            />          
          <Route 
            path="new_posting" 
            element={<JobForm />}
            />
          <Route 
            path="/*" 
            element={<JobHome allJobs={allJobs} />}
            />
        </Routes>
      </div>
    );
  }

export default App;
