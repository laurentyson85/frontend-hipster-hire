import React, { useState, useEffect } from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import JobHome from './JobHome';
import HipsterView from './HipsterView';
import JobForm from './JobForm';
import JobDetails from './JobDetails';




function App() {
  return (    
      <div>
        <Header />
        <Nav />        
        <Switch>        
          <Route path="/hipsters">
            <HipsterView/>
          </Route>
          <Route path="/:id">
            <JobDetails />
          </Route>
          <Route path="/new_posting">
            <JobForm/>
          </Route>
          <Route exact path="/">
            <JobHome/>
          </Route>
          <Route path="*">
            <h1>No Hipsters or Jobs Here</h1>
          </Route>
        </Switch>
      </div>
    );
  }

export default App;
