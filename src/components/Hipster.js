import React from "react";
import { Link } from "react-router-dom"
import mustache from "../images/mustache.png"

function Hipster({name, id}) {   
  return (
    <li className="card">
      <p>{name}</p>
      <img slassName ="mustacheImage" src={mustache} alt="hipster mustache"/>
      <Link className="biolink" to={`/hipsters/${id}`}>Read bio</Link>    
      </li>    
  )
}

export default Hipster;