import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";


const CarsList = (props: any) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedCar,setSelectedCar]=useState<any>([]);

  useEffect(()=>{
    if(props.carList){
      setIsLoaded(false)
    }
  },[props.carList])
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {props.carsList.map((car: any, index: number) => (
        <div onClick={()=>{(document as any).getElementById('my_modal_4').showModal();
      setSelectedCar(car)
      }
        
        }>
          <CarCard car={car} />
        </div>
      ))}


      {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_4" className="border rounded-xl">
 <BookingModal car={selectedCar }/>
</dialog>
    </div>
  );
};

export default CarsList;