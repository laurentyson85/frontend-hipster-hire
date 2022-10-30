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
    .then(data =>{
      console.log(data)
      setAllHipsters(data.hipsters)
      setAllJobs(data.jobs)
    }) 
      
  }, [])

  console.log(allJobs)
  console.log(allHipsters)
  

  function addNewHipster(newHipster){  
    const updatedHipsters = [newHipster, ...allHipsters]
    setAllHipsters(updatedHipsters)
  }

  function updateAllJobs(updatedJobs){
    setAllJobs(updatedJobs)
  }

  function addNewJob(newJob){  
    const updatedJobs = [...allJobs, newJob]
    setAllJobs(updatedJobs)
  }



 //to do: think about adding a link for people to go back to all jobs after they hire a hipster, styling, remove console.logs, test all routes in app, double check restfulness


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
                element={<JobDetails allJobs={allJobs} allHipsters={allHipsters} updateAllJobs={updateAllJobs} />}
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
