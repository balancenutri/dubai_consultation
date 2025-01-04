import React, { useState } from 'react'
import ProfileCard from './Card';
import RazorpayPayment from './Payment';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
 
    return (
      <>
        <div className="flex justify-center w-full items-center min-h-screen bg-gray-100">
          <ProfileCard setModalControl={setIsModalOpen} />
        </div>
  
        {isModalOpen && (
          <div
            id="modal"
            className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center"
          >
            <RazorpayPayment setModal={setIsModalOpen} />
          </div>
        )}
      </>
    );
  }
  