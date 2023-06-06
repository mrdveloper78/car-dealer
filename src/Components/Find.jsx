import React, { useContext } from 'react';
import { ProductContext } from '../Stores/Context/ProductContext';
import { useEffect } from 'react';
import ProductsShow from './ProductsShow';
import CarLoading from '../Utils/Loading/CarLoading';


const Find = () => {

    const { state, showAllProducts, filterProducts } = useContext(ProductContext);
    const { filteredProduct } = state;

    useEffect(() => {
        const fetchApi = async () => {
            showAllProducts()
            filterProducts()
        }
        fetchApi();
    }, [])

    return (
        <>
            {
                filteredProduct != 0
                    ?
                    <div className='app__container mt-10 w-full'>
                        <div className='w-full'>
                            <div className='w-full flex items-center text-center justify-center gap-8 mb-[35px]'>
                                <h1 className='text-[33px] font-medium'>
                                    Find For You
                                </h1>

                                <p
                                    className='
                    bg-yellow-300 text-red p-4 rounded-full w-[40px] h-[40px]
                    flex items-center justify-center'
                                >
                                    {filteredProduct.length}
                                </p>
                            </div>

                            <div className='flex flex-wrap justify-between gap-8 sm:gap-4'>
                                {
                                    filteredProduct && filteredProduct.map(
                                        (item, index) => {
                                            return <ProductsShow data={item} key={index} />
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <CarLoading />
                    </div>
            }

        </>
    )
}


export default Find;
