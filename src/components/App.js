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
    fetch("http://localhost:9292/jobs")
    .then(response => response.json())
    .then(data => setAllJobs(data))
  }, [])

  function updateAllJobs(updatedJobs){
    setAllJobs(updatedJobs)
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
            element={<JobDetails allJobs={allJobs} hipsterCount={hipsterCount} updateAllJobs={updateAllJobs} />}
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
