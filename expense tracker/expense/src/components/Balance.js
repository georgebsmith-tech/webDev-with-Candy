import React from "react";

export default function balance(props) {
  return (
    <>
      <div className="balance">
        <h5>YOUR BALANCE</h5>
        <p>N{props.income - props.expenses}</p>
      </div>

      <div className="income">
        <p>
          INCOME
          <br />N{props.income}
        </p>
        <p>
          EXPENSE
          <br />N{props.expenses}
        </p>
      </div>
    </>
  );
}
