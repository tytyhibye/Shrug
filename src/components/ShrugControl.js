import React from "react";
import Form from "./Form";
import Result from "./Result";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withFirestore, isLoaded } from "react-redux-firebase";

const homeStyles = {
  marginTop: '20%'
}

class ShrugControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  // handleClick = () => {
  //   if (this.setState((prevState) => (
  //     { formVisibleOnPage: !prevState.formVisibleOnPage }
  //   )));
  // }
};

handleAddingNewForm = () => {
  this.setState({ formVisibleOnPage: !this.state.formVisibleOnPage });
};

render() {
  let currentlyVisibleState = null;
  let buttonText = null;
  const auth = this.props.firebase.auth();

  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h4>Loading...</h4>
      </React.Fragment>
    );
  }
  if (isLoaded(auth) && auth.currentUser == null) {
    console.og(auth.currentUser, "user returning null");
    return (
      <div style={splashStyles}>
        <h3>
          Welcome to Shrug
          <br />
          <h6>For when you're too hungry to decide where to eat</h6>
        </h3>
        <h6>
          Please <a href="/signIn">sign in</a> to begin
        </h6>
      </div>
    );
  }
  if (isLoaded(auth) && auth.currentUser != null) {
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <Form
          onNewSuggestion={this.handleAddingNewForm}
          onClickingRoll={this.handleYelpApiCall}
        />
      );
    } else if (this.state.selectedRestaurant != null) {
      currentlyVisibleState =(
        <Result
        //result = {returned restaurant from yelp api goes here}
        onClickingRoll={this.handleYelpApiCall}
        />
      );
    } else {
      currentlyVisibleState = (
        <Splash
        onClickinglogo={this.handleAddingNewForm}
        />
      );
    }
    return (
      <React.Fragment>
        {curentlyVisibleState}
        {/* <button className="contlBtn" onClick={this.handleClick}>
          {buttonText}
        </button> */}
      </React.Fragment>
    );
  }
}

ShrugControl.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  };
};

ShrugControl = connect(mapStateToProps)(ProjectControl);

export default withFirestore(ProjectControl);