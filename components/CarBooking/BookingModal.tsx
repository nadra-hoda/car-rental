import React from 'react'
import CarCard from '../Home/CarCard'
import Form from './Form'

const BookingModal = ({car}:any) => {
  return (
<>
<div className="modal-wrapper">
      <div className="modal border rounded-xl">

    <form method="dialog" className="p-4">
        <div className='border-b-[1px] pb-2'>
            <h3 className='text-[30px] font-light text-gray-400'>Rent a Car Now!</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
             <CarCard car={car}/>
            </div>
            <div> 
                <Form car={car}/>

            </div>

        </div>
   
      </form>
   </div>
   <div className="modal-overlay"></div>
   </div>
      </>
  )
}

export default BookingModal