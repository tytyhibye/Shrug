import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PropTypes } from "prop-types";


const FormStyle = {
  marginTop: "10%",
  display: "flex",
  justifyContent: "center",
};

const InlineFormStyle = {
  margin: "0 auto",
};


function ShrugForm(props) {
  const [price, setPrice] = useState("1");
  const [location, setLocation] = useState("45.523064, -122.676483");
  // console.log(props)
  function handlePriceChange(e) {
    e.preventDefault();
    console.log("Price Value",e.target.value);
    setPrice(e.target.value);
  }
  function handleLocationChange(e) {
    e.preventDefault();
    console.log("Location Value",e.target.value);
    setLocation(e.target.value);
  }
  return (
    <div style={FormStyle}>
      <Form className="formStyle" onSubmit={(e)=>props.onFormSubmission(e, price, location)}>
        <Form.Group>
          <Form.Label>
            <h4>Hungry huh? Let's find you something to eat</h4>
          </Form.Label>
          <Form.Control style={InlineFormStyle} onChange={handlePriceChange} className="formDrop" as="select">
            <option value = "1" >Select a Price Range</option>
            <option value = "1" >$</option>
            <option value = "2" >$$</option>
            <option value = "3" >$$$</option>
            <option value = "4" >$$$$</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control style={InlineFormStyle} onChange={handleLocationChange} className="formDrop" as="select">
            <option value = "45.523064,-122.676483">Select a City</option>
            <option value = "45.523064,-122.676483">Portland</option>
            <option value = "47.608013,-122.335167">Seattle</option>
          </Form.Control>
        </Form.Group>
        <br /><br />
        <Button
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
  onFormSubmission: PropTypes.func,
};

export default ShrugForm;
