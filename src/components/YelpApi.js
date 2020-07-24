// import React from 'react';


// YelpApiCall = () => {
//     fetch(`https://api.yelp.com/v3/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
//     .then(response => response.json())
//     .then(
//       (jsonifiedResponse) => {
//         this.setState({
//           isLoaded: true,
//           headlines: jsonifiedResponse.results
//         });
//       })
//       .catch((error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });
//       });
//   }

// export default YelpApiCall;

// import React from 'react';
// import { connect } from 'react-redux';
// import { makeApiCall } from '../actions/Index';

// class Remedies extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     const { dispatch } = this.props;
//     dispatch(makeApiCall());
//   }

// -------------------entries to return key/value pairs from API-------------

//   render() {
//     const { error, isLoading, remedies } = this.props;
//     //let myKeys = Object.keys(remedies); // [1,2,3]
//     //let myValues = Object.values(remedies); // ['red','blude]
//     let myEntries = Object.entries(remedies); // [[1, 'red'], [2,'blude']]
//     if (error) {
//       return <React.Fragment>Error: {error.message}</React.Fragment>;
//     } else if (isLoading) {
//       return <React.Fragment>Loading...</React.Fragment>;
//     } else {
//       return (
//         <React.Fragment>
//           <h1>Remedies</h1>
//           {console.log("i am in rendering")}
//           <ul>
//             {/*{myKeys.map((key, index) => <li>Currency: {key}  Rate : {myValues[index]}</li>)}*/}
//             {myEntries.map((entry, index) => <li key={index}>Currency: {entry[0]}  Rate : {entry[1]}</li>)}
//           </ul>
//         </React.Fragment>
//       );
//     }
//   }
// }

// const mapStateToProps = state => {
//   return {
//     remedies: state.remedies,
//     isLoading: state.isLoading,
//     error: state.error
//   }
// }

// export default connect(mapStateToProps)(Remedies);