import React, { useState } from "react";
import ShrugForm from "./ShrugForm";
// import { Button } from "react-bootstrap";
// import Result from "./Result";
import { withFirestore, isLoaded } from "react-redux-firebase";
import firebase from "../firebase";

const splashStyles = {
  marginTop: "20%",
};

const splashImg = {
  width: "400px",
};

function GetRestaurant(props) {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [restaurant, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  const makeApiCall = async (call) => {
    console.log("fetch success");
   
    await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?price_level=${call.price}&types=restaurant&location=${call.location}&radius=4000&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
      {
        mode: 'no-cors'
      }
    )
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      setRestaurants(jsonifiedResponse.restaurant);
      console.log(jsonifiedResponse.resaurants);
    })
    .catch((error) => {
      setError(error);
    });
  };

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   if (formVisibleOnPage) {
  //     // makeApiCall();
  //     setFormVisibleOnPage(!formVisibleOnPage);
  //   }
  // };

  const formSubmissionHandler = (e, price, location) => {
    console.log("INSIDE FORM SUBMISSION" , e, price, location);
    e.preventDefault();
    makeApiCall({
      price: price,
      location: location,
    });
    setFormVisibleOnPage(!formVisibleOnPage);
    return false;
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
        <img style={splashImg} src="https://iili.io/dAwz3x.png" />
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


export default GetRestaurant;