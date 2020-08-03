import React, { useState } from "react";
import ShrugForm from "./ShrugForm";
import { Spinner } from "react-bootstrap";
import Result from "./Result";
import { isLoaded } from "react-redux-firebase";
import firebase from "../firebase";



function GetRestaurant() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [showResult, setResult] = useState(null);
  const [loading, setLoading] = useState(false);


  let loadingScreen = (
    <div className="spinnerz">
      <Spinner className="spinner1" animation="grow" variant="info" />
      <Spinner className="spinner2" animation="grow" variant="warning" />
      <Spinner className="spinner3" animation="grow" variant="danger" />
      <Spinner className="spinner4" animation="grow" variant="success" />
    </div>
  )
  const makeApiCall = async (call) => {
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

      <div className="splash">
        <img className="splashImg animated bounceInDown"src="https://iili.io/dAwz3x.png" alt="Shrug Logo"/>
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