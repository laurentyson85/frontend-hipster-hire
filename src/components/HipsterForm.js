import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function HipsterForm({addNewHipster}) {
  const navigate = useNavigate()
  const [newHipsterData, setnewHipsterData] = useState({
    name: "",
    bio: "",
  })


  function handleForm(event){
    setnewHipsterData({
      ...newHipsterData, [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()

    fetch("http://localhost:9292/hipsters", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "name": newHipsterData.name,
        "bio": newHipsterData.bio,
      })
    })
    .then(response => response.json())
    .then(addNewHipster)    
    setnewHipsterData({
      name: "",
      bio: "",
    })
  }
  return (
    <div className="createHipster">
      <h2>Join us, hipsters!</h2>
      <form onSubmit={handleSubmit}>
        <label>
            What's your name, hipster?:
            <input type="text" name="name" value={newHipsterData.name} onChange={handleForm}/>
        </label>
        <label>
            Add your bio:
            <input type="text" name="bio" value={newHipsterData.bio} onChange={handleForm} />
        </label>        
        <button type="submit">Submit - let's find you a job!</button>
      </form>
    </div>
  );
}

export default HipsterForm;