import React from "react";
import Input from "./input";
import Output from "./outout";
import $ from "jquery";

class Normal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Input bmi={this.props.bmi} formControl={this.props.formControl} />
        <Output bmi={this.props.bmi} />
      </React.Fragment>
    );
  }
  componentDidMount() {
    const bmiText = $("#bmi-output-text");
    const output = $("#output");
    const bmiNumber = $("#bmi-output-number");
    if (this.props.bmi === 0) {
      bmiNumber.text("");
      bmiText.text(
        "This calculator provides BMI and It is used for both men and women, age 18 or older."
      );
    }
  }
  componentDidUpdate() {
    const bmiText = $("#bmi-output-text");
    const output = $("#output");
    const bmi = this.props.bmi;
    if (bmi === 0) {
      null;
    } else if (bmi < 16) {
      bmiText.text("Severe Thinness");
      output.css("background", "#332D85");
      output.css("color", "#ffffff");
    } else if (16 <= bmi && bmi < 17) {
      bmiText.text("Moderate Thinness");
      output.css("background", "#014A97");
      output.css("color", "#ffffff");
    } else if (17 <= bmi && bmi < 18.5) {
      bmiText.text("Mild Thinness");
      output.css("background", "#007179");
      output.css("color", "#ffffff");
    } else if (18.5 <= bmi && bmi < 25) {
      bmiText.text("Normal");
      output.css("background", "#12A04A");
      output.css("color", "#ffffff");
    } else if (25 <= bmi && bmi < 30) {
      bmiText.text("Overweight");
      output.css("background", "#FECB10");
      output.css("color", "#222222");
    } else if (30 <= bmi && bmi < 35) {
      output.css("color", "#222222");
      bmiText.text("Obese Class I");
      output.css("background", "#F8981B");
    } else if (35 <= bmi && bmi < 40) {
      output.css("color", "#ffffff");
      bmiText.text("Obese Class II");
      output.css("background", "#D6441D");
    } else if (bmi && bmi >= 40) {
      output.css("color", "#ffffff");
      bmiText.text("Obese Class III");
      output.css("background", "#D2232A");
    }
  }
}

export default Normal;
