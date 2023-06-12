import React from 'react';
import imageLoading from "../../Assets/images/carLoading.gif";


const CarLoading = () => {
    return (
        <div className='absolute top-0 right-0  bg-[#0c0c0ce0] w-[100vw] h-[100vh] z-[100]'>
            <div className='w-full h-full flex items-center justify-center'>
                <img
                    src={imageLoading}
                    className='w-[200px] h-[200px] bg-transparent'
                    alt="loading"
                />
            </div>
        </div>
    )
}


export default CarLoading;
