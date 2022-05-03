import React from "react";

export default function Item(props) {
  console.log(props);
  return (
    <div className={`flower ${props.price[0] === "-" ? "one" : "two"}`}>
      <p>{props.text}</p>
      <p>
        {props.price[0] === "-" ? "-" : ""}N
        {props.price[0] === "-" ? props.price.substr(1) : props.price}
      </p>
    </div>
  );
}
