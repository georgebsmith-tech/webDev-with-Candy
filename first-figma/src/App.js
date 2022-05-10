import Anything from "./components/Product";
function App() {
  return (
    <div>
      <header></header>
      <section className="product">
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 15,
            padding: "9px 7vw",
          }}
        >
          <Anything
            product={{ name: "29kg rice", price: 400, img: "rice.svg" }}
          />
          <Anything
            product={{ name: "29kg Beans", price: 600, img: "bannana.svg" }}
          />

          <Anything
            product={{ name: "Big yam", price: 1000, img: "rice.svg" }}
          />

          <Anything
            product={{ name: "29kg rice", price: 400, img: "rice.svg" }}
          />

          <Anything
            product={{ name: "29kg rice", price: 400, img: "rice.svg" }}
          />
        </ul>
      </section>
    </div>
  );
}

// export default App;


import {useState} from "react";
function Figma(){
  return(
    <main>
      <section className="background">
        

      </section>
    </main>
  )
};

export default Figma;