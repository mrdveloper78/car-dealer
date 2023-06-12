import React, { useContext, useState } from 'react';
import Logo2 from "../Assets/images/lionGALLERY2.png";
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Hamburger from 'hamburger-react';
import { IoMdCloseCircle } from "react-icons/io";
import { ProductContext } from '../Stores/Context/ProductContext';
// import { Turn as Hamburger } from 'hamburger-react'

const Navbar = () => {

    const [show, setShow] = useState(false);
    const { state } = useContext(ProductContext);
    const { selectedItems } = state;

    return (
        <div
            className='
        fixed top-0 w-[100vw] sm:w-[100vw] bg-black  
        h-[10vh] z-10'
        >
            <div className='flex justify-between items-center px-8 py-4 relative'>

                {/* -------- logo ---------- */}
                <div className='flex justify-start items-center cursor-pointer'>
                    <img src={Logo2} alt="logo" className='w-[150px] sm:w-[120px]' />
                </div>

                {/* -------- menu ---------- */}
                <div className=''>
                    <ul
                        className='
                    flex items-center justify-between 
                    text-golden w-[500px] text-xl
                    sm:hidden overflow-hidden
                    '
                    >
                        <li>
                            <Link to='/'>Home</Link>
                        </li>

                        <li>
                            <Link to='gallery'>Gallery</Link>
                        </li>

                        <li>
                            <Link to='/find'>Search</Link>
                        </li>

                        <li>
                            <Link to='/aboutus' target='_blank'>
                                AboutUS
                            </Link>
                        </li>

                        <li>
                            <Link>More</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center justify-between w-[160px]'>
                    {/* -------- login --------- */}
                    <div>
                        <Link
                            className='text-golden sm:hidden'
                            to='/login'
                            target='_blank'
                        >
                            Login | Register
                        </Link>
                    </div>

                    {/* ------- cart ----------- */}
                    <div className='relative'>
                        <Link to='/cart' >
                            <FaShoppingCart className='text-[#f3686d] text-3xl' />
                        </Link>

                        <span
                            className='
                            absolute flex items-center justify-center
                            top-0 right-0 w-[18px] h-[18px] rounded-[50%]
                            bg-[#c5302e] text-white text-[12px]'
                        >
                            {selectedItems.length}
                        </span>
                    </div>

                    {/* hamburger icon for  mobile */}
                    <div className='text-white block 2xl:hidden xl:hidden lg:hidden md:hidden'>
                        <Hamburger toggled={show} toggle={setShow} />
                    </div>

                </div>

                {/*------------- mobile menu ------------------- */}
                <div
                    className='
                    2xl:hidden xl:hidden lg:hidden md:hidden  absolute
                    top-0 right-0 w-full h-[100vh] bg-black 
                    menu-tran active:menu-tran'
                    style={{ display: show ? 'block' : 'none' }}
                >

                    <div className='flex flex-col items-center justify-center w-full h-full'>
                        {/* close icon */}
                        <div className='absolute top-10 right-10'>
                            <IoMdCloseCircle
                                onClick={() => setShow(false)}
                                className='text-golden text-[30px] cursor-pointer' />
                        </div>

                        {/* -------- list --------- */}
                        <div className='mb-[30px]'>
                            <ul
                                className='
                                flex flex-col items-center justify-center gap-[25px]
                              text-golden  text-[30px]'
                            >
                                <li>
                                    <Link to='/' onClick={() => setShow(false)}>Home</Link>
                                </li>

                                <li>
                                    <Link to='/gallery' onClick={() => setShow(false)}>Gallery</Link>
                                </li>

                                <li>
                                    <Link to='/find' onClick={() => setShow(false)}>Search</Link>
                                </li>

                                <li>
                                    <Link to='/' onClick={() => setShow(false)}>AboutUS</Link>
                                </li>

                                <li>
                                    <Link to='/' onClick={() => setShow(false)}>More</Link>
                                </li>
                            </ul>
                        </div>

                        {/* -------- login --------- */}
                        <div className='border border-golden rounded-[4px] py-[8px] px-[12px]'>
                            <Link
                                className='text-golden'
                                to='/login'
                                target='_blank'
                            >
                                Login | Register
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Navbar;
