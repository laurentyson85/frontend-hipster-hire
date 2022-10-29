import React, { useState, useEffect } from 'react';
import Hipster from './Hipster';
import HipsterForm from './HipsterForm';

function HipsterView({updateHipsterCount}) {
  const [allHipsters, setAllHipsters] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/hipsters")
    .then(response => response.json())
    .then(data => setAllHipsters(data))
  }, [])

  function addNewHipster(newHipster){  
    const updatedHipsters = [...allHipsters, newHipster]
    setAllHipsters(updatedHipsters)
    updateHipsterCount(updatedHipsters)
  }


  const myHipsters = allHipsters.map(hipster => {
    return(
        <Hipster
        key={hipster.id}
        name={hipster.name}
        id={hipster.id}
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