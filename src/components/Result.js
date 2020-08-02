import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import MapContainer from "./GoogleMap.js";


const resultStyles = {
  marginTop: "5%",
  textAlign: "center",
}


const Result = ({resultList}) => {

  const[pick, setPick] = useState(resultList[Math.floor(Math.random() * resultList.length)]);
  const restaurant = () => {
  setPick(resultList[Math.floor(Math.random() * resultList.length)])
  };

  return (
    <div className="fadeIn" style={resultStyles}>
      <div className="returns">
        <h5>Let's Eat At...</h5>
        <h1 className="result">{pick.name}</h1>
        <br/>
        <h5 className="rating">It's Rated {pick.rating}/5 Stars!</h5>
        <br/>
        <h5>Location: {pick.vicinity}</h5>
        <br/>
      </div>
        <Button
          onClick={()=>restaurant()}
          className="searchButton"
          variant="info"
          size="lg"
          >
          Not into it? Click for another
        </Button>
        <br/><br/>
        <MapContainer lat={pick.location.lat} long={pick.location.lng}/>

    </div>
  );
}

export default Result;