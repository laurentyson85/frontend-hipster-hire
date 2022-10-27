import React, { useState, useEffect } from 'react';

function HipsterView() {
  const [allHipsters, setAllHipsters] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/hipsters")
    .then(response => response.json())
    .then(data => setAllHipsters(data))
  }, [])




  return (
    <div>hipsters</div>
    
  )
}

export default HipsterView;