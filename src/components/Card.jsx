import React from "react";
import { FaCalendarAlt, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProfileCard = ({ setModalControl }) => {
  const data = {
    name: "Khyati Rupani",
    image:
      "https://www.balancenutrition.in/images/aboutUs/Khyati_Rupani_AboutUs.jpg",
    designation: "Founder and Chief Nutritionist",
    experience: "19 Years+",
    clients: "75000+",
    socialMedia: {
      instagram: "https://www.instagram.com/nutritionist_khyatirupani",
      linkedin: "https://www.linkedin.com/in/nutritionistkhyatirupani",
      twitter: "https://x.com/khyatirupani_bn",
      youtube: "https://www.youtube.com/channel/UCRBg_eWt2yJreg8AZXPGvKA",
      website: "https://balancenutrition.in/",
    },
    amount: 300,
    location: "Bur Dubai",
    date: "29th & 30th Jan 2025"
  };
  // }
  return (
    <div className="w-[420px] bg-white shadow-lg rounded-xl overflow-hidden border-2 border-gray-300 mx-4">
      <div className="relative">
        <img
          className=" shadow-lg object-cover"
          src={
            "https://media.licdn.com/dms/image/v2/D4D16AQHdUUjaV43TLA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1682316263167?e=2147483647&v=beta&t=qKE88SApBTtLxr-S4t9t3axyJxSJKTvmKyQGnHNSE8g"
          }
          alt="Profile"
        />
        <img
          className="w-32 h-32 rounded-full border-2 border-gray-50 shadow-lg absolute top-6 md:top-10 left-4"
          src={data.image}
          alt="Profile"
        />
        {/* <div className="flex justify-center mt-4">
        </div> */}

        <div className="hidden md:flex justify-end mr-6 items-center gap-6 mt-4">
          <Link
            to={data.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600"
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            to={data.socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaLinkedin size={30} />
          </Link>
          <Link
            to={data.socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaXTwitter size={27} />
          </Link>
          <Link
            to={data.socialMedia.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600"
          >
            <FaYoutube size={34} />
          </Link>
        </div>
      </div>
      {/* <div className="relative">
        <p>lorem10</p>
      </div> */}

      <div className="mt-20 md:mt-8  ml-8">
        <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
        <p className="text-sm font-medium text-gray-500">{data.designation}</p>
      </div>
      <div className="mt-4 ml-8 flex gap-4">
        <div className="text-center">
          <p>Experience: </p>
          <p className="text-sm font-medium text-gray-500">{data.experience}</p>
        </div>
        <div className="border-l border-black h-12"></div>
        <div className="text-center">
        <p>No. of Clients: </p>
        <p className="text-sm font-medium text-gray-500">{data.clients}</p>
        </div>
      </div>

<div className="flex justify-between mx-8">

      <div className=" flex items-center gap-2 mt-5">
        <FaLocationDot className="text-blue-700" size={20} />
        <p>{data.location}</p>
      </div>
      <div className=" flex items-center gap-2 mt-5">
        <FaCalendarAlt className="text-green-700" size={20} />
        <p>{data.date}</p>
      </div>
</div>

      <p className="text-center text-gray-500 mt-3">
        Consultation Fees:{" "}
        <span className="font-medium text-green-700">AED {data.amount}</span>
      </p>

      <div
        className="flex justify-center mt-6 mb-4"
        onClick={() => setModalControl(true)}
      >
        <button className="px-6 py-2 text-sm bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105">
          Pay & Book Now
        </button>


      </div>

      <div className="md:hidden flex justify-between items-center mt-4 bg-gray-100">
          <Link
            to={data.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 py-2 px-4 border-r-2 border-gray-300"
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            to={data.socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 py-2 px-4 border-r-2 border-gray-300"
          >
            <FaLinkedin size={30} />
          </Link>
          <Link
            to={data.socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900  py-2 px-4 border-r-2 border-gray-300"
          >
            <FaXTwitter size={27} />
          </Link>
          <Link
            to={data.socialMedia.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 py-2 px-4 border-r-2 border-gray-300"
          >
            <FaYoutube size={30} />
          </Link>
          <Link
            to={data.socialMedia.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3FBEC9] hover:text-[#3FBEC9] py-2 px-4"
          >
            <IoEarthOutline size={30} />
          </Link>
        </div>
    </div>
  );
};

export default ProfileCard;
