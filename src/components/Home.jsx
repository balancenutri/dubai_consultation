import React, { useState } from "react";
import ProfileCard from "./Card";
import RazorpayPayment from "./Payment";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-center max-h-screen h-screen bg-gray-100">
      <div className="w-[500px] h-[500px] [perspective:1000px]">
        <div
          className={`relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] ${
            isModalOpen ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute w-full h-full [backface-visibility:hidden] flex justify-center items-center  text-xl rounded-lg ">
            <ProfileCard setModalControl={setIsModalOpen} />
          </div>
          <div className="absolute w-full h-full [backface-visibility:hidden] flex justify-center items-center  text-xl rounded-lg  [transform:rotateY(180deg)]">
            <RazorpayPayment setModal={setIsModalOpen} amount={100} />
          </div>
        </div>
      </div>
    </div>
  );
}
