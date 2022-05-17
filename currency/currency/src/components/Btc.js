import React from "react";

export default function Btc({ coin, image = "btc 1", color }) {
  return (
    <section className="percent">
      <div className="dobs">
        <div className="svg">
          <img src={`/${image}.svg`} />
        </div>
        <div className="tbt">
          <p style={{ color }}>{coin}</p>
        </div>
      </div>
      <div className="ngn">
        <p>0.4567 = NGN 10,234,567</p>
      </div>

      <div className="polygon">
        <div>
          <img src="/Polygon 2.svg"></img>
        </div>
        <p>2.06%</p>
      </div>

      <div>
        <img src="/Group.svg" />
      </div>
    </section>
  );
}
