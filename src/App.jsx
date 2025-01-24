import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Congrates from "./components/Congrates";
import Home from "./components/Home";
import Workshop from "./workshop/Workshop";
import Consultation from "./consultation/Consultation";
import BookSlot from "./components/BookSlot";
import AvailableSlots from "./components/AvailableSlots";
import Test from "./components/Test";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/workshop" element={<Workshop />} /> */}
          {/* <Route path="/" element={<Consultation />} />
          <Route path="/book/:id" element={<BookSlot />} />
          <Route path="/slots" element={<AvailableSlots />} /> */}
        </Routes>
      </Router>
    </>
  );
}
