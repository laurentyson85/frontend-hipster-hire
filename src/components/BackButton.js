import React from "react";

function BackButton({handleBack, hipsterPosition}) {  
  if (hipsterPosition > 0){
    return (        
      <button onClick={handleBack}>◀️</button>    
    );
  } else {
    return null
  }
  
}
export default BackButton;