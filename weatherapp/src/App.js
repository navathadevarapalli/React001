import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errMessage: ""
    };

    setTimeout(() => {
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({ errMessage: err.message })
      );
    }, 3000);
  }
  render() {
    return <div>Latitude:{this.state.lat}</div>;
  }
}

export default App;
