import React, { useContext, useState } from 'react';
import { ProductContext } from '../Stores/Context/ProductContext';
import defImg from "../Assets/images/car-vec-temp.jpg";


const ProductsShow = ({ data }) => {

    const {  addNewItem, removeItem } = useContext(ProductContext);

    const { car, car_model, car_color, car_model_year, price } = data;

    const [showTrashbin, setShowTrashbin] = useState(false);


    return (

        <div>

            <div
                className='
                 flex flex-col flex-wrap
                 h-[450px] w-[500px] rounded-xl bg-midnightGreen
                 sm:w-[400px]'
            >
                {/* ---- img --- */}
                <div className='h-[330px]'>
                    <img src={defImg} alt="car image" className='rounded-t-xl w-full h-full' />
                </div>

                {/* -- content - */}
                <div className='p-2 flex flex-col gap-2'>
                    <div className='flex gap-2 text-white items-center'>
                        <h1 className='text-2xl font-bold'>{car}</h1>
                        <p className='text-[18px]'>{car_model}</p>
                        <p className='text-[18px]'>{car_color}</p>
                    </div>

                    <div className='horizontal-line' />

                    <div className='flex items-center justify-between'>
                        <div className='offers-year'>{car_model_year}</div>


                        {
                            !showTrashbin ?
                                <div
                                    onClick={() => { addNewItem(data); setShowTrashbin(true) }}
                                    className='add-to-card'
                                    style={{ display: `${showTrashbin ? 'none' : 'block'}` }}
                                >
                                    Add to cart
                                </div>

                                :
                                <div
                                    onClick={() => { setShowTrashbin(false); removeItem(data) }}
                                    className='add-to-card'
                                    style={{ display: `${showTrashbin ? 'block' : 'none'}` }}
                                >
                                    Remove
                                </div>
                        }


                        <h1 className='text-[26px] text-white font-medium'>{price}</h1>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default ProductsShow;
