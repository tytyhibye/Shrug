// import React from 'react';
// import { Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';

// const Result = (props) => {
  
//   console.log(props, "MAIN RESULT FUNCTION PROPS");

//   const restaurant = (resultList) => {
//     console.log(resultList, "RESTAURANT PROPS/JSONIFIED RESPONSE");
//     const pick = resultList[Math.floor(Math.random() * resultList.length)];
//     console.log(pick, "END RESULT")
//     return pick;
//   }
//   return (
//     <React.Fragment>
//       {restaurant()}
//       {console.log(restaurant.pick)}
//       <h1>Let's Eat Here!</h1>
//       <h4>{restaurant.pick.name}</h4>
//       <h6>{restaurant.pick.vicinity}</h6>
//       <p>{restaurant.pick.html_attributions}</p>
//       <Button
//         onClick={props.restaurant()}
//         className="searchButton"
//         variant="outline-success"
//         >
//         Roll Again
//       </Button>
//     </React.Fragment>
//   );
// }

// Result.propTypes = {
//   onClick: PropTypes.func,
// };

// export default Result;