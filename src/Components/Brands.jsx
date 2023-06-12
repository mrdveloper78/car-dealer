import React from 'react';
import { SiAudi, SiBmw, SiFord, SiHyundai, SiMercedes, SiMitsubishi } from "react-icons/si";


const Brands = () => {
  return (
    <div
      className='app__container bg-[#03045e] h-[50vh] sm:h-[40vh]'
    >
      <div className='flex flex-col items-center justify-start'>
        {/* ------------ title ------------ */}
        <h1 className='text-golden text-[55px] font-medium sm:text-[45px]'>
        Car Brands
        </h1>

        {/* ------------ brands ----------- */}
        <div
          className='
        w-full flex justify-between items-center mt-8
        text-[55px] text-white
        sm:text-[38px] '
        data-aos="zoom-in-up"
        >
          <SiBmw />
          <SiMercedes />
          <SiAudi />
          <SiHyundai />
          <SiMitsubishi />
          <SiFord />
        </div>
      </div>
    </div>
  )
}


export default Brands;
