import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { formControl } = this.props;
    return (
      <React.Fragment>
        <div className="w-100 d-flex justify-content-center align-items-center" id="input">
          <form
            className="d-flex flex-sm-row flex-column justify-content-center align-items-center"
            onSubmit={(e) => formControl(e)}
          >
            <input
              type="number"
              className="form-control m-2 w-100"
              id="height"
              placeholder="height cm"
              min="100"
              required
            />
            <input
              type="number"
              className="form-control m-2 w-100"
              id="weight"
              placeholder="weight"
              required
            />
            <input
              type="submit"
              className="btn btn-success m-2 w-100"
              id="submit"
              value="submit"
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Input;
