import React from "react";

export default function Payments({ image, title }) {
  return (
    <div className="boxhold">
      <div className="boxes">
        <img src={`/${image}.svg`} />
        <p>{title}</p>
      </div>
    </div>
  );
}
