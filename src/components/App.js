import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Nav from'./Nav';
import JobHome from './JobHome';
import HipsterView from './HipsterView';
import JobForm from './JobForm';
import JobDetails from './JobDetails';



function App() {
  const [allJobs, setAllJobs] = useState([])
  const [allHipsters, setAllHipsters] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/hire_data")
    .then(response => response.json())
    .then(data => {
      setAllJobs(data.jobs) //update this in controller to just grab open jobs
      setAllHipsters(data.hipsters)
    })
  }, [])  
 
  function addNewHipster(newHipster){  
    const updatedHipsters = [newHipster, ...allHipsters]
    setAllHipsters(updatedHipsters)
  }

  function addNewJob(newJob){  
    const updatedJobs = [...allJobs, newJob]
    setAllJobs(updatedJobs)
  }

  //instead of adding filter out the job from the array
  function updateAllJobs(jobData){
    const updatedJobs = allJobs.map((job) => {
      if (job.id === jobData.id){
        return jobData
      } else {
        return job
      }
    })
    setAllJobs(updatedJobs)
  }

  function updateAllHipsters(hipsterData){
    const updatedHipsters = allHipsters.map((hipster) => {
      if (hipster.id === hipsterData.id){
        return hipsterData
      } else {
        return hipster
      }
    }) //filter out the hipster,then add back to the front of the array, then set all hipsters. Hve the patch route someone to hipster View
    setAllHipsters(updatedHipsters)
  }  

  return (    
      <div>
        <Header />
        <Nav />        
        <Routes>        
          <Route 
            path="hipsters" 
            element={<HipsterView allHipsters={allHipsters} addNewHipster={addNewHipster}/>}/>                    
          <Route 
            path="new_posting" 
            element={<JobForm addNewJob={addNewJob}/>}
            />
          <Route 
            path="jobs" 
            element={<JobHome allJobs={allJobs} />}/>
              <Route 
                path="jobs/:id" 
                element={<JobDetails allJobs={allJobs} allHipsters={allHipsters} updateAllHipsters={updateAllHipsters} updateAllJobs={updateAllJobs} />}
              />            
            <Route 
              path="/*" 
              element={<Home />}
            />
        </Routes>
      </div>
    );
  }

export default App;
