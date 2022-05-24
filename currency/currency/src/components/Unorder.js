import React from "react";
import { Link } from "react-router-dom";

export default function Unorder() {
  return (
    <section className="listedFour">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/deposit">deposit</Link>
        </li>
        <li>Fees</li>
        <li>Merchant</li>
      </ul>
    </section>
  );
}
