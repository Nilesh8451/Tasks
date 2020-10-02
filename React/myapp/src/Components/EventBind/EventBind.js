import React, { Component } from "react";

export default class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      name: "Nilesh",
    };
  }

  changeName() {
    this.setState({
      name: "Tushar",
    });
  }

  render() {
    return (
      //   <div>
      //     <p>{this.state.name}</p>
      //     <button onClick={this.changeName.bind(this)}>Change</button>
      //   </div>

      // Approach 2

      <div>
        <p>{this.state.name}</p>
        <button onClick={() => this.changeName()}>Change</button>
      </div>
    );
  }
}
