import React, { useContext } from 'react';
import { ProductContext } from '../Stores/Context/ProductContext';
import CartProductTable from '../Utils/CartProductTable';


const CartProduct = () => {

    const {state} = useContext(ProductContext);

  return (
    <div className='my-[150px] app__container'>
      <div>
        
        {/* -------- heading ---------- */}
        <h1>Selected products</h1>

        {/* table */}
        <CartProductTable/>

      </div>
    </div>
  )
}


export default CartProduct;
