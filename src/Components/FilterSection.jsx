import React, { useContext, useState } from 'react';
import { brandIcon, colorData } from "../Assets/Data/data";
import { ProductContext } from '../Stores/Context/ProductContext';
import { Link } from 'react-router-dom';
import FilterColorShow from './FilterColorShow';



const FilterSection = () => {

  const [data, setData] = useState(
    {
      type: '',
      price: '',
      color: '',
      brand: ''
    }
  );

  const [typeStateColor, setTypeStateColor] = useState(0);
  const [filterStateColor, setFilterStateColor] = useState(false);

  const { filterProducts, saveFilterState } = useContext(ProductContext);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }

  const setColorData = (color) => {
    setData({ ...data, color: color })
  }

  return (
    <div className='filter__bg min-h-[100vh] w-full box-border'>
      <div className='filter__dark app__container flex flex-col w-full'>
        {/* ---------- title ---------- */}
        <h1 className='text-center text-golden text-[50px] font-semibold sm:text-[40px]'>
          Find Your Perfect Car
        </h1>

        {/* ---------- form ----------- */}
        <form className='flex flex-col items-start justify-between h-full w-full mt-8'>
          {/* type and price */}
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
                  onClick={(e) => { changeHandler(e); setTypeStateColor(1) }}
                  className=
                  {`
                  filter__box text-white 
                  ${typeStateColor === 1 ? 'bg-[#050561]' : 'bg-[#3D0C02]'}
                  `}
                />


                <input
                  type='button'
                  value="Used"
                  name='type'
                  onClick={(e) => { changeHandler(e); setTypeStateColor(2) }}
                  className=
                  {`
                  filter__box text-white 
                  ${typeStateColor === 2 ? 'bg-[#050561]' : 'bg-[#3D0C02]'}
                  `}
                />


                <input
                  type='button'
                  value="All"
                  name='type'
                  onClick={(e) => { changeHandler(e); setTypeStateColor(3) }}
                  className=
                  {`
                  filter__box text-white 
                  ${typeStateColor === 3 ? 'bg-[#050561]' : 'bg-[#3D0C02]'}
                  `}
                />

              </div>
            </div>

            <div className='flex items-center justify-between w-[300px]'>

              <p className='filter-p'>Price</p>

              <div className='flex flex-col h-[30px]'>
              <input type='range'
                min='10000' max='300000' name='price' value={data.price}
                onChange={(e) => changeHandler(e)} id='price'
              />
              <output for="price" className='text-golden'>{data.price} $</output>
              </div>

            </div>
          </div>

          {/* color */}
          <div className='flex w-full'>
            <p className='filter-p mr-20 sm:mr-10 '>Color</p>
            <div className=' flex justify-between items-center gap-1 flex-wrap w-fit'>

              {
                colorData && colorData.map(
                  (item, index) => {
                    const { code, name } = item;
                    return (
                      <FilterColorShow code={code} name={name} setColorData={setColorData} />
                    )
                  }
                )
              }



            </div>
          </div>

          {/* brand */}
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

          {/* search button */}
          <div className='mx-auto'>
            <Link to="/find">
              <button
                type='button'
                onClick={() => { saveFilterState(data); filterProducts(data); console.log(data) }}
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
