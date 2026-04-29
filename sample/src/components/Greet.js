import React from "react";
function Greet(props) {
  return (
    <div>
      {/* <h1>Hello,hi this is {props.name}!</h1> */}
      <h1>React Functional Component</h1>
      <h2> {props.name}{props.value}</h2>
      <h1>{props.id} {props.name}</h1>
    </div>
  );
}

export default Greet;