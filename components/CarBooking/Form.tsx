import React, { useContext, useEffect, useState } from "react";
import { createBooking, getStoreLocations } from "@/services";
import { BookingContext } from "@/context/BookingContext";
const Form = ({car}:any) => {
  const [storeLocation, setStoreLocation] = useState<any>([]);
  const {showToast, setShowToast}=useContext(BookingContext);
  const [formValue, setFormValue] = useState({
    location: '',
    pickUpDate: '',
    dropOffDate: '',
    pickUpTime: '',
    dropOffTime: '',
    contactNumber: '',
    userName:'',
    carId: ""
  });

  const today:any = new Date();


  useEffect(() => {
    getStoreLocation_();
  }, []);

  useEffect(()=>{
    if(car){
        setFormValue({
        ...formValue,
        carId:car.id
        });
    }
    
    
  },[car])
  const getStoreLocation_ = async () => {
    const resp: any = await getStoreLocations();
    console.log(resp);
    setStoreLocation(resp?.storesLocations);
  };

  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async() => {
    console.log(formValue);
    const resp= await createBooking(formValue);
    console.log(resp);
    if(resp){
        setShowToast(true);
    }
  };

  return (
    <div className="px-5 pt-3">
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400 ">Pickup Location</label>
        <select
          className="select select-bordered w-full max-w-lg border-2 rounded-lg border-black py-1"
          name="location"
          onChange={handleChange}
        >
          <option disabled selected>
            Pickup Location?
          </option>
          {storeLocation &&
            storeLocation.map((loc: any, index: number) => (
              <option key={index}>{loc?.address}</option>
            ))}
        </select>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            onChange={handleChange}
            min={today}
            placeholder="Type here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg border-2 border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name="dropOffDate"
            className="input input-bordered w-full max-w-lg border-2 border-black rounded-lg"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            onChange={handleChange}
            placeholder="Type here"
            name="pickUpTime"
            className="input input-bordered w-full max-w-lg border-2 border-black rounded-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            onChange={handleChange}
            placeholder="Type here"
            name="dropOffTime"
            className="input input-bordered w-full max-w-lg border-2 border-black rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          onChange={handleChange}
          name="contactNumber"
          className="input input-bordered w-full max-w-lg border-2 border-black rounded-lg py-1 pl-2"
        />
      </div>
      <div className="modal-action flex justify-end space-x-3">
   

   <button className="btn border rounded-lg px-3 py-1">Close</button>
   <button className="btn bg-orange-500 rounded-lg px-3 py-1 text-white hover:bg-orange-800" onClick={handleSubmit}>Save</button>
   </div>
    </div>
  );
};

export default Form;
