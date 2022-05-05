import React from "react";

export default function Cardlayout(prop) {
  return (
    <div
      style={{
        border: "40px solid red",
        width: 300,
        height: 300,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {prop.children}
    </div>
  );
}

export const DoIt = () => {
  return <h2>This is a sub heading</h2>;
};

export const DoIt2 = () => {
  return <h3>This is a sub sub heading</h3>;
};
