import React, { useEffect, useState } from "react";

const CarsFilter = ({ carsList, setBrand, orderCarList }: any) => {
  const [brandList, setBrandList] = useState<any>();

  const BrandSet = new Set();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    console.log(BrandSet);
    setBrandList(Array.from(BrandSet));
  };
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold  text-black ">Cars Catalog</h2>
        <h2 className="text-black">Explore our cars you might like</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select select-bordered w-full max-w-xs text-black rounded-lg py-1 border-2 border-black"
          onChange={(e) => orderCarList(e.target.value)}
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className="select select-bordered md:block py-1 rounded-lg w-full max-w-xs hidden text-black border-2 border-black"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected>
            Manufacturer
          </option>
          {brandList &&
            brandList.map((brand: string, index: number) => (
              <option key={index}>{brand}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default CarsFilter;