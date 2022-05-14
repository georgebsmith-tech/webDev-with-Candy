import React, { useState } from "react";

export default function Fig(props) {
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
            Vegetable
            <br />
            <span className="value">N{props.pricecd}</span>
          </p>
        </div>
      </div>

      <div className="shape">
        <div className="arithemetric">
          <div className="image-first">
            <img src="/minus sign.svg" />
          </div>
          <div className="image-second">
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
