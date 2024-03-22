import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import Brand from '../components/Brand'
import Steps from '../components/Steps'
import Deals from '../components/Deals'
import CarList from '../components/CarList'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
const Hero = () => {
  return (
    <div className="hero ">
      <Navbar />

      <div className="flex mt-[6%] ">
        <div className="flex flex-col justify-center items-center w-1/2 space-y-6">
          <h2 className="uppercase text-white font-bold text-6xl  w-[75%]">
            We Rent the highest caliber automobiles
          </h2>
          <p className="text-white w-[75%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, quisquam. Ab ut officiis impedit.
          </p>
          <div className="flex items-start w-[75%] space-x-4">
            <button className="bg-gray-200 bg-opacity-20 w-[160px] h-[50px] rounded-lg font-semibold">
              Rent Now
            </button>
            <button className="w-[160px] h-[50px] rounded-lg border border-white font-semibold">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <Image
            src="/car.png"
            className="w-full h-full"
            width={600}
            height={500}
            alt="Car"
          />
        </div>
      </div>

      <div>
        <div className="bg-black bg-opacity-70 mx-[15%]  rounded-2xl h-[200px] ">
          <div className="px-[10%] py-[5%]">
            <div className="flex justify-between text-white ">
              <div className="flex flex-col space-y-4">
                <p>Where To Pick Up?</p>
                <div className="relative">
                  <IoLocationOutline className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black" />
                  <input
                    className="text-xs text-black pl-8 py-2 px-8 rounded-md"
                    type="text"
                    placeholder="Enter your location here"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="">Pick Up Date</p>
                <input
                  className="text-xs text-black  pl-8 py-2 px-4 rounded-md"
                  type="date"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <p className="">Return Date</p>
                <input
                  className="text-xs text-black  pl-8 py-2 px-4 rounded-md"
                  type="date"
                />
              </div>
              <div className="flex flex-col mt-9">
                <button className="bg-gray-400 bg-opacity-30 px-8 py-2 rounded-md flex justify-center items-center">
                  <span> Search</span>
                  <FaArrowRight size={16} className="ml-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Brand/>
      <Steps/>
      <Deals/>
      <CarList/>
      <Testimonial/>
      <Footer/>
      <div className='mt-10 border-t border-opacity-15 border-white py-3'>

<p className="text-xs text-gray-400 text-center"> Privacy Policy | Term & Condition | Copyright 2024 rent&ride. All right reserved</p> 
</div>
      
    </div>
  );
};

export default Hero;
