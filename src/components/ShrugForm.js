import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const ReusableFormStyle = {
  marginTop: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
};

function ShrugForm(props) {
  function handleFormSubmission(event){
    event.preventDefault();
    props.onApiCall({
      priceRange: event.target.priceRange.value,
      zipCode: event.target.zipCode.value
    });
  }
  return (
    <div style={ReusableFormStyle}>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control
            priceRange='$'
            type='radio'
            defaultValue='checked' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            priceRange='$$'
            type='radio' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            priceRange='$$$'
            type='radio' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            zipCode='zipCode'
            type='text'
            placeHolder='Zip Code' />
        </Form.Group>
        <Form.Group>
          <Form.Control>
            <br /> <br />
            <Button className='Btn' type='submit'>
              {" "}{props.buttonText}{" "}
            </Button>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}

ShrugForm.propTypes = {
  onApiCall: Proptypes.func,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ShrugForm;