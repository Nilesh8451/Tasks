import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of iceCreams - {props.noOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCreams</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfIceCreams: state.iceCream.noOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
