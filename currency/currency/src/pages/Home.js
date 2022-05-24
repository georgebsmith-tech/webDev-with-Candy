import React from "react";

import Myfunds from "../components/fund";
import Current from "../components/current";
import Btc from "../components/Btc";
import Token from "../components/Token";
import Polygon from "../components/polygon";
import Dashpart from "../components/Dashpart";
import Graph from "../components/Graph";
import Search from "../components/Search";
import Ring from "../components/Ring";

const Top = () => {
  return (
    <div className="blue-image">
      <div className="fiat">
        <p>Your Fiat Balance</p>
        <h2>NGN35,000</h2>
        <section className="three">
          <Myfunds image="deposit 1" type="Deposit" />

          <Myfunds image="buy sell 1" type="Buy/Sell" />

          <Myfunds image="Layer 1" type="Withdraw" />
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
      <div className="deg">
        <Current value={36} />
        {/* <Polygon /> */}
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
        <Btc coin="USDT" image="usdt 1" color="#53AE94" />
        <Btc coin="XRP" image="xrp 1" color="#0D0E0F" />
        <Btc coin="DOGE" image="doge 1" color="#C2A633" />
        <Btc coin="EOS" image="eos 1" color="#000000" />
        <Token />
      </section>
    </div>
  );
};

function Bitcoin() {
  return (
    <main>
      <section
        className="template"
        style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1.2fr" }}
      >
        <section>
          <Dashpart />
        </section>
        <section className="white">
          <section className="bar">
            <Search />
          </section>
          <section className="overview">
            <h3 className="view">Overview</h3>
            {/* <div className="holder"> */}
            <Top />
            <Middle />
            <Bottom />
          </section>
        </section>
        <section className="notify">
          <section className="history">
            <Graph />
          </section>
        </section>
      </section>
    </main>
  );
}

export default Bitcoin;
