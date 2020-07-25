import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <React.Fragment>
      {redirect}
      <Navbar className="navBar" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Shrug</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/tytyhibye/Shrug">
              <img
                className="ghIcon"
                src="https://i.ibb.co/NVrQNnJ/gh-icon-white.png"
                alt="GitHub Icon"
              ></img>
            </Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="homeLink" to="/">
                  Home
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="outLink" onClick={doSignOut}>
                Sign Out
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
