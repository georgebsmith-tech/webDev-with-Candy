import React from "react";
import Polygon from "./polygon";

export default function Current({ value, show }) {
  return (
    <section className="your">
      <div className="total">
        <div className="validate">
          <div>
            <p className="cryptocurencies">
              This is the total value of all your cryptocurrencies at current
              prices
            </p>
          </div>
          <div className="naira">
            <div className="naira">
              <h4>NGN</h4>
              <p>
                {value} {show}
              </p>
            </div>
            <p>
              <Polygon />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
