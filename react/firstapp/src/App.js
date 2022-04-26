import { useState } from "react";

function MyApp() {
  return (
    <div>
      <h2>My header</h2>
      <div>This is for me</div>
    </div>
  );
}
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>Item 1</li>
          <li>item 2</li>
        </ul>
      </nav>
    </header>
  );
}
function Counter() {
  let [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function redo() {
    setCount(0);
  }
  return (
    <div
      style={{
        backgroundColor: "blue",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p style={{ color: "white", fontSize: 30 }}>{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={redo}>RESET</button>
    </div>
  );
}

function MyCounter() {
  //values that are to change are called states

  // function Counter() {
  //   return (
  //     <div
  //       style={{
  //         backgroundColor: "blue",
  //         padding: 20,
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //       }}
  //     >
  //       <p style={{ color: "white", fontSize: 30 }}>{count}</p>
  //       <button onClick={increase}>+</button>
  //       <button onClick={decrease}>-</button>
  //       <button onClick={redo}>RESET</button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Header></Header>
      <Counter />
    </div>
  );
}

export default MyCounter;
