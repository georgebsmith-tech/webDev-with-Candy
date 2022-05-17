import React from "react";
import "./App.css";
import Myfunds from "./components/fund";
import Current from "./components/current";
import Btc from "./components/Btc";
import Token from "./components/Token";

const Top = () => {
  return (
    <div className="blue-image">
      <div className="fiat">
        <p>Your Fiat Balance</p>
        <h2>NGN35,000</h2>
        <section className="three">
          <Myfunds type="Deposit" style="color: blue" />

          <Myfunds type="Buy/Sell" />

          <Myfunds type="Withdraw" />
        </section>
      </div>
      {/* </div> */}
    </div>
  );
};

const Middle = () => {
  return (
    <section className="twoparts">
      <div>
        <Current value={"1,234,567"} />
      </div>
      <div>
        <Current value={36} />
      </div>
    </section>
  );
};

const Bottom = () => {
  return (
    <div style={{ marginTop: 47, width: "100%" }}>
      <h4>Your Portfolio</h4>
      <section className="dodge">
        <Btc coin="BTC" image="btc 1" color="" />
        <Btc coin="ETH" image="eth 1" color="rgba(69, 74, 117, 1)" />
        <Btc />
        <Btc />
        <Btc />
        <Token />
      </section>
    </div>
  );
};

function Bitcoin() {
  return (
    <main style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1.2fr" }}>
      <section></section>
      <section className="white">
        <section className="overview">
          {/* <div className="holder"> */}
          <Top />

          <Middle />
          <Bottom />
        </section>
      </section>
      <section></section>
    </main>
  );
}

export default Bitcoin;
