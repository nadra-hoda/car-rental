import React from 'react'
import Image from 'next/image'
const Brand = () => {
  return (
    <div className='h-[200px] bg-black bg-opacity-50 mt-[8%] flex items-center'>
    <div className='flex justify-between w-full mx-[5%]'>
      {/* Images */}
      <div className="flex justify-center items-center flex-1">
        <Image src='/acura.png' className='text-white' alt="Log" width={200} height={200} />
      </div>
      <div className="flex justify-center items-center flex-1">
        <Image src='/honda.png' className='text-white' alt="Log" width={200} height={200} />
      </div>
      <div className="flex justify-center items-center flex-1">
        <Image src='/jeep.png' className='text-white' alt="Log" width={200} height={200} />
      </div>
      <div className="flex justify-center items-center flex-1">
        <Image src='/landrover.png' className='text-white' alt="Log" width={200} height={200} />
      </div>
      <div className="flex justify-center items-center flex-1">
        <Image src='/nissan.png' className='text-white' alt="Log" width={100} height={100} />
      </div>
      <div className="flex justify-center items-center flex-1">
        <Image src='/w.png' className='text-white' alt="Log" width={100} height={100} />
      </div>
    </div>
  </div>
  
  )
}

export default Brand