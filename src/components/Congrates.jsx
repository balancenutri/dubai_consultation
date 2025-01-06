// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Form1 from "./Form1";
// import axios from "axios";
// import toast from "react-hot-toast";
// import BookConsultationForm from "./BookConsultationForm";

// export default function Congrates() {
//   const location = useLocation();
//   const state = location.state;
//   console.log({ state });

//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!state?.response?.razorpay_payment_id) {
//       navigate("/"); // Navigate only when state is validated.
//     }
//   }, [state, navigate]);

//   const url = "http://192.168.1.131:3000/api/v1/dubai/update-payment-status";
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.patch(url, {
//           consultation_id: state.consultation_id,
//           payment_id: state.response.razorpay_payment_id,
//         });
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();

//     toast.success("Payment Received Successfully")
//   }, [state.consultation_id]);
//   return (
//     <div className="flex justify-center items-center h-screen">
//       {state?.response?.razorpay_payment_id && <BookConsultationForm consultation={state?.consultation_id} />}
//     </div>
//   );
// }


import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import BookConsultationForm from "./BookConsultationForm";

export default function Congrates() {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  // Redirect immediately if the state is invalid or missing
  useEffect(() => {
    if (!state?.response?.razorpay_payment_id) {
      // Redirect user to the home page or any other page if state is not valid
      navigate("/", { replace: true, state: null });
    }
  }, [state, navigate]);


  useEffect(() => {
    if (state?.response?.razorpay_payment_id) {
      // Check if the payment update has already been processed
      const paymentProcessed = sessionStorage.getItem("paymentProcessed");
  
      if (!paymentProcessed) {
        const url = `${apiUrl}/dubai/update-payment-status`;
        const fetchData = async () => {
          try {
            const response = await axios.patch(url, {
              consultation_id: state.consultation_id,
              payment_id: state.response.razorpay_payment_id,
            });
            console.log(response.data);
            toast.success("Payment Received Successfully");
  
            // Set the flag in sessionStorage to prevent future API calls
            sessionStorage.setItem("paymentProcessed", "true");
          } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Error in processing payment.");
          }
        };
        fetchData();
      }
    }
  }, [state]);
  
  return (
    <div className="flex justify-center items-center h-screen">
      {state?.response?.razorpay_payment_id && <BookConsultationForm consultation={state?.consultation_id} />}
    </div>
  );
}



  // Make the API request once the state is validated
  // useEffect(() => {
  //   if (state?.response?.razorpay_payment_id) {
  //     const url = "http://192.168.1.131:3000/api/v1/dubai/update-payment-status";
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.patch(url, {
  //           consultation_id: state.consultation_id,
  //           payment_id: state.response.razorpay_payment_id,
  //         });
  //         console.log(response.data);
  //         toast.success("Payment Received Successfully");
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //         toast.error("Error in processing payment.");
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [state]);