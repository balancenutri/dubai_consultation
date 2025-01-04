import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Form1 from "./Form1";
import axios from "axios";
import toast from "react-hot-toast";
import BookConsultationForm from "./BookConsultationForm";

export default function Congrates() {
  const location = useLocation();
  const state = location.state;
  console.log({ state });

  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.response?.razorpay_payment_id) {
      navigate("/"); // Navigate only when state is validated.
    }
  }, [state, navigate]);

  const url = "http://192.168.1.131:3000/api/v1/dubai/update-payment-status";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.patch(url, {
          consultation_id: state.consultation_id,
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    toast.success("Payment Received Successfully")
  }, [state.consultation_id]);
  return (
    <div className="flex justify-center items-center h-screen">
      {state?.response?.razorpay_payment_id && <BookConsultationForm consultation={state?.consultation_id} />}
    </div>
  );
}
