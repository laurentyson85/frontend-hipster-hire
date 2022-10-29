import React, { useState, useEffect } from 'react';
import Hipster from './Hipster';
import HipsterForm from './HipsterForm';
import BackButton from './BackButton';
import NextButton from './NextButton';

function HipsterView({updateHipsterCount}) {
  const [allHipsters, setAllHipsters] = useState([])
  const [hipsterPosition, setHipsterPosition] = useState(0)
  const displayCount = 1

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

  function handleNext(){
    setHipsterPosition((hipsterPosition + displayCount)% allHipsters.length)
  }

  function handleBack(){
    setHipsterPosition((hipsterPosition - displayCount)% allHipsters.length)
  }









  const myHipsters = allHipsters.slice(hipsterPosition, hipsterPosition + displayCount).map(hipster => {
    return(
        <Hipster
        key={hipster.id}
        name={hipster.name}
        bio={hipster.bio}
        jobs={hipster.jobs}
        />
    )
}) 

  return (
    <div>
      <BackButton handleBack={handleBack}/>
      {myHipsters}
      <NextButton handleNext={handleNext} />
      <HipsterForm addNewHipster={addNewHipster}/>    
    </div>
    
    
  )
}

export default HipsterView;