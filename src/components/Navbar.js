import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";

const navImg = {
  width: "75px",
};
const navLinkStyles = {
  marginLeft: "10%",
}


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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={<img style={navImg} src="https://iili.io/dAwz3x.png" alt="Shrug Logo" />} variant="dark" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="homeLink" onClick={()=>homeSkies()}>
                  <div className="noWrap">
                    <FontAwesomeIcon icon={faHome}/><p style={navLinkStyles}>Home</p>
                  </div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="outLink" onClick={doSignOut}>
                <div className="noWrap">
                  <FontAwesomeIcon icon={faSignOutAlt}/><p style={navLinkStyles}>Log Out</p>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="ghIcon" onClick={()=>gitHubRepo()}>
                  <div className="noWrap">
                    <FontAwesomeIcon icon={faGithubAlt}/><p style={navLinkStyles}>Git Hub</p>
                  </div>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Coming Soon" className="mr-sm-2" />
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
