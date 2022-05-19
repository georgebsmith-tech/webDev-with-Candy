import React from "react";

export default function Myfunds({ type, image }) {
  return (
    <section className="buy">
      <div className="sell">
        <div className="deposit-type">
          <img src={`/${image}.svg`} className="deposit-type" />
        </div>
        {type}
      </div>
    </section>
  );
}
