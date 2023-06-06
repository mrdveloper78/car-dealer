import React from 'react';

import img from "../Assets/images/bmw x3 w.jpg";
import img2 from "../Assets/images/bmwi8.jpg";


const Offers = () => {
    return (
        <div className='app__container flex gap-8 h-[100vh] w-full sm:flex-col sm:min-h-[160vh]'>

            {/* --------- right ---------- */}
            <div className='flex-1 flex flex-col rounded-xl bg-midnightGreen'>
                {/* ---- img --- */}
                <div className='h-[75%]'>
                    <img src={img} alt="car image" className='rounded-t-xl w-full h-full' />
                </div>

                {/* -- content - */}
                <div className='p-4 flex flex-col gap-4'>
                    <div className='flex gap-4 text-white items-center'>
                        <h1 className='text-2xl font-bold'>BMW</h1>
                        <p className='text-[18px]'>X3 Sports Activity</p>
                        <p className='text-[18px]'>Black</p>
                    </div>

                    <div className='horizontal-line' />

                    <div className='flex items-center justify-between'>
                        <div className='offers-year'>2021</div>

                        <h1 className='text-[26px] text-white font-medium'>$44,000</h1>
                    </div>
                </div>
            </div>

            {/* ---------- left ---------- */}
            <div className='flex-1 w-full flex justify-between flex-wrap gap-x-4 gap-y-6'>

                <div className=' flex flex-col h-[48%] w-[48%] rounded-xl bg-midnightGreen'>
                    {/* ---- img --- */}
                    <div className='h-[75%]'>
                        <img src={img} alt="car image" className='rounded-t-xl w-full h-full' />
                    </div>

                    {/* -- content - */}
                    <div className='p-2 flex flex-col gap-2'>
                        <div className='flex gap-2 text-white items-center'>
                            <h1 className='text-2xl font-bold'>BMW</h1>
                            <p className='text-[18px]'>X3 Sports Activity</p>
                            <p className='text-[18px]'>Black</p>
                        </div>

                        <div className='horizontal-line' />

                        <div className='flex items-center justify-between'>
                            <div className='offers-year'>2021</div>

                            <h1 className='text-[26px] text-white font-medium'>$44,000</h1>
                        </div>
                    </div>
                </div>
                
                <div className=' flex flex-col h-[48%] w-[48%] rounded-xl bg-midnightGreen'>
                    {/* ---- img --- */}
                    <div className='h-[75%]'>
                        <img src={img2} alt="car image" className='rounded-t-xl w-full h-full' />
                    </div>

                    {/* -- content - */}
                    <div className='p-2 flex flex-col gap-2'>
                        <div className='flex gap-2 text-white items-center'>
                            <h1 className='text-2xl font-bold'>BMW</h1>
                            <p className='text-[18px]'>8i Activity</p>
                            <p className='text-[18px]'>Black</p>
                        </div>

                        <div className='horizontal-line' />

                        <div className='flex items-center justify-between'>
                            <div className='offers-year'>2019</div>

                            <h1 className='text-[26px] text-white font-medium'>$30,000</h1>
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col h-[48%] w-[48%] rounded-xl bg-midnightGreen'>
                    {/* ---- img --- */}
                    <div className='h-[75%]'>
                        <img src={img} alt="car image" className='rounded-t-xl w-full h-full' />
                    </div>

                    {/* -- content - */}
                    <div className='p-2 flex flex-col gap-2'>
                        <div className='flex gap-2 text-white items-center'>
                            <h1 className='text-2xl font-bold'>BMW</h1>
                            <p className='text-[18px]'>X3 Sports Activity</p>
                            <p className='text-[18px]'>Black</p>
                        </div>

                        <div className='horizontal-line' />

                        <div className='flex items-center justify-between'>
                            <div className='offers-year'>2021</div>

                            <h1 className='text-[26px] text-white font-medium'>$44,000</h1>
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col h-[48%] w-[48%] rounded-xl bg-midnightGreen'>
                    {/* ---- img --- */}
                    <div className='h-[75%]'>
                        <img src={img} alt="car image" className='rounded-t-xl w-full h-full' />
                    </div>

                    {/* -- content - */}
                    <div className='p-2 flex flex-col gap-2'>
                        <div className='flex gap-2 text-white items-center'>
                            <h1 className='text-2xl font-bold'>BMW</h1>
                            <p className='text-[18px]'>X3 Sports Activity</p>
                            <p className='text-[18px]'>Black</p>
                        </div>

                        <div className='horizontal-line' />

                        <div className='flex items-center justify-between'>
                            <div className='offers-year'>2020</div>

                            <h1 className='text-[26px] text-white font-medium'>$40,000</h1>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}


export default Offers;
