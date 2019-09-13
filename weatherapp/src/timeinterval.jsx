import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
        window.navigator.geolocation.getCurrentPosition(
          position => console.log(position.coords.latitude),
          err => console.log(err.message)
        );
      }, 3000);
  }
  render() {
    return <div>Latitude:{this.state.lat}</div>;
  }
}

export default App;
