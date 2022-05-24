import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import Deposit from "./Layout/Deposit";
// import Transfer from "./Layout/Transfer";
import "./index.css";
// import App from "./App";
import Link from "./Link";
import reportWebVitals from "./reportWebVitals";

// export default function Do() {
//   <BrowserRouter>
//     <Routes>
//       <Route path="deposit" element={<Deposit />}>
//         <Route path="transfer" element={<Transfer />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Link />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
