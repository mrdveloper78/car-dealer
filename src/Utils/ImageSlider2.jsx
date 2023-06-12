import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards, Autoplay } from "swiper";

// import image
import car1 from "../Assets/images/bmw x3 w.jpg";
import car2 from "../Assets/images/2023-Genesis-GV80-Coupe-Concept-001-2100.jpg";
import car3 from "../Assets/images/audi1.jpg";
import car4 from "../Assets/images/ford1.jpg";
import car5 from "../Assets/images/hyundai1.jpg";
import car6 from "../Assets/images/volkswagen1.jpg";

export default function ImageSlider2() {
    return (
        <div className="bg-black app__container sm:hidden">
            <div className="">
                <Swiper
                    effect={"cards"}                   
                    modules={[EffectCards, Autoplay]}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide className=" ">
                        <img src={car1} className="" alt="car image" />
                    </SwiperSlide>

                    <SwiperSlide className=" ">
                        <img src={car2} className="" alt="car image" />
                    </SwiperSlide>

                    <SwiperSlide className=" ">
                        <img src={car3} className="" alt="car image" />
                    </SwiperSlide>

                    <SwiperSlide className=" ">
                        <img src={car4} className="" alt="car image" />
                    </SwiperSlide>

                    <SwiperSlide className=" ">
                        <img src={car5} className="" alt="car image" />
                    </SwiperSlide>

                    <SwiperSlide className=" ">
                        <img src={car6} className="" alt="car image" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
