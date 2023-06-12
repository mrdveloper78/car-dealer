import React, { useContext, useEffect } from 'react';
import VideoBanner from './VideoBanner';
import Brands from './Brands';
import FilterSection from './FilterSection';
import Offers from './Offers';
import ImageSlider2 from '../Utils/ImageSlider2';
import Sellers from './Sellers';
import { ProductContext } from '../Stores/Context/ProductContext';
import productService from '../Service/productService';



const Home = () => {

  const {showAllProducts} = useContext(ProductContext);
  const service = new productService();

  useEffect(() => {
    const fetchApi = async () => {
      service.allProducts()
      showAllProducts();
    }
    fetchApi();
  },[])

  return (
    <div className='w-[100%]'>
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
