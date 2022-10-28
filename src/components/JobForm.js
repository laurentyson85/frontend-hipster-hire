import React, { useState } from "react";

function JobForm({addNewJob}) {
  const [jobData, setJobData] = useState({
    title: "",
    position: "",
    keySkill: "",
    employment: "",
    companyName: "",
  })


  function handleForm(event){
    setJobData({
      ...jobData, [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()

    fetch("http://localhost:9292/jobs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "title": jobData.title,
        "position": jobData.position,
        "key_skill": jobData.keySkill,
        "employment": jobData.employment,
        "company_name": jobData.companyName,
      })
    })
    .then(response => response.json())
    .then(addNewJob)    
    setJobData({
      title: "",
      position: "",
      keySkill: "",
      employment: "",
      companyName: "",
    })
    // history.push("/jobs")
  }
  return (
    <div className="createJob">
      <h2>Create a new job! Let's hire those hipsters</h2>
      <form onSubmit={handleSubmit}>
        <label>
            Job Title:
            <input type="text" name="title" value={jobData.title} onChange={handleForm}/>
        </label>
        <label>
            Job Position:
            <input type="text" name="position" value={jobData.position} onChange={handleForm} />
        </label>
        <label>
            What's the key skill?:
            <input type="text" name="keySkill" value={jobData.keySkill} onChange={handleForm}/>
        </label>
        <label>
            Employment:
            <input type="text" name="employment" value={jobData.employment} onChange={handleForm}/>
        </label>
        <label>
            Company Name:
            <input type="text" name="companyName" value={jobData.companyName} onChange={handleForm}/>
        </label>    
        <button type="submit">Add the job</button>
      </form>
    </div>
  );
}

export default JobForm;