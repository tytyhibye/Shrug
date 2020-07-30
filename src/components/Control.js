import React, { useState, useRef } from "react";
import ReactDom from "react-dom";
import ShrugForm from "./ShrugForm";
import { Spinner } from "react-bootstrap";
import Result from "./Result";
import { withFirestore, isLoaded } from "react-redux-firebase";
import firebase from "../firebase";

const splashStyles = {
  marginTop: "5%",
};

const splashImg = {
  // width: "400px",
  maxWidth: "70vw",
};

const spinnerz = {
  marginTop: "20%",
}

function GetRestaurant(props) {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  // const [restaurant, setRestaurants] = useState(null);
  // const [error, setError] = useState(null);
  const [showResult, setResult] = useState(null);
  const [loading, setLoading] = useState(false);


  let loadingScreen = (
    <div style={spinnerz}>
      <Spinner className="spinner1" animation="grow" variant="info" />
      <Spinner className="spinner2" animation="grow" variant="warning" />
      <Spinner className="spinner3" animation="grow" variant="danger" />
      <Spinner className="spinner4" animation="grow" variant="success" />
    </div>
  )
  const makeApiCall = async (call) => {
    console.log("fetch success");
    setLoading(true);
    let response;
   try {
    response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?price_level=${call.price}&types=restaurant&location=${call.location}&radius=4000&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
    )
  } catch(error){
    console.log(error, "fetch error");
  }
  let data;
  try {
    data = await response.json();
  } catch(error){
    console.log(error, "response error");
  }
    let restaurantList = data.results.map( ele => {
      return {name: ele.name, rating: ele.rating, vicinity: ele.vicinity, location: ele.geometry.location}
    });
    setResult(restaurantList);
    setLoading(false);
  };

  const formSubmissionHandler = (e, price, location) => {
    e.preventDefault();
    makeApiCall({
      price: price,
      location: location,
    });
    setFormVisibleOnPage(!formVisibleOnPage);
    return false;
  }

  let currentlyVisibleState = null;
  const auth = firebase.auth();
  if (loading) {
    return loadingScreen;
  }
  if (!isLoaded(auth)) {
    return loadingScreen;
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
    } else if(!!showResult) {
      currentlyVisibleState = <Result resultList={showResult} />
    }
  }
  return (
    <div>
      {currentlyVisibleState}
    </div>
  );
}


export default GetRestaurant;