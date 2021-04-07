import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Normal from "./components/normal/main";
import Advanced from "./components/advanced/main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: 0,
      advanced: false,
    };
    this.handleNormalForm = this.handleNormalForm.bind(this);
  }
  handleAdvance() {
    this.setState({ advanced: true });
    this.setState({ bmi: 0 });
  }
  handleNormal() {
    this.setState({ advanced: false });
    this.setState({ bmi: 0 });
  }
  handleNormalForm(e) {
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
  handleAdvancedForm(e) {
    e.preventDefault();
    const height = Number($("#height").val());
    const weight = Number($("#weight").val());
    const bmi = weight / ((height / 100) * (height / 100));
    const genderMale = $("#gender-male");
    const genderFemale = $("#gender-female");
    if (genderFemale.prop("checked")) {
      console.log("female");
    } else if (genderMale.prop("checked")) {
      console.log("male");
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
              id="advanced-btn"
              value="advanced"
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
            <Normal formControl={this.handleNormalForm} bmi={this.state.bmi} />
          ) : (
            <Advanced
              formControl={this.handleAdvancedForm}
              bmi={this.state.bmi}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    const normal = $("#normal-btn");
    const advanced = $("#advanced-btn");

    this.state.advanced === false
      ? normal.removeClass("btn-secondary") &&
        normal.addClass("btn-light") &&
        advanced.addClass("btn-secondary") &&
        advanced.removeClass("btn-light")
      : this.state.advanced === true
      ? advanced.addClass("btn-light") &&
        advanced.removeClass("btn-secondary") &&
        normal.addClass("btn-secondary") &&
        normal.removeClass("btn-light")
      : null;
  }
  componentDidUpdate() {
    const normal = $("#normal-btn");
    const advanced = $("#advanced-btn");

    this.state.advanced === false
      ? normal.removeClass("btn-secondary") &&
        normal.addClass("btn-light") &&
        advanced.addClass("btn-secondary") &&
        advanced.removeClass("btn-light")
      : this.state.advanced === true
      ? advanced.addClass("btn-light") &&
        advanced.removeClass("btn-secondary") &&
        normal.addClass("btn-secondary") &&
        normal.removeClass("btn-light")
      : null;
  }
}

export default App;
