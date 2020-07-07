import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Bill Splitter</h1>
        <p id="info">
          Ever went to a Restaurant with friends and you can't divide the bill
          equally because of the annoying vegetarian guy who refused to pay for
          the items he didn't eat and then the maths get tough. We are here to
          help you with that
        </p>
      </React.Fragment>
    );
  }
}

export default Welcome;
