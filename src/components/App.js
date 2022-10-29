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
  const [hipsterCount, setHipsterCount] = useState(10)

  useEffect(() => {
    fetch("http://localhost:9292/jobs")
    .then(response => response.json())
    .then(data => setAllJobs(data))
  }, [])
  

  function updateAllJobs(updatedJobs){
    setAllJobs(updatedJobs)
  }

  function addNewJob(newJob){  
    const updatedJobs = [...allJobs, newJob]
    setAllJobs(updatedJobs)
  }

  function updateHipsterCount(updatedHipsters){ 
    setHipsterCount(updatedHipsters.length)
}

 //to do: Add navigation to forms, styling, remove console.logs


  return (    
      <div>
        <Header />
        <Nav />        
        <Routes>        
          <Route 
            path="hipsters" 
            element={<HipsterView updateHipsterCount={updateHipsterCount}/>}/>                    
          <Route 
            path="new_posting" 
            element={<JobForm addNewJob={addNewJob}/>}
            />
          <Route 
            path="jobs" 
            element={<JobHome allJobs={allJobs} />}/>
              <Route 
                path="jobs/:id" 
                element={<JobDetails allJobs={allJobs} hipsterCount={hipsterCount} updateAllJobs={updateAllJobs} />}
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
