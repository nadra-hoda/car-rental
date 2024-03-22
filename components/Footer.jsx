import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full px-20 pt-10'>
        <div className='flex justify-between'>
        <div>
            <div className='flex flex-col '>
<Image src='/logowhite.png' alt="Logo" height={150} width={150}/>
<p className='text-xs font-normal text-gray-300 mt-4'>442, Belle Street, California</p>
<p className='text-xs font-normal text-gray-300'>abc@mail.com</p>
<p className='text-xs font-normal text-gray-300'>+1234567890</p>
                </div>
        </div>
        <div>
            <div className='flex flex-col'>
                <h2 className='text-xl'>Our Product</h2>
                <p className='text-sm mt-4'>Driver</p>
                <p className='text-sm'>Career</p>
                <p className='text-sm'> Car</p>
                <p className='text-sm'>Features</p>
            </div>
        </div>
        <div>
        <div className='flex flex-col'>
                <h2 className='text-xl'>Resources</h2>
                <p className='text-sm mt-4'>Community</p>
                <p className='text-sm'>Download</p>
                <p className='text-sm'> FAQ</p>
                <p className='text-sm'>Partner</p>
            </div>
        </div>
        <div>
        <div className='flex flex-col'>
                <h2 className='text-xl'>About Us</h2>
                <p className='text-sm mt-4'>Why choose us</p>
                <p className='text-sm'>Our Story</p>
                <p className='text-sm'> Advertise</p>
                <p className='text-sm'>Guides</p>
            </div>
        </div>
        <div>
        <div className='flex flex-col'>
                <h2 className='text-xl'>Get In Touch</h2>
                <div className='flex gap-2 cursor-pointer'>
                <FaInstagram size={25}/>
                <FaFacebook size={25}/>
                <FaXTwitter size={25}/>
                <FaLinkedin size={25}/>
                </div>
              
              
            </div>
        </div>
        </div>

      

       
      
    </div>
  )
}

export default Footer