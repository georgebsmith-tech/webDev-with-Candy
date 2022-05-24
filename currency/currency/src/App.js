import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Deposit from "./pages/Deposit";
import Ours from "./pages/Ours";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="deposit" element={<Deposit />}></Route>
      <Route path="ours" element={<Ours />} />
    </Routes>
  );
}
