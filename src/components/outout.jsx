import React from "react";

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.bmi}</h1>
      </React.Fragment>
    );
  }
}

export default Output;
