// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RazorpayPayment = () => {
//   const [amount, setAmount] = useState(500);
//   const navigate = useNavigate();

//   const handlePayment = () => {
//     const key = import.meta.env.VITE_RAZORPAY_KEY_ID;

//     const options = {
//       key: key,
//       amount: amount * 100,
//       currency: "INR",
//       name: "Kundan",
//       description: "Payment for your Test",
//       //   image: "https://your-logo-url.com",
//       handler: function (response) {
//         // Handle payment success
//         navigate("/congrats");
//       },
//       prefill: {
//         name: "John Doe",
//         email: "john.doe@example.com",
//         contact: "9999999999",
//       },
//       notes: {
//         address: "Test address",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const razorpay = new window.Razorpay(options);
//     razorpay.open();
//   };

//   return (
//     <div className="App flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl text-center font-semibold mb-4">
//           Razorpay Payment
//         </h2>
//         <div className="mb-4">
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//             placeholder="Enter amount"
//           />
//         </div>
//         <button
//           onClick={handlePayment}
//           className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
//         >
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RazorpayPayment;

import axios from "axios";
import React, { useState } from "react";
import { FaRegUser, FaTimes } from "react-icons/fa";
import { MdOutlineLocalPhone, MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RazorpayPayment = ({ setModal }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const amount = 1000;

  const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const api = `${apiUrl}/dubai/add-consultation`;

  const handlePayment = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      amount,
      admin_id: 88,
    };
    const responses = await axios.post(api, data);
    console.log("Form submitted successfully:", responses.data.data);
    const options = {
      key: key,
      amount: amount * 100,
      currency: "INR",
      name: name,
      description: "Payment for your Test",
      handler: function (response) {
        console.log(response);
        navigate("/congrats", {
          state: {
            email: email,
            name: name,
            phone: phone,
            amount: amount,
            response: response,
            consultation_id: responses.data?.data?.consultation_id,
            mentor_id: 88,
          },
        });
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        address: "Test address",
      },
      theme: {
        color: "#3399cc",
      },
    };
    console.log(options);

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    // <div className="flex justify-center items-center bg-gray-100 mx-3">
    <div className="w-[95vw] md:w-[450px] bg-white shadow-xl rounded-xl px-6 py-8">
      <div className=" flex justify-end ">
        <FaTimes
          className="size-5  cursor-pointer"
          onClick={() => setModal(false)}
        />
      </div>
      <h2 className="text-center -mt-7 text-2xl font-semibold text-gray-800 mb-6 underline">
        Enter Your Details
      </h2>

      {/* Form */}
      <form onSubmit={handlePayment}>
        <div className="flex flex-col space-y-2 mb-4 relative">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Enter Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 pl-10 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <FaRegUser className="absolute top-8 left-2" size={24} />
        </div>
        <div className="flex flex-col space-y-2 mb-4 relative">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Enter Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 pl-10 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <MdOutlineMail className="absolute top-8 left-2" size={26} />
        </div>

        <div className="flex flex-col space-y-2 mb-6 relative">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Enter Phone Number
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 pl-10 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <MdOutlineLocalPhone className="absolute top-8 left-2" size={26} />
        </div>

        <div className="flex justify-center items-center mt-4">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default RazorpayPayment;
