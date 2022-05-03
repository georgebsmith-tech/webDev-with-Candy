import React from "react";
import Aspect from "./components/Aspect";

function Grid() {
  return (
    <main>
      <section className="start">
        <div className="navi">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="cover">
          <Aspect />
        </div>
      </section>
    </main>
  );
}

export default Grid;

// import Item from "./components/Item";
// import { useState } from "react";
// import Check from "./components/Balance";

// function Expense() {
//   const [income, setIncome] = useState(0);
//   const [text, setText] = useState("");

//   const [expenses, setExpenses] = useState(0);
//   const [items, setItems] = useState([]);

//   const [amount, setAmount] = useState("");

//   const updateValue = () => {
//     if (amount[0] === "-") {
//       setExpenses(amount.substr(1) * 1 + expenses * 1);
//     } else {
//       setIncome(amount * 1 + income * 1);
//     }
//     setItems([...items, { text: text, price: amount }]);
//     setAmount("");
//     setText("");
//   };

//   return (
//     <main>
//       <div className="tracker">
//         <div className="track">
//           <h2 className="head">Expense Tracker</h2>

//           <Check income={income} expenses={expenses} />

//           <section className="history">
//             <h3>History</h3>

//             <div className="items">
//               {items.map((item) => (
//                 <Item text={item.text} price={item.price} />
//               ))}
//             </div>
//           </section>

//           <section className="add">
//             <div className="trans">
//               <h3>Add New Transaction</h3>
//               <div className="trance">
//                 <div className="enter">
//                   <p>Text</p>
//                   <input
//                     value={text}
//                     onChange={(e) => setText(e.target.value)}
//                     type="text"
//                     placeholder="Enter text"
//                   />
//                 </div>

//                 <div className="quantity">
//                   <p>Amount</p>
//                   <p>(negative - expense, positive - income)</p>
//                   <input
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     type="text"
//                     placeholder="0"
//                   />
//                 </div>

//                 <div className="butt">
//                   <button onClick={updateValue}>Add Transaction</button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Expense;
