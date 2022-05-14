import React, { useState } from "react";
import Fig from "./components/FigComponent";
// import React, {Component} from "react";
// import Aspect from "./components/Aspect";
// import Cardlayout, { DoIt, DoIt2 as Do } from "./components/cardlayout";

// if (checkBalance === true){

//   if (isActive ===true && balance > 0){
//      console.log("Your balance is $" + balance.toFixed(2) + ".");
//  }
//   else if ( isActive === false ){
//      console.log("Your account is no longer active.");
//  }

//  else if ( isActive=== true && balance === 0){
//      console.log("Your account is empty");
//  }
//  else if (isActive === true && balance < 0){
//      console.log("Your account negative. Please contact bank");
//  }
//  }
//     else{ console.log("Thank you Have a nice day!");}

// if (flavor === "vanilla" || flavor === "chocolate" && vessel === "cone" || vessel === "bowl" && toppings === "sprinkles" || toppings === "peanuts" ) {
//   console.log(""I'd like two scoops of" + flavor + "ice cream in a" + vessel + "with" + toppings + ".")
// }

// function Grid() {
//   return (
//     <main>
//       <section className="start">
//         <div className="navi">
//           <nav>
//             <ul>
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">Contact</a>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         <div className="cover">
//           <Aspect />
//         </div>
//       </section>
//     </main>
//   );
// }

// // export default Grid;

// // new design on children and more

// function MyApp() {
//   const [tab, setTab] = useState(0);
//   const [name, setName] = useState("");

//   let content;
//   if (tab === 0) {
//     content = (
//       <div style={{ display: "flex" }}>
//         <Cardlayout>
//           <h1>My header</h1>
//           <p>some text</p>
//         </Cardlayout>
//         <Cardlayout>
//           <p> Some text</p>
//           <ul>
//             <li>item 1</li>
//           </ul>
//         </Cardlayout>
//         <Cardlayout />
//         <DoIt />
//         <Do />
//       </div>
//     );
//   } else {
//     content = (
//       <div style={{ fontSize: 100 }}>
//         <p>This is for places</p>
//         <input
//           placeholder="Your Name"
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//         />
//         <button>Submit</button>
//         {name && <p>Your name is {name}</p>}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <ul>
//         <li onClick={() => setTab(1)}>Places</li>
//         <li onClick={() => setTab(0)}>Pictures</li>
//       </ul>

//       {content}
//     </div>
//   );
// }

// export default MyApp;

function myCart() {
  return (
    <main>
      <section className="chart">
        {/* <h3>My Cart</h3> */}
        <section className="grid-two">
          <div className="holds">
            {/* <h3>My Cart</h3> */}
            <Fig price={430} />
            <Fig />
            <Fig />
            <Fig />
          </div>
        </section>

        <div className="butts">
          <button>
            <a href="#">Proceed to Checkout</a>
          </button>
        </div>
      </section>
    </main>
  );
}

export default myCart;

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
