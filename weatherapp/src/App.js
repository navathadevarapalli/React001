import React from "react";
import "./App.css";
import SeasonDisplay from "./seasondisplay";
import Spinner from "./spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMessage: "" };

    setTimeout(() => {
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({ errMessage: err.message })
      );
    }, 3000);
  }

  render() {
    if (!this.state.lat && this.state.errMessage)
      return (
        <div
          className="alert alert-warning"
          role="alert"
          style={{ width: 180 }}
        >
          Error:{this.state.errMessage}
        </div>
      );
    if (!this.state.errMessage && this.state.lat)
      return (
        <div>
          <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
        </div>
      );
    else
      return (
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <Spinner message="Please accept the location request.."></Spinner>
        </button>
      );
  }
}

export default App;
