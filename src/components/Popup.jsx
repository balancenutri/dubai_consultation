import React, { useState } from "react";
import Form1 from "./Form1";
import RazorpayPayment from "./Payment";
import ProfileCard from "./Card";
import BookConsultationForm from "./BookConsultationForm";

export default function Popup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to close modal if clicked outside of it
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      closeModal();
    }
  };

  return (
    <>
      <div className="flex justify-center w-full items-center min-h-screen bg-gray-100">
        {/* <button
        onClick={openModal}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
      Book Call Pay 1000
      </button> */}
        {/* <ProfileCard setModalControl={setIsModalOpen} /> */}
        <BookConsultationForm />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modal"
        //   onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center"
        >
          {/* <Form1 /> */}
          <RazorpayPayment setModal={setIsModalOpen} />
        </div>
      )}
    </>
  );
}
