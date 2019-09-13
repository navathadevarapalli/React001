import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 25
    };
    this.handleStartStop = this.handleStartStop.bind(this);
  }

  handleStartStop() {
    let counter = setInterval(timer, 50);
    this.state.count *= 60;
    function timer() {
      this.setState({
        count: (this.state.count -= 1)
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <p id="timer-label"> Session</p>
          <p id="time-left">{this.state.count}</p>
        </div>

        <button id="start_stop" onClick={this.handleStartStop}>
          Start/Stop
        </button>
      </div>
    );
  }
}

export default App;
