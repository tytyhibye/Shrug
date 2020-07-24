import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  const { restaurant } = props;

  return (
    <React.Fragment>
      <h1>Let's Eat Here!</h1>
      <h4>{restaurant.name}</h4>
      <h6>Here's the Menu: {restaurant.menu}</h6>
      <h6>Call {restaurant.phone} to make a reservation</h6>
      <br />
      <button onclick={props.onClickingSuccess}>Thumbs Up</button>
      <button onClick={props.onClickingReroll}>Thumbs Down</button>
    </React.Fragment>
  );
}

Result.propTypes = {
  onClickingSuccess: PropTypes.func,
  onClickingReroll: PropTypes.func
}

export default Result;