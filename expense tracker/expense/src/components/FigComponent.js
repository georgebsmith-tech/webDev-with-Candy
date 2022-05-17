import React, { useState } from "react";

export default function Fig(props) {
  let [count, setCount] = useState(0);

  function plus() {
    setCount(count + 1);
    //  var count <= 10;
  }

  function minus() {
    setCount(count - 1);
  }

  return (
    <div className="segment">
      <div className="images">
        <div className="rice">
          <img src="/rice.svg"></img>
        </div>

        <div>
          <p className="foreign">Foreign perboiled rice 500g</p>
          <br />
          <br />
          <p className="grocery">
            {props.item}
            <br />
            <span className="value">N{props.price}</span>
          </p>
        </div>
      </div>

      <div className="part">
        <div className="arithemetric">
          <div className="image-first" onClick={minus}>
            <img src="/minus sign.svg" />
          </div>
          <div>
            <p>{count}</p>
          </div>
          <div className="image-second" onClick={plus}>
            <img src="/increment.svg" />
          </div>
        </div>

        <div className="font">
          <div className="save">
            <img src="/heart.svg" />
            <p>Save</p>
          </div>

          <div className="delete">
            <img src="/delete.svg"></img>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
}
