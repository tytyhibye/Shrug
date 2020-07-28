import React, { useState, useEffect, useSelector } from "react";
import ShrugForm from "./ShrugForm";
import { Button } from "react-bootstrap";
import Result from "./Result";
import { withFirestore, isLoaded } from "react-redux-firebase";
import firebase from "../firebase";

const splashStyles = {
  marginTop: "20%",
};

export default function GetRestaurant(props) {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  // useEffect((props) => {
  // }, [])
  const makeApiCall = async () => {

    //console.log( props + "props in Api Call");
    let response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.523064,-122.676483&radius=500&types=restaurant&price_level=4&key=${process.env.GOOGLE_API_KEY}`,
      {
        mode: 'no-cors',
        method: "GET",
        headers: new Headers({
          // Authorization: "key" + process.env.GOOGLE_API_KEY,
          "Content-Type": "application/json",
        }),
      }
    )
    let data = await response.json();

    console.log(data);
      // .then((response) => response.json())
      // .then((jsonifiedResponse) => {
      //   setRestaurants(jsonifiedResponse.restaurants);
      //   console.log(jsonifiedResponse.resaurants);
      // })
      // .catch((error) => {
      //   setError(error);
      // });
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (formVisibleOnPage) {
      makeApiCall();
      setFormVisibleOnPage(!formVisibleOnPage);
    } 
  };

  

  // const handleReroll = (event) => {
  //   event.preventDefault();
  //   // call math.random function;
  // };

  // const handleSuccess = (event) => {
  //   event.preventDefault();
  //   // add restaurant to user's database
  // };

  let currentlyVisibleState = null;
  let buttonText = null;
  const auth = firebase.auth();

  if (!isLoaded(auth)) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else if (isLoaded(auth) && auth.currentUser == null) {
    console.log(auth.currentUser, "user returning null");
    return (
      <div style={splashStyles}>
        <img src="" />
        <h6>
          Please <a href="/signIn">sign in</a> to begin.
        </h6>
      </div>
    );
  } else if (isLoaded(auth) && auth.currentUser != null) {
    if (formVisibleOnPage) {
      currentlyVisibleState = <ShrugForm onFormSubmission={makeApiCall} />
      buttonText = "Feed Me";
    } else {
      currentlyVisibleState = (
        console.log('results page goes here')
        // <Result
        //   // name={restaurant.name}
        //   // menu={retaurant.url}
        //   // phone={restaurant.phone}
        //   onClickingReRoll={handleReroll}
        //   onClickingSuccess={handleSuccess}
        // />
      );
      buttonText = "Roll Again";
    }
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <Button
          onClick={handleClick}
          className="searchButton"
          variant="outline-success"
          >
         {buttonText}
        </Button>
      {/* <button className="formBtn" onClick={handleClick}>
        {buttonText}
      </button> */}
    </React.Fragment>
  );
}
