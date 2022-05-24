import React from "react";
import Dashpart from "./components/Dashpart";
import Search from "./components/Search";
import Ring from "./components/Ring";

export default function Paid() {
  return (
    <main>
      <section className="twofr">
        <section>
          <Dashpart />
        </section>
        <section className="whiter">
          <section className="bars">
            <Search />

            <Ring />
          </section>
        </section>
      </section>
    </main>
  );
}
