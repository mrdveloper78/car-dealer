import React, { useContext, useState } from 'react';

import { brandIcon, colorData } from "../Assets/Data/data";
import { ProductContext } from '../Stores/Context/ProductContext';
import { Link } from 'react-router-dom';



const FilterSection = () => {

  const [data, setData] = useState(
    {
      type: '',
      price: '',
      color: '',
      brand: ''
    }
  );

  const { filterProducts } = useContext(ProductContext);

  const clickHadler = (e) => {
    setData({ ...data, type: e });
    console.log(data)
  }

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }

  return (
    <div className='filter__bg min-h-[100vh] w-full '>
      <div className='filter__dark app__container flex flex-col w-full'>
        {/* ---------- title ---------- */}
        <h1 className='text-center text-golden text-[50px] font-semibold sm:text-[40px]'>
          Find Your Perfect Car
        </h1>

        {/* ---------- form ----------- */}
        <form className='flex flex-col items-start justify-between h-full w-full mt-8'>
          <div
            className='
          flex items-center gap-[400px] w-full sm:flex-col
          sm:gap-0 sm:items-start'
          >
            <div className='flex items-center  w-[600px] sm:w-[420px]' >
              <p className='filter-p mr-20 sm:mr-10'>New | Used</p>
              <div className='flex items-center justify-between w-[60%] sm:w-[100%]'>

                <input
                  type='button'
                  value="New"
                  name='type'
                  onClick={(e) => changeHandler(e)}
                  className='filter__box active:bg-blue-600 bg-[#3D0C02] text-white'
                />


                <input
                  type='button'
                  value="Used"
                  name='type'
                  onClick={(e) => changeHandler(e)}
                  className='filter__box bg-[#3D0C02] text-white'
                />


                <input
                  type='button'
                  value="All"
                  name='type'
                  onClick={(e) => changeHandler(e)}
                  className='filter__box bg-[#3D0C02] text-white'
                />

              </div>
            </div>

            <div className='flex items-center justify-between w-[300px]'>

              <p className='filter-p'>Price</p>

              <input type='range'
                min='10000' max='300000' name='price' value={data.price}
                onChange={(e) => changeHandler(e)} id='price'
              />
              <output for="price">{data.price}</output>

            </div>
          </div>

          <div className='flex w-full'>
            <p className='filter-p mr-20 sm:mr-10 '>Color</p>
            <div className=' flex justify-between items-center gap-1 flex-wrap w-fit'>

              {
                colorData && colorData.map(
                  (item, index) => {
                    const { code, name } = item;
                    return (
                      <input
                        type='button'

                        name='color'
                        onClick={() => setData({ ...data, color: name })}
                        className='filter__color-btn w-[4rem] sm:w-[2rem] '
                        style={{ backgroundColor: `${code}` }}
                        key={index}
                      />
                    )
                  }
                )
              }



            </div>
          </div>

          <div className='flex items-center  w-full sm:w-[90vw]'>
            <p className='filter-p mr-20 sm:mr-10'>Brand</p>
            <div className='flex items-center gap-10 sm:flex-wrap sm:gap-2'>
              {
                brandIcon && brandIcon.map(
                  ({ Com, name }, index) => {
                    return (
                      <div className='filter__brand ' >
                        <Com
                          className='text-black text-[35px] sm:text-[25px]'
                          onClick={() => setData({ ...data, brand: name })}
                        />
                      </div>
                    )
                  }
                )
              }
            </div>
          </div>

          <div className='mx-auto'>
            <Link to="/find">
              <button
                type='button'
                onClick={() => filterProducts(data)}
                className='search-btn'
              >
                Search
              </button>
            </Link>
          </div>

        </form>

      </div>
    </div>
  )
}


export default FilterSection;
