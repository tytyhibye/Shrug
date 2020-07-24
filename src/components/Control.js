import React, { useState, useEffect, useSelector } from "react";
import ShrugForm from "./ShrugForm";
import Result from "./Result";
import { withFirestore, isLoaded } from "react-redux-firebase";
import firebase from '../firebase';

const splashStyles = {
  marginTop: '20%'
}

export default function GetRestaurant(props) {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [restaurant, setRestaurant] = useState([]);
  const [error, setError] = useState(null);

  useEffect((props) => {
    const { ShrugForm } = props; 
      return fetch(`https://api.yelp.com/v3/businesses/search?location=${ShrugForm.location}&price=${ShrugForm.price}`, {
        method: 'GET',
        headers: new Headers({
          'Authorization': 'Bearer' + process.env.YELP_API_KEY,
          'Content-Type': 'application/json'
        })
      })
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          setRestaurant(jsonifiedResponse.restaurant);
          console.log(jsonifiedResponse.resaurant);
        })
      .catch((error) => {
        setError(error);
      });
  }, [])

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  };

  const formSubmissionHandler = (event) => {
      event.preventDefault();
      props.onApiCall({
        price: event.target.price.value,
        location: event.target.location.value
      });
    }

  const handleReroll = (event) => {
    event.preventDefault();
    // re-math.random()
  }

  const handleSuccess = (event) => {
    event.preventDefault();
    // add restaurant to user's database
  }

  let currentlyVisibleState = null;
  let buttonText = null;
  const auth = firebase.auth();

  if (!isLoaded(auth)) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else if (isLoaded(auth) && auth.currentUser == null) {
    console.log(auth.currentUser, 'user returning null');
    return (
      <div style={splashStyles}>
        <img src=""/>
        <h6>Please <a href="/signIn">sign in</a> to begin.</h6>
      </div>);
  } else if (isLoaded(auth) && auth.currentUser != null) {
    if (formVisibleOnPage) {
      currentlyVisibleState = <ShrugForm onFormSubmission={makeApiCall}/>
      buttonText = "Feed Me";
    } else {
      currentlyVisibleState = 
      <Result 
      // resulted restaurant
      onClickingReRoll={handleReroll}
      onClickingSuccess={handleSuccess}/>
      buttonText = "Roll Again";
    }
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <buton className="controlBtn" onClick={handleClick}>
        {buttonText}
      </buton>
    </React.Fragment>
  );
}