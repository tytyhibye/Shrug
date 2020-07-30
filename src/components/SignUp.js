import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";
import { Button } from "react-bootstrap";


function SignUp() {
  const [redirect, setRedirect] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.SignUpEmail.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password === confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function () {
          console.log("successfully signed up");
          setRedirect(<Redirect to="/signIn" />);
        })
        .catch(function (error) {
          console.log(error.message);
        });
    } else {
      alert("Please make sure your passwords match");
    }
  }
  return (
    <React.Fragment>
      {redirect}
      <div className="fadeIn">
        <h1>Sign Up</h1>
        <br/><br/>
        <form onSubmit={doSignUp}>
          <input type="text" name="SignUpEmail" placeholder="Email" />
          <br />
          <input type="password" name="password" placeholder="Password" />
          <br />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <br />
          <br />
          <Button
            className="searchButton"
            variant="outline-info"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
