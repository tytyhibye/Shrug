import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

const resultStyles = {
  marginTop: "10%",
  textAlign: "center",
}

const Result = ({resultList}) => {
  
  const[pick, setPick] = useState(resultList[Math.floor(Math.random() * resultList.length)]);
  const restaurant = () => {
    setPick(resultList[Math.floor(Math.random() * resultList.length)])};
  
  return (
    <div style={resultStyles}>
      <h1>Let's Eat Here!</h1>
        <h4>{pick.name}</h4>
        <h6>It's Rated {pick.rating}/5 Stars!</h6>
        <h6>Location: {pick.vicinity}</h6>
        {/* <p>{pick.location}</p> */}
        <Button
          onClick={()=>restaurant()}
          className="searchButton"
          variant="outline-success"
          >
          Shrug
        </Button>
    </div>
  );
}


export default Result;