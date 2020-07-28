import React from "react";
import { Button, Form } from "react-bootstrap";
import { PropTypes } from "prop-types";
const FormStyle = {
  marginTop: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
};


function ShrugForm(props) {
  console.log(props)
  return (
    <div style={FormStyle}>
      <Form className="formStyle" onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Label>
            <h4>Hungry huh? Let's find you something to eat</h4>
          </Form.Label>
          <Form.Control className="formDrop" as="select">
            <option price="1">Select a Price Range</option>
            <option price="1">$</option>
            <option price="2">$$</option>
            <option price="3">$$$</option>
            <option price="4">$$$$</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control className="formDrop" as="select">
            <option location="45.523064, -122.676483">Select a City</option>
            <option location="45.523064, -122.676483">Portland</option>
            <option location="47.608013, -122.335167">Seattle</option>
          </Form.Control>
        </Form.Group>
        <br /><br />
        <Button
          onClick={props.handleClick}
          className="searchButton"
          variant="outline-success"
          type="submit"
          >
         Feed Me
        </Button>
      </Form>
    </div>
  );
}

ShrugForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ShrugForm;
