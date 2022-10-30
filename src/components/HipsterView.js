import React, { useState, useEffect } from 'react';
import Hipster from './Hipster';
import HipsterForm from './HipsterForm';
import BackButton from './BackButton';
import NextButton from './NextButton';

function HipsterView({addNewHipster, allHipsters}) {  
  const [hipsterPosition, setHipsterPosition] = useState(0)
  const displayCount = 1    

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
    <>
    <div>      
      <HipsterForm addNewHipster={addNewHipster}/>
    </div> 
    <div className="belt">
      <BackButton handleBack={handleBack} hipsterPosition={hipsterPosition}/>
      {myHipsters}
      <NextButton handleNext={handleNext} hipsterPosition={hipsterPosition} allHipsters={allHipsters} />
    </div>
    </> 
  )
}

export default HipsterView;