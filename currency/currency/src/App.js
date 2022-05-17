import React from "react";
import "./App.css";
import Myfunds from "./components/fund";
import Current from "./components/current";
import Btc from "./components/Btc";
import Token from "./components/Token";

function Bitcoin() {
  return (
    <main>
      <section className="white">
        <section className="overview">
          <div className="holder">
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
            </div>
          </div>

          <section className="twoparts">
            <div>
              <Current value={"1,234,567"} />
            </div>
            <div>
              <Current value={36} />
            </div>
          </section>

          <section className="dodge">
            <h4>Your Portfolio</h4>
            <Btc />
            <Btc />
            <Btc />
            <Btc />
            <Btc />
            <Token />
          </section>
        </section>
      </section>
    </main>
  );
}

export default Bitcoin;
