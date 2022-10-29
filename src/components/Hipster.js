import React from "react";
import { Link } from "react-router-dom"

function Hipster({name}) {   
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={scientificName} />
    </div>    
  )
}

export default Hipster;