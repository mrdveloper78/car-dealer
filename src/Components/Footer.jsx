import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane, FaTiktok, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer__bg pl-[8rem] pt-[6rem] pr-[8rem] pb-[2rem] sm:p-[10px]'>
      <div className='flex justify-between items-baseline sm:flex-col sm:justify-start sm:items-start'>

        {/* --------- data --------- */}
        <div className='sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-full'>
          <h1 className='text-[38px] font-bold mb-8'>LION GALLERY</h1>

          <div className='flex items-center mb-8'>
            <FaMapMarkerAlt className='mr-4 text-golden' />
            <p className='text-[20px] text-gray-400'>Iran,Isfahan,Atashgah Street</p>
          </div>

          <div className='flex items-center mb-8'>
            <BsFillTelephonePlusFill className='mr-4 text-golden' />
            <p className='text-[20px] text-gray-400'>031-336-12345</p>
          </div>

          <div className='flex items-center mb-8'>
            <MdEmail className='mr-4 text-golden' />
            <p className='text-[20px] text-gray-400'>lionGroup@gmail.com</p>
          </div>
        </div>

        {/* ------- QuickLinks ----- */}
        <div className='sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-full'>
          <h1 className='mb-8 text-[21px] font-medium text-white'>QuickLinks</h1>
          <div className='flex flex-col'>
            <Link className='mb-8 text-[20px] text-gray-400'>Home</Link>
            <Link className='mb-8 text-[20px] text-gray-400'>Gallery</Link>
            <Link className='mb-8 text-[20px] text-gray-400'>AboutUs</Link>
            <Link className='mb-8 text-[20px] text-gray-400'>Search</Link>
          </div>
        </div>

        {/* ------- usefulLinks ---- */}
        <div className='sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-full' >
          <h1 className='mb-8 text-[21px] font-medium text-white'>UsefulLinks</h1>
          <div className='flex flex-col'>
            <a href="https://www.mbw.com/" className='mb-8 text-[20px] text-gray-400'>BMW</a>
            <a href="https://www.tesla.com/" className='mb-8 text-[20px] text-gray-400'>Tesla</a>
            <a href="https://www.audi.com/" className='mb-8 text-[20px] text-gray-400'>Audi</a>
            <a href="https://www.ford.com/" className='mb-8 text-[20px] text-gray-400'>Ford</a>
          </div>
        </div>

        {/* --------- socials ------ */}
        <div className='sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-full mb-4'>
          <h1 className='mb-8 text-[21px] font-medium text-white'>Socials</h1>
          <div className='flex w-[150px] justify-between'>
            <div className='footer__socials'>
              <AiFillInstagram />
            </div>

            <div className='footer__socials'>
              <FaTelegramPlane />
            </div>

            <div className='footer__socials'>
              <FaTiktok />
            </div>

            <div className='footer__socials'>
              <FaFacebookF />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Footer;
