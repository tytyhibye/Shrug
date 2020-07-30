import React from "react";
import NavBar from "./NavBar";
import Control from "./Control";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css';

function App() {
  return (
    <Router>
      <div className="navBar">
        <NavBar />
      </div>
      <Switch>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/">
          <div className="Control">
            <Control />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
