import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import {Loader} from 'google-maps';

const resultStyles = {
  marginTop: "10%",
  textAlign: "center",
}

const mapStyles = {
  width: "600",
  height: "450",
  frameborder: "0",
  style: "border:0",
}


const Result = ({resultList}) => {
  
  const[pick, setPick] = useState(resultList[Math.floor(Math.random() * resultList.length)]);
  const restaurant = () => {
  setPick(resultList[Math.floor(Math.random() * resultList.length)])
  };
  console.log(pick.location, "pick.location");

  const loader = new Loader('AIzaSyCn1qPmMXvv8o-dQ21scGdw9Kbj-52PiaE');

  let map;
  
  let initMap = loader.load().then(function (google) {
      return map = new google.maps.Map(document.getElementById('map'), {
            center: pick.location,
            zoom: 10,
        });
      }); 
  

     

  return (
    <div style={resultStyles}>
      <h4>Let's Eat Here!</h4>
      <br/>
        <h1>{pick.name}</h1>
        <br/>
        <iframe
          id="map"
          style={mapStyles}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCn1qPmMXvv8o-dQ21scGdw9Kbj-52PiaE&q=callback=initMap"
          allowfullscreen>
        </iframe>
        {/* <div id="map"></div> */}
        <br/>
        <h6>It's Rated {pick.rating}/5 Stars!</h6>
        <h6>Location: {pick.vicinity}</h6>
        <br/><br/>
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