import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='flex justify-between mx-20 pt-4'>
        <div className='logo cursor-pointer'>
            <Image src='/logowhite.png' width={100} height={100} alt='Logo'/>
        </div>
        <div className='menu flex gap-10 text-white text-sm font-normal'>
            <p className='cursor-pointer'>Rent</p>
            <p className='cursor-pointer'>Host</p>
            <p className='cursor-pointer'>Ride</p>
            <p className='cursor-pointer'>Service</p>
            <p className='cursor-pointer'>Contact</p>
    
        </div>
        <div className='flex gap-5 text-white'>
           <button>Log In</button>  
           <button className='text-white bg-gray-100 bg-opacity-20 py-1 px-6 rounded-md font-normal text-sm h-[32px]'>Sign Up</button>
           
        </div>
    </div>
  )
}

export default Navbar