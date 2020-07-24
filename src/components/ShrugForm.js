import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const FormStyle = {
  marginTop: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
};
function ShrugForm(props) {

  return (
    <div style={FormStyle}>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Label>Price Range</Form.Label>
          <Form.Control as='select'>
            <option price='1'>$</option>
            <option price='2'>$$</option>
            <option price='3'>$$$</option>
            <option price='4'>$$$$</option>
          </Form.Control>
        </Form.Group>
    
        <Form.Group>
          <Form.Control
            location='location'
            type='text'
            placeHolder='City' />
        </Form.Group>
        <br /> <br />
        <Button className='controlBtn' type='submit'>Feed Me
        </Button>
      </Form>
    </div>
  );
}

ShrugForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ShrugForm;