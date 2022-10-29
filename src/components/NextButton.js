import React from "react";

function NextButton({handleNext, hipsterPosition, allHipsters}) {
  if (hipsterPosition < (allHipsters.length)-1 ){
    return (        
      <button onClick={handleNext}>▶️</button>    
    );
  } else {
    return null
  }
}
export default NextButton;