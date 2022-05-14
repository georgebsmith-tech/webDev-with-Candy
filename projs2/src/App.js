import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <main>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">About </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<About />} />
      </Routes>
    </main>
  );
}
