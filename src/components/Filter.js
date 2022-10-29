import React from "react";

function Filter({handleFilter}) {
  return (    
    <div className="filter">
      <label>Filter by Availability</label>        
      <select name="filter" onChange={handleFilter} >
        <option value="All">All</option>
        <option value={false}>Active - hire a hipster</option>
        <option value={true}>Expired - time to remove listing</option>
      </select>
    </div>
);
}

export default Filter;