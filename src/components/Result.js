import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const Result = ({resultList}) => {

  const[pick, setPick] = useState(resultList[Math.floor(Math.random() * resultList.length)]);
  
  console.log(resultList, "MAIN RESULT FUNCTION resultList");

  const restaurant = () => {
    console.log(resultList, "RESTAURANT resultList/JSONIFIED RESPONSE");
    setPick(resultList[Math.floor(Math.random() * resultList.length)]);
    console.log(pick, "END RESULT")
  }
  return (
    <React.Fragment>
      <h1>Let's Eat Here!</h1>
      <h4>{pick.name}</h4>
       <h6>{pick.rating}</h6>
       <h6>{pick.vicinity}</h6>
       {/* <p>{pick.location}</p> */}
      <Button
        onClick={()=>restaurant()}
        className="searchButton"
        variant="outline-success"
        >
        Roll Again
      </Button>
    </React.Fragment>
  );
}


export default Result;