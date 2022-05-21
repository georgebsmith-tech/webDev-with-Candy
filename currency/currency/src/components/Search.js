import React from "react";
import Unorder from "./Unorder";

export default function Search() {
  return (
    <section className="scope-order">
      <section className="scope">
        <div className="border">
          <div className="tit">
            {/* <p>Search</p> */}

            <input type="text" placeholder="Search" />
          </div>
          <div className="icon">
            <img src="/micro.svg" />
          </div>
        </div>
      </section>
      <section className="orderhold">
        <Unorder />
      </section>
    </section>
  );
}
