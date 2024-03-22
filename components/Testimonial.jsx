"use client";
import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import Image from "next/image";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est illo eveniet enim, sunt officia consequatur magni perspiciatis nobis quia tempora, quaerat alias necessitatibus reprehenderit asperiores. Magni repellat fugiat qui veniam!",
    },
    {
      id: 2,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus cupiditate beatae accusantium dignissimos vero magni deleniti quod, repellendus porro exercitationem?",
    },
    // Add more testimonials as needed
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  return (
    <div className="bg-black w-full border-b border-white border-opacity-15">
      <div className=" flex relative">
        <div className="w-1/2 flex  ml-20 justify-center items-center">
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold">
              Our Client's Reviews & Testimonials
            </h2>
            <div className="w-[70%] mt-[4%]  relative h-[100px]">
              <FaQuoteLeft className="absolute top-0 left-0" />{" "}
              <p className="text-base ml-[5%] pt-[2%]">
                {testimonials[currentTestimonial].quote}
              </p>
            </div>
            <div className="flex mt-[10%] w-full">
              <div className="w-1/3">
                <div className="flex">
                  <RiStarSFill fill="orange" size={20} />
                  <RiStarSFill fill="orange" size={20} />
                  <RiStarSFill fill="orange" size={20} />
                  <RiStarSFill fill="orange" size={20} />
                  <RiStarSFill fill="orange" size={20} />
                  <p className="ml-4 text-sm"> 5.0</p>
                </div>
                <div className="flex">
                  <Image
                    src="/pro.svg"
                    alt="Profile"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-3 flex justify-center flex-col">
                    <p className="text-sm">Sharley</p>
                    <p className="text-xs text-gray-300">CEO , ABC Inc.</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 w-1/3">
                <button className="text-white" onClick={prevTestimonial}>
                  <IoIosArrowDropleft c size={30} />
                </button>
                <button className="text-white" onClick={nextTestimonial}>
                  <IoIosArrowDropright size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 ">
          <Image
            src="/audi.jpg"
            alt="Audi"
            className=" h-full w-full"
            width={400}
            height={500}
          />
        </div>
      </div>
     
    </div>
  );
};

export default Testimonial;
