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

  return (
    <div style={ReusableFormStyle}>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control
            price='1'
            type='radio'
            defaultValue='checked' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            price='2'
            type='radio' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            price='3'
            type='radio' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            price='4'
            type='radio' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            location='location'
            type='text'
            placeHolder='City' />
        </Form.Group>
        <Form.Group>
          <Form.Control>
            <br /> <br />
            <Button className='Btn' type='submit'>
              {props.buttonText}
            </Button>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}

ShrugForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ShrugForm;