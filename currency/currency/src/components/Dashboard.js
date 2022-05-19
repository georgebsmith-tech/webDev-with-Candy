import React from "react";
import Payments from "./payments";
import Peer from "./peer";

export default function Dashboard() {
  return (
    <section className="big">
      <div className="buger">
        <div className="log">
          <img src="Logo.png" />
        </div>
        <div className="ham">
          <img src="hamburger.svg" />
        </div>
      </div>
      <section className="paid">
        <Payments image="box 4" title="Overview" />
        <Payments image="wallet address 1" title="Wallet Address" />
        <Payments image="transact" title="Transaction" />
        <Payments image="savings 1" title="Savings" />
        <Payments image="settings" title="Settings" />
        <Payments image="security" title="Security" />
      </section>
      <section className="peerimage">
        <Peer />
      </section>
    </section>
  );
}
