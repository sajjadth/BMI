import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Normal from "./components/normal/main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: 0,
      advanced: false,
    };
    this.handleForm = this.handleForm.bind(this);
  }
  handleAdvance() {
    this.setState({ advanced: true });
  }
  handleNormal() {
    this.setState({ advanced: false });
  }
  handleForm(e) {
    e.preventDefault();
    const height = Number($("#height").val());
    const weight = Number($("#weight").val());
    const bmi = weight / ((height / 100) * (height / 100));
    if (bmi % 1 === 0) {
      this.setState({ bmi: Number(bmi) });
    } else {
      const bmiFixed = bmi.toFixed(1);
      this.setState({ bmi: Number(bmiFixed) });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center container">
          <div className="w-100 ml-5 d-flex flex-row justify-content-start align-items-center mt-2">
            <input
              type="button"
              className="btn btn-secondary m-0"
              id="advance-btn"
              value="advance"
              onClick={() => this.handleAdvance()}
            />
            <input
              type="button"
              className="btn btn-secondary m-0"
              id="normal-btn"
              value="normal"
              onClick={() => this.handleNormal()}
            />
          </div>
          {this.state.advanced === false ? (
            <Normal formControl={this.handleForm} bmi={this.state.bmi} />
          ) : (
            console.log(50)
          )}
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    const normal = $("#normal-btn");
    const advance = $("#advance-btn");

    this.state.advanced === false
      ? normal.removeClass("btn-secondary") &&
        normal.addClass("btn-light") &&
        advance.addClass("btn-secondary") &&
        advance.removeClass("btn-light")
      : this.state.advanced === true
      ? advance.addClass("btn-light") &&
        advance.removeClass("btn-secondary") &&
        normal.addClass("btn-secondary") &&
        normal.removeClass("btn-light")
      : null;
  }
  componentDidUpdate() {
    const normal = $("#normal-btn");
    const advance = $("#advance-btn");

    this.state.advanced === false
      ? normal.removeClass("btn-secondary") &&
        normal.addClass("btn-light") &&
        advance.addClass("btn-secondary") &&
        advance.removeClass("btn-light")
      : this.state.advanced === true
      ? advance.addClass("btn-light") &&
        advance.removeClass("btn-secondary") &&
        normal.addClass("btn-secondary") &&
        normal.removeClass("btn-light")
      : null;
  }
}

export default App;
