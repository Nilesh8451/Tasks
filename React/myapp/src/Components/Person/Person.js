import React from "react";

const Person = (props) => {
  return (
    <div>
      <h3>
        Hi, my name is {props.name} and i am {props.age} years old.
      </h3>

      <p>{props.children}</p>
    </div>
  );
};

export default Person;
