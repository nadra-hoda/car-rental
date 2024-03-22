import Image from 'next/image'
import React from 'react'
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

const Deals = () => {
  return (
    <div className='bg-black mt-[6%] '>
        <div className='w-full flex justify-center items-center pt-[4%]'>
        <div className='w-1/2'>
            <Image src="/audi.jpg" alt='Audi' className='w-full h-full' width={400} height={500}/>
        </div>
        <div className='w-1/2'>
            <h1 className='text-4xl font-semibold'>Feel the Best Experience <br></br>With Our Rental Deals</h1>
            <div className='flex mt-[5%]'>
                <div className='mr-4 mt-1'><FaHandshakeSimple className='border border-white p-2 rounded-md' fill='white' size={40}/></div>
                <div>
                    <h3 className='text-xl font-semibold'>Deals for every budget</h3>
                    <p className='text-gray-400'>Looking for a car rental for your next trip?
                     <br/>   Here are some tips to help you find
                    </p>
                </div>
            </div>
            <div className='flex mt-[5%]'>
                <div className='mr-4 mt-1'><IoIosPricetags className='border border-white p-2 rounded-md' fill='white' size={40}/></div>
                <div>
                    <h3 className='text-xl font-semibold'>Best price guaranteed</h3>
                    <p className='text-gray-400'>Looking for a car rental for your next trip?
                     <br/>   Here are some tips to help you find
                    </p>
                </div>
            </div>
            <div className='flex mt-[5%]'>
                <div className='mr-4 mt-1'><IoSettingsSharp className='border border-white p-2 rounded-md' fill='white' size={40}/></div>
                <div>
                    <h3 className='text-xl font-semibold'>24/7 Support</h3>
                    <p className='text-gray-400'>Looking for a car rental for your next trip?
                     <br/>   Here are some tips to help you find
                    </p>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Deals