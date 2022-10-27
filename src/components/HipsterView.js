import React, { useState, useEffect } from 'react';
import Hipster from './Hipster';

function HipsterView() {
  const [allHipsters, setAllHipsters] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/hipsters")
    .then(response => response.json())
    .then(data => setAllHipsters(data))
  }, [])


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
    <div>{myHipsters}</div>
    
  )
}

export default HipsterView;