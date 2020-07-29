import React, { useState } from "react";
import ReactDom from "react-dom";
import ShrugForm from "./ShrugForm";
import { Spinner } from "react-bootstrap";
import Result from "./Result";
import { withFirestore, isLoaded } from "react-redux-firebase";
import firebase from "../firebase";

const splashStyles = {
  marginTop: "20%",
};

const splashImg = {
  width: "400px",
};

const spinnerz = {
  margin: "0 auto",
}

function GetRestaurant(props) {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  // const [restaurant, setRestaurants] = useState(null);
  // const [error, setError] = useState(null);
  const [showResult, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const toggleResult = () => {
    setShow(true);
  };

  let loadingScreen = (
    <div style={spinnerz}>
      <Spinner color="success" />
      <Spinner color="danger" />
      <Spinner color="warning" />
      <Spinner color="info" />
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
    setShow(true);

    // .then(response => response.json())
    // .then((jsonifiedResponse) => {
      // console.log(jsonifiedResponse.results)
      // setResult(jsonifiedResponse.results)
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //   })

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

  

  // const handleReroll = (event) => {
  //   event.preventDefault();
  //   // call math.random function;
  // };

  // const handleSuccess = (event) => {
  //   event.preventDefault();
  //   // add restaurant to user's database
  // };

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
      currentlyVisibleState = <Result resultList={showResult} getModal={toggleResult}/>
    
    
    }
  }
  return (
    <div>
      {currentlyVisibleState}
    </div>
  );
}


export default GetRestaurant;