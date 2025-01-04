import { DatePicker, Select } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Form1({ id, consultation }) {
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [allSlot, setAllSlot] = useState([]);

  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();
  const url = `${apiUrl}/dubai/book-consultation`
  const onChange = async (data) => {
    setDate(dayjs(data).format("DD-MM-YYYY"));
    const consultationUrl = `${apiUrl}/dubai/check-slots?id=${id}&date=${dayjs(
      data
    ).format("YYYY-MM-DD")}`;
    const response = await fetch(consultationUrl);
    const responseData = await response.json();
    console.log(responseData?.[0]?.data);
    setAllSlot(
      responseData?.[0]?.data?.map(({ id, appointment_slots }) => ({
        value: id,
        label: appointment_slots,
      }))
    );
  };

  const onSelectChange = async (value) => {
    // setSlot(data.slots[0]);
    setSlot(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const data = ({ schedule_date : date, slot_id : slot, consultation_id: consultation });

    const responses = await axios.post(url, data);
    console.log("Form submitted successfully:", responses.data);

    if (responses.data?.status == "success") {
        toast.success("Consultation Booked Successfully...");
        navigate("/");
    }
  };

  return (
    <div className="w-[450px] bg-white shadow-xl rounded-lg px-6 py-8">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6 underline">
        Book Consultation
      </h2>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <label
          for="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Consultation Time
        </label>
        <DatePicker
          format={"DD-MM-YYYY"}
          minDate={dayjs()}
          maxDate={dayjs().add(9, "day")}
          className="w-full h-10"
          onChange={onChange}
        />
        <label
          for="countries"
          className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Consultation Time
        </label>
        <Select
          className="w-full h-10"
          placeholder="Select Consultation Time"
          optionFilterProp="label"
          onChange={onSelectChange}
          options={allSlot}
        />
        <div className="flex justify-center items-center mt-4">
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}
