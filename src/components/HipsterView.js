import React, { useState, useEffect } from 'react';
import Hipster from './Hipster';
import HipsterForm from './HipsterForm';

function HipsterView() {
  const [allHipsters, setAllHipsters] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/hipsters")
    .then(response => response.json())
    .then(data => setAllHipsters(data))
  }, [])

  function addNewHipster(newHipster){  
    const updatedHipsters = [...allHipsters, newHipster]
    console.log(updatedHipsters)
  }


  const myHipsters = allHipsters.map(hipster => {
    return(
        <Hipster
        key={hipster.id}
        name={hipster.name}
        bio={hipster.bio}
        myCompanies={hipster.my_companies}
        />
    )
}) 




  return (
    <div>{myHipsters}
    <HipsterForm addNewHipster={addNewHipster}/>
    </div>
    
    
  )
}

export default HipsterView;