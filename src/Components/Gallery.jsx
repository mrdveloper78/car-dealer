import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../Stores/Context/ProductContext';
import ProductsShow from './ProductsShow';
import CarLoading from '../Utils/Loading/CarLoading';



const Gallery = () => {
    const { state, showAllProducts } = useContext(ProductContext);

    const { allProducts, total,trashbinState } = state;

    useEffect(() => {
        const fetchApi = async () => {
            setTimeout(() => {
                showAllProducts()
            },2000)
        }
        fetchApi();
      },[])

    return (
        <div>
            {
                allProducts != 0
                    ?
                    <div className='app__container mt-10 bg-[#32174D] mb-[30vh]'>

                        <div className='w-full flex items-center text-center justify-center gap-8 mb-[35px]'>
                            <h1 data-aos="fade-up" 
                            className='text-[33px] font-medium sm:text-[20px]'>
                                Gallery inventory : {allProducts.length}
                            </h1>

                            <p data-aos="fade-up"
                                className='
                              bg-yellow-300 text-red p-4 rounded-full w-[17%] h-[40px]
                                flex items-center justify-center sm:w-[35%] sm:p-2'
                            >
                                Your Order Total : {total}
                            </p>
                        </div>

                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            className='
                            flex flex-wrap justify-between sm:flex-col
                            gap-y-[100px] mt-[30px]'
                        >
                            {
                                allProducts && allProducts.map(
                                    (item, index) => {
                                        return (
                                            <ProductsShow data={item} key={index} trb={trashbinState} />
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    :
                    <div className='relative'>
                        <CarLoading/>
                    </div>
            }

        </div>


    )
}

export default Gallery

