var water = React.createClass({
  getInitialState() {
    return { currentTemp: 60}
  },
  render() {
    var stateOfMatter
    if (this.state.currentTemp <= 32) {
      stateOfMatter = 'Solid'
    } else if (this.state.currentTemp >= 212) {
      stateOfMatter = 'Gas'
    } else {
      stateOfMatter = 'Liquid'
    }

    return(
      <div>
          <p>At { this.state.currentTemp }°F, water is considered to be a "{ stateOfMatter }" state of matter.</p>
          <button onClick={this.addTemp}> + </button>
          <button onClick={this.reduceTemp}> - </button>
      </div>
    )
  },
  addTemp() {
    this.setState(function(previousState, currentProps) {
      return {currentTemp: previousState.currentTemp + 20};
    });
  },
  reduceTemp() {
    this.setState(function(previousState, currentProps) {
      return {currentTemp: previousState.currentTemp - 20};
    });
  }
})
