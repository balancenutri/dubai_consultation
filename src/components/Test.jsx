import React from "react";
import { Link } from "react-router-dom";

export default function Test() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center mx-3  max-w-[400px]">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-center">
            We're overwhelmed by your response! All slots are fully booked right
            now. Please check back soon or reach out for updates.
          </p>
          <Link to={"https://balancenutrition.in/"}>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transform hover:scale-105 transition-transform duration-300">
              Okay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
