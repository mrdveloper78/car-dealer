import React from 'react';
import { sellersData } from '../Assets/Data/data';
import { BsFillStarFill } from "react-icons/bs";


const Sellers = () => {
  return (
    <div className='app__container bg-white flex flex-col items-center'>
        {/* --------- title --------- */}
        <h1 className='text-[#DCCA87] text-[40px] mb-8'>Sellers</h1>

        {/* -------- content -------- */}
        <div className='flex justify-between w-full sm:flex-wrap'>
            {
                sellersData && sellersData.map(
                    (item,index) => {
                        const {name,imgUrl,stars} =item;
                        return(
                            <div className='flex flex-col items-center gap-2'>
                                <img src={imgUrl} alt='avatar' className='w-[200px] rounded-[50%]' />
                                <h1 className='text-[25px] font-semibold'>{name}</h1>
                                <p className='text-[17px] font-medium'>3 Years</p>
                                <span>+981234567890</span>
                                <div className='flex w-[70%] justify-between'>
                                    {
                                        stars && stars.map(
                                            (str,id) => {
                                                return(
                                                    <BsFillStarFill fill={str} color='black'  />
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    </div>
  )
}

export default Sellers

