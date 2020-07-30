import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import MapContainer from "./GoogleMap.js";


const resultStyles = {
  marginTop: "5%",
  textAlign: "center",
}

// const mapStyles = {
//   width: "60vw",
//   height: "30vh",
//   border: "5px red",
//   frameborder: "5",
//   style: "border:0",
//   margin: "0 auto",
// }


const Result = ({resultList}) => {
  
  const[pick, setPick] = useState(resultList[Math.floor(Math.random() * resultList.length)]);
  const restaurant = () => {
  setPick(resultList[Math.floor(Math.random() * resultList.length)])
  };
  console.log(pick.location, "pick.location");

  return (
    <div style={resultStyles}>
      <h5>Let's Eat At...</h5>
        <h1>{pick.name}</h1>
        <h6>It's Rated {pick.rating}/5 Stars!</h6>
        <br/>
        <h6>Location: {pick.vicinity}</h6>
        <br/><br/>
        <Button
          onClick={()=>restaurant()}
          className="searchButton"
          variant="dark"
          size="lg"
          // block
          >
          Not into it? Click for another
        </Button>
        <MapContainer lat={pick.location.lat} long={pick.location.lng}/>

    </div>
  );
}

export default Result;