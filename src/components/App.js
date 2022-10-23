import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Nav from'./Nav';
import JobHome from './JobHome';
import HipsterView from './HipsterView';
import JobForm from './JobForm';
import JobDetails from './JobDetails';




function App() {
  return (    
      <div>
        <Header />
        <Nav />        
        <Routes>        
          <Route path="hipsters" element={<HipsterView />}/>          
          <Route path=":id" element={<JobDetails />}/>          
          <Route path="new_posting" element={<JobForm />}/>
          <Route exact path="/" element={<JobHome />}/>
        </Routes>
      </div>
    );
  }

export default App;
