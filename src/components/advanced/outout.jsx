import React from "react";

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          id="output"
        >
          <div
            id="bmi-output"
            className=" d-flex flex-column justify-content-center align-items-center"
          >
            <h1 id="bmi-output-number">{this.props.bmi}</h1>
            <h4 id="bmi-output-text" className=" ml-5 mr-5 text-center">
              normal
            </h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Output;
