import React from "react";
import Image from "next/image";
import { FaCarRear } from "react-icons/fa6";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaRegSnowflake } from "react-icons/fa";

const CarList = () => {
  return (
    <div className="mt-[6%] mb-[4%]">
      <div className="flex flex-col space-y-3 justify-center items-center">
        <h3>Best Offer</h3>
        <h1 className="text-3xl font-semibold">Our Featured Car</h1>
      </div>

      <div className="cards mt-[4%] flex justify-center ">
        <div className="flex flex-col space-y-6">
          <div className="grid grid-flow-col md:col-span-3 col-span-1 gap-6 ">
            <div className="border-2 border-white rounded-xl border-opacity-15 w-[280px] h-[350px] bg-gray-900 bg-opacity-40 relative ">
              <div className="flex flex-col justify-center items-center mb-2">
                <Image
                  src="/Innova.png"
                  alt="Car"
                  className=""
                  width={150}
                  height={150}
                />
                <p>BMW</p>
              </div>
              <div className="">
                <p className="text-center py-2  bg-gray-800">
                  Starting at Rs. 3000/Day
                </p>
                <div className="flex justify-between items-center mx-10">
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FaCarRear
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        Sedan
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <BsFillDoorOpenFill
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Doors
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FiUsers
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Seats
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <FaRegSnowflake
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        AC/Heater
                      </span>
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 flex justify-center w-full border-t-2  border-white border-opacity-15 divide-x">
                  <button className="w-1/2 h-[40px] bg-gray-700  rounded-bl-lg font-semibold">
                    Details
                  </button>
                  <button className="w-1/2 bg-black bg-opacity-90 rounded-br-lg font-semibold">
                    Book
                  </button>
                </div>
              </div>
            </div>
            <div className="border-2 border-white rounded-xl border-opacity-15 w-[280px] h-[350px] bg-gray-900 bg-opacity-40 relative ">
              <div className="flex flex-col justify-center items-center mb-2">
                <Image
                  src="/Innova.png"
                  alt="Car"
                  className=""
                  width={150}
                  height={150}
                />
                <p>BMW</p>
              </div>
              <div className="">
                <p className="text-center py-2  bg-gray-800">
                  Starting at Rs. 3000/Day
                </p>
                <div className="flex justify-between items-center mx-10">
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FaCarRear
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        Sedan
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <BsFillDoorOpenFill
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Doors
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FiUsers
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Seats
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <FaRegSnowflake
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        AC/Heater
                      </span>
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 flex justify-center w-full border-t-2  border-white border-opacity-15 divide-x">
                  <button className="w-1/2 h-[40px] bg-gray-700  rounded-bl-lg font-semibold">
                    Details
                  </button>
                  <button className="w-1/2 bg-black bg-opacity-90 rounded-br-lg font-semibold">
                    Book
                  </button>
                </div>
              </div>
            </div>
            <div className="border-2 border-white rounded-xl border-opacity-15 w-[280px] h-[350px] bg-gray-900 bg-opacity-40 relative ">
              <div className="flex flex-col justify-center items-center mb-2">
                <Image
                  src="/Innova.png"
                  alt="Car"
                  className=""
                  width={150}
                  height={150}
                />
                <p>BMW</p>
              </div>
              <div className="">
                <p className="text-center py-2  bg-gray-800">
                  Starting at Rs. 3000/Day
                </p>
                <div className="flex justify-between items-center mx-10">
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FaCarRear
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        Sedan
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <BsFillDoorOpenFill
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Doors
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FiUsers
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Seats
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <FaRegSnowflake
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        AC/Heater
                      </span>
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 flex justify-center w-full border-t-2  border-white border-opacity-15 divide-x">
                  <button className="w-1/2 h-[40px] bg-gray-700  rounded-bl-lg font-semibold">
                    Details
                  </button>
                  <button className="w-1/2 bg-black bg-opacity-90 rounded-br-lg font-semibold">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col md:col-span-3 col-span-1 gap-6 ">
            <div className="border-2 border-white rounded-xl border-opacity-15 w-[280px] h-[350px] bg-gray-900 bg-opacity-40 relative ">
              <div className="flex flex-col justify-center items-center mb-2">
                <Image
                  src="/Innova.png"
                  alt="Car"
                  className=""
                  width={150}
                  height={150}
                />
                <p>BMW</p>
              </div>
              <div className="">
                <p className="text-center py-2  bg-gray-800">
                  Starting at Rs. 3000/Day
                </p>
                <div className="flex justify-between items-center mx-10">
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FaCarRear
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        Sedan
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <BsFillDoorOpenFill
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Doors
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FiUsers
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Seats
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <FaRegSnowflake
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        AC/Heater
                      </span>
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 flex justify-center w-full border-t-2  border-white border-opacity-15 divide-x">
                  <button className="w-1/2 h-[40px] bg-gray-700  rounded-bl-lg font-semibold">
                    Details
                  </button>
                  <button className="w-1/2 bg-black bg-opacity-90 rounded-br-lg font-semibold">
                    Book
                  </button>
                </div>
              </div>
            </div>
            <div className="border-2 border-white rounded-xl border-opacity-15 w-[280px] h-[350px] bg-gray-900 bg-opacity-40 relative ">
              <div className="flex flex-col justify-center items-center mb-2">
                <Image
                  src="/Innova.png"
                  alt="Car"
                  className=""
                  width={150}
                  height={150}
                />
                <p>BMW</p>
              </div>
              <div className="">
                <p className="text-center py-2  bg-gray-800">
                  Starting at Rs. 3000/Day
                </p>
                <div className="flex justify-between items-center mx-10">
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FaCarRear
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        Sedan
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <BsFillDoorOpenFill
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Doors
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FiUsers
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Seats
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <FaRegSnowflake
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        AC/Heater
                      </span>
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 flex justify-center w-full border-t-2  border-white border-opacity-15 divide-x">
                  <button className="w-1/2 h-[40px] bg-gray-700  rounded-bl-lg font-semibold">
                    Details
                  </button>
                  <button className="w-1/2 bg-black bg-opacity-90 rounded-br-lg font-semibold">
                    Book
                  </button>
                </div>
              </div>
            </div>
            <div className="border-2 border-white rounded-xl border-opacity-15 w-[280px] h-[350px] bg-gray-900 bg-opacity-40 relative ">
              <div className="flex flex-col justify-center items-center mb-2">
                <Image
                  src="/Innova.png"
                  alt="Car"
                  className=""
                  width={150}
                  height={150}
                />
                <p>BMW</p>
              </div>
              <div className="">
                <p className="text-center py-2  bg-gray-800">
                  Starting at Rs. 3000/Day
                </p>
                <div className="flex justify-between items-center mx-10">
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FaCarRear
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        Sedan
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <BsFillDoorOpenFill
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Doors
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col mt-4 space-y-2">
                    <p className="inline-flex ">
                      <FiUsers
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        4 Seats
                      </span>
                    </p>
                    <p className="inline-flex ">
                      <FaRegSnowflake
                        size={20}
                        fill="white"
                        className="bg-gray-500 bg-opacity-50 p-1 rounded-full"
                      />
                      <span className="text-xs flex justify-center items-center ml-2">
                        AC/Heater
                      </span>
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 flex justify-center w-full border-t-2  border-white border-opacity-15 divide-x">
                  <button className="w-1/2 h-[40px] bg-gray-700  rounded-bl-lg font-semibold">
                    Details
                  </button>
                  <button className="w-1/2 bg-black bg-opacity-90 rounded-br-lg font-semibold">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[4%] ">
        <button className="bg-gray-800 p-2 w-[180px] rounded-lg text-sm h-[45px] border-gray-200 border border-opacity-30">
          View All Cars
        </button>
      </div>
    </div>
  );
};

export default CarList;
