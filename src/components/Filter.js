import React from "react";

function Filter(handleFilter) {
  return (    
    <div className="filter">
      <label>Filter by Availability</label>        
      <select name="filter" onChange={handleFilter} >
        <option value="All">All</option>
        <option value="true">Active Jobs</option>
        <option value="false">Past Openings</option>
      </select>
    </div>
);
}

export default Filter;