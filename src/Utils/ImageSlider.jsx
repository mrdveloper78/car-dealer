import React from 'react';
import Slider from 'react-slick';

import img1 from "../Assets/images/bmw x3 w.jpg";



const ImageSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows:true,
        swipeToSlide:true
    };

    return (
        <div className='app__container max-h-[50vh]'>
            <Slider {...settings} className='' >
                <div>
                    <img src={img1} alt="image slider" />
                </div>
                <div>
                    <img src={img1} alt="image slider" />
                </div>
                <div>
                    <img src={img1} alt="image slider" />
                </div>
                <div>
                    <img src={img1} alt="image slider" />
                </div>
                <div>
                    <img src={img1} alt="image slider" />
                </div>
                <div>
                    <img src={img1} alt="image slider" />
                </div>
            </Slider>
        </div>
    )
}


export default ImageSlider;
