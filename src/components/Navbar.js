import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const navImg = {
  width: "75px",
};


function NavBar() {
  const [redirect, setRedirect] = useState(null);
  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("Successfully signed out!");
        setRedirect(null);
        setRedirect(<Redirect to="/signIn" />);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function gitHubRepo() {
    window.location ='https://github.com/tytyhibye/Shrug';
  }
  function homeSkies(){
    window.location ='https://shrug-76e04.firebaseapp.com/';
  }

  return (
    <React.Fragment>
      {redirect}
      <Navbar className="navBar" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand><img style={navImg} src="https://iili.io/dAwz3x.png" alt="Shrug Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" variant="dark" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="homeLink" onClick={()=>homeSkies()}>
                  Home
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="outLink" onClick={doSignOut}>
                Sign Out
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="ghIcon" onClick={()=>gitHubRepo()}>
                <img
                className="ghIcon"
                src="https://i.ibb.co/gyGGjwz/githubicon.png" alt="github icon"/>    Project Repo
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className="searchButton" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
