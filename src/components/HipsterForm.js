import React from "react";

function HipsterForm() {  


  return (
    <div className="newFood">
      <h2>Submit a new food to the database</h2>
      <form onSubmit={handleSubmit}>
        <label>
            Scientific name:
            <input type="text" name="scientificName" value={formData.scientificName} onChange={handleForm}/>
        </label>
        <label>
            Common name:
            <input type="text" name="commonName" value={formData.commonName} onChange={handleForm} />
        </label>
        <label>
            Food image url:
            <input type="text" name="image" value={formData.image} onChange={handleForm}/>
        </label>
        <label>
            Food group:
            <input type="text" name="group" value={formData.group} onChange={handleForm}/>
        </label>
        <label>
            Food sub-group:
            <input type="text" name="subGroup" value={formData.subGroup} onChange={handleForm}/>
        </label>
        <label>
            Foodie Fact:
            <textarea type="text" name="foodieFact" value={formData.foodieFact} onChange={handleForm}/>
        </label>      
        <button type="submit">Add Food!</button>
      </form>
    </div>
  );
}

export default HipsterForm;