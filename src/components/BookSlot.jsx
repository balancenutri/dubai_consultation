// import React, { useEffect } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import BookConsultationForm from "./BookConsultationForm";

// export default function Congrates() {
//   const location = useLocation();
//   const state = location.state;
//   const navigate = useNavigate();

//   const apiUrl = import.meta.env.VITE_BACKEND_URL;
//   const { id } = useParams();

//   useEffect(() => {
//     if (!paymentProcessed) {
//       const url = `${apiUrl}/dubai/check-payment-status?consultation_id=${id}`;
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(url);
//           console.log(response.data);
//         } catch (error) {
//           navigate("/", { replace: true, state: null });
//           console.error("Error fetching data:", error);
//           toast.error("Error in processing payment.");
//         }
//       };
//       fetchData();
//     }
//   }, [navigate]);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       {<BookConsultationForm consultation={state?.consultation_id} />}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon
import BookConsultationForm from "./BookConsultationForm";

export default function BookSlot() {
  const [loading, setLoading] = useState(true); // State to manage loading
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const url = `${apiUrl}/dubai/check-payment-status?consultation_id=${id}`;
      try {
        const response = await axios.get(url);

        console.log(response.data);
        if (response.data?.data?.payment_status) {
          console.log("Payment processed successfully.");
          setLoading(false); // Stop the loader
        } else {
          console.log("Payment not processed. Redirecting...");
          navigate("/", { replace: true, state: null });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/", { replace: true, state: null });
      }
    };

    fetchData();
  }, [id, navigate, apiUrl]);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <FaSpinner className="text-4xl text-blue-600 animate-spin" />
      ) : (
        <BookConsultationForm consultation={id} />
      )}
    </div>
  );
}
