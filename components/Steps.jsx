import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaCarAlt } from "react-icons/fa";
const Steps = () => {
  return (
    <div className="mt-[7%]">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-sm text-white">How It Works</h3>
        <h1 className="text-2xl font-semibold">Our Working Steps</h1>
        <div className="flex justify-between space-x-8 mt-[4%]">
          <div className="w-[250px] h-[250px] border border-white border-opacity-20  rounded-2xl flex flex-col justify-center items-center space-y-5">
            <div className="bg-gray-300 bg-opacity-20 rounded-full p-4 ">
              <IoLocationSharp size={36} />
            </div>
            <div className="text-center flex flex-col space-y-4">
              <h3 className="font-semibold text-base">Choose Location</h3>
              <p className="text-xs px-[5%] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                quaerat tenetur neque optio reprehenderit.
              </p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] border border-white border-opacity-20  rounded-2xl flex flex-col justify-center items-center space-y-5">
            <div className="bg-gray-300 bg-opacity-20 rounded-full p-4 ">
              <CiCalendar size={36} />
            </div>
            <div className="text-center flex flex-col space-y-4">
              <h3 className="font-semibold text-base">Pick Up Date</h3>
              <p className="text-xs px-[5%] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                quaerat tenetur neque optio reprehenderit.
              </p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] border border-white border-opacity-20  rounded-2xl flex flex-col justify-center items-center space-y-5">
            <div className="bg-gray-300 bg-opacity-20 rounded-full p-4 ">
              <FaCarAlt size={36} />
            </div>
            <div className="text-center flex flex-col space-y-4">
              <h3 className="font-semibold text-base">Book Your Car</h3>
              <p className="text-xs px-[5%] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                quaerat tenetur neque optio reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
