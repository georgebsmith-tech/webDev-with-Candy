import { useState } from "react";
import Card from "./Card";
// function MyApp() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   return (
//     <main>
//       <div className="wrapper">
//         <label>First name</label>
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//       </div>
//       <div className="wrapper">
//         <label>Last name</label>
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//       </div>
//       <p>
//         Your name is {firstName} {lastName} and he's kind
//       </p>
//     </main>
//   );
// }

// export default MyApp;

function CardHolder() {
  // props
  return (
    <div>
      <ul className="card-holder">
        <Card name="George" age={78} />
        <Card n="78" />
        <Card name="precious" age={35} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
}

export default CardHolder;
