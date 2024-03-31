import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiSteeringWheel, PiSteeringWheelFill } from "react-icons/pi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const CarCard = (props: any) => {
  const [car, setCar] = useState<any>();

  useEffect(() => {
    if (props.car) {
      setCar(props.car);
    }
  }, [props.car]);
  return (
    car && (
      <div className="group bg-gray-50 p-2 sm:p-5 hover:bg-white hover:border-[1px] cursor-pointer duration-50 border-orange-500 rounded-3xl m-1 sm:m-5 shadow-md">
        <h2 className="text-[20px] font-medium mb-2 text-black"> {car.name}</h2>
        <h2 className="text-[28px] font-bold mb-2 text-black">
          <span className="text-[12px] font-light">Rs. </span>
          {car.price}
          <span className="text-[14px] font-light"> /day</span>
        </h2>
        <Image
          src={car.image?.url}
          alt={car.name}
          width={220}
          height={200}
          className="w-[250px] h-[150px] mb-3 object-contain"
        />
        <div className="flex justify-around group-hover:hidden">
          <div className="text-center text-gray-500">
            <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car.carType}
            </h2>
          </div>
          <div className="text-center text-gray-500">
            <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">{car.seat} Seat</h2>
          </div>{" "}
          <div className="text-center text-gray-500">
            <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car.carAvg} KMPL
            </h2>
          </div>
        </div>
        <button className="hidden group-hover:flex bg-gradient-to-r from-orange-400 to-orange-600  p-2 rounded-lg text-white w-full px-5 justify-between">
          Rent Now
          <span className="bg-orange-500 p-1 rounded-md">
            <FaArrowRight size={15} />
          </span>
        </button>
      </div>
    )
  );
};

export default CarCard;