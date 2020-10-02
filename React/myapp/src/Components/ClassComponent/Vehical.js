import React, { Component } from "react";
import "./Vehical.css";
class Vehical extends Component {
  state = {
    vehicals: [
      {
        id: 0,
        name: "Honda City",
        price: 2000000,
      },
      {
        id: 1,
        name: "Swift",
        price: 400000,
      },
    ],
  };

  switchNameHandler = () => {
    const newArray = [...this.state.vehicals];
    newArray[0] = {
      ...newArray[0],
      name: "BMW",
    };

    this.setState({
      vehicals: newArray,
    });
    console.log(this.state);
  };

  changeNameHandler = (event, id) => {
    const elementsIndex = this.state.vehicals.findIndex(
      (element) => element.id === id
    );

    let newArray = [...this.state.vehicals];

    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      name: event.target.value,
    };

    this.setState({
      vehicals: [...newArray],
    });
  };

  render() {
    return (
      <div className="vehical">
        <button onClick={this.switchNameHandler}>Switch</button>
        <h2>Dealer is {this.props.name}</h2>
        <h3>Vehical Name is {this.state.vehicals[0].name} </h3>
        <input
          onChange={(e) => this.changeNameHandler(e, 0)}
          value={this.state.vehicals[0].name}
        />
        <p>And Price is {this.state.vehicals[0].price}</p>
        <h3>Vehical Name is {this.state.vehicals[1].name} </h3>
        <input
          onChange={(e) => this.changeNameHandler(e, 1)}
          value={this.state.vehicals[1].name}
        />
        <p>And Price is {this.state.vehicals[1].price}</p>
      </div>
    );
  }
}

export default Vehical;
