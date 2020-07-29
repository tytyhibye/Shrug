import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";
import { Button } from "react-bootstrap";

const signInStyles = {
  marginTop: "20%",
  textAlign: "center",
};
function SignIn() {
  const [redirect, setRedirect] = useState(null);

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        console.log("successfully signed in");
        setRedirect(<Redirect to="/" />);
      })
      .catch(function (error) {
        
        console.log(error.message);
      });
  }

  return (
    <React.Fragment>
      {redirect}
      <div style={signInStyles}>
        <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
          <input type="text" name="signInEmail" placeholder="Email" />
          <br />
          <input type="password" name="signInPassword" placeholder="Password" />
          <br />
          <br />
          <Button
            className="searchButton"
            variant="outline-success"
            type="submit"
          >
            Sign In
          </Button>
          <br />
          <br />
          <h6>
            Not registered? Sign up <a href="/signUp">here</a>
          </h6>
        </form>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
