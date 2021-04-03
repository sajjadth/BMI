import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Input from "./components/input";
import Output from "./components/outout";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: 0,
    };
    this.handleForm = this.handleForm.bind(this);
  }
  handleForm(e) {
    e.preventDefault();
    const height = Number($("#height").val());
    const weight = Number($("#weight").val());
    const bmi = weight / ((height / 100) * (height / 100));
    if (bmi % 1 === 0) {
      this.setState({ bmi: bmi });
    } else {
      const bmiFixed = bmi.toFixed(1);
      this.setState({ bmi: bmiFixed });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center container">
          <Input bmi={this.state.bmi} formControl={this.handleForm} />
          <Output bmi={this.state.bmi} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
