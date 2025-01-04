import React from "react";
import Form1 from "./components/Form1";
import Popup from "./components/PopUp";
import RazorpayPayment from "./components/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Congrates from "./components/Congrates";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<RazorpayPayment />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/payment" element={<RazorpayPayment />} /> */}
          <Route path="/congrats" element={<Congrates />} />
        </Routes>
      </Router>
    </>
  );
}
