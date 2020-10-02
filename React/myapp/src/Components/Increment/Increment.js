import React, { Component } from "react";

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementHandler = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Changes Value TO ", this.state.count);
      }
    );
  };

  incrementHandler2 = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  incrementFiveHandler = () => {
    this.incrementHandler2();
    this.incrementHandler2();
    this.incrementHandler2();
    this.incrementHandler2();
    this.incrementHandler2();
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.incrementFiveHandler}>Increment 5</button>
      </div>
    );
  }
}

export default Increment;
