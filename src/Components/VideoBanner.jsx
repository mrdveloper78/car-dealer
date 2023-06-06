import React from 'react';
import vidBanner from '../Assets/videos/Homepage-Test_Drive-NA-Desktop.mp4';



const VideoBanner = () => {
    return (
        <div className='max-h-[800vh] mt-[50px]'>
            <video autoPlay={true} controls={false} loop muted >
                <source src={vidBanner} type='video/mp4' />
            </video>
        </div>
    )
}


export default VideoBanner;
