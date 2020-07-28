import React, { useState, useEffect, useSelector } from "react";
import ShrugForm from "./ShrugForm";
import { Button } from "react-bootstrap";
import Result from "./Result";
import { withFirestore, isLoaded } from "react-redux-firebase";
import firebase from "../firebase";
import PropTypes from "prop-types";

const splashStyles = {
  marginTop: "20%",
};

function GetRestaurant(props) {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  // const [restaurants, setRestaurants] = useState([]);
  // const [error, setError] = useState(null);

  const makeApiCall = async (props) => {
    console.log("inside api call");
    console.log("api props" + props);
    let response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${props.location}&radius=500&types=restaurant&price_level=${props.price}&key=${process.env.GOOGLE_API_KEY}`,
      {
        mode: 'no-cors',
        method: "GET",
        headers: new Headers({
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

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   if (formVisibleOnPage) {
  //     // makeApiCall();
  //     setFormVisibleOnPage(!formVisibleOnPage);
  //   }
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(props);
    props.makeApiCall({
      price: event.target.price.value,
      location: event.target.location.value,
    });
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  

  // const handleReroll = (event) => {
  //   event.preventDefault();
  //   // call math.random function;
  // };

  // const handleSuccess = (event) => {
  //   event.preventDefault();
  //   // add restaurant to user's database
  // };

  let currentlyVisibleState = null;
  // let buttonText = null;
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
      currentlyVisibleState = <ShrugForm onFormSubmission={formSubmissionHandler} />
      console.log("form loaded");
    } else {
      currentlyVisibleState = (
        console.log('results page goes here')
        // <Result
        //   // name={restaurant.name}
        //   // address={restaurant.vicinity}
        //   // map={restaurant.html_attributions}
        // />
      );
      // <Button
      //     onClick={handleClick}
      //     className="searchButton"
      //     variant="outline-success"
      //     >
      //    Roll Again
      //   </Button>
    }
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      {/* <Button
          onClick={handleClick}
          className="searchButton"
          variant="outline-success"
          >
         {buttonText}
        </Button> */}
    </React.Fragment>
  );
}

GetRestaurant.propTypes = {
  makeApiCall: PropTypes.func
};

export default GetRestaurant;