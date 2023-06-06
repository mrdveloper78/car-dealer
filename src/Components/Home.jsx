import React, { useContext, useEffect } from 'react';
import VideoBanner from './VideoBanner';
import Brands from './Brands';
import FilterSection from './FilterSection';
import Offers from './Offers';
import ImageSlider2 from '../Utils/ImageSlider2';
import Sellers from './Sellers';
import { getAllData } from '../Adaptor/api';
import { ProductContext } from '../Stores/Context/ProductContext';


const Home = () => {

  const {showAllProducts,state,dispatch} = useContext(ProductContext);

  useEffect(() => {
    const fetchApi = async () => {
      getAllData();
      // showAllProducts()
    }
    fetchApi();
  },[])

  return (
    <div className=''>
      <VideoBanner/>
      <Brands/>
      <FilterSection/>
      <Offers/>
      <ImageSlider2/>
      <Sellers/>
    </div>
  )
}


export default Home;
