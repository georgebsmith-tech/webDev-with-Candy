import React from "react";

export default function Product(props) {
  return (
    <li style={{}}>
      <div style={{ backgroundColor: "#F4F4F4", height: 240 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={`/images/${props.product.img}`} />
        </div>
      </div>

      <div>
        <p> {props.product.name}</p>
        <p>N{props.product.price}</p>
        <button> Add to Cart</button>
      </div>
    </li>
  );
}
