import React from "react";

function Hipster({name, bio, myCompanies}) {   
  return (
    <div>
      <p>{name}</p>
      <p>{bio}</p>
      <p>{myCompanies}</p>
    </div>    
  )
}

export default Hipster;