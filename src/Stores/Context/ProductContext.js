import React, { createContext, useReducer } from 'react';
import { ProductReducer } from '../Reducer/ProductReducer';
import productService from '../../Service/productService';
import { successMessage } from '../../Utils/Login/Utils/ToastMessage';



const ProductContext = createContext();

const initialState = {
  filteredProduct: [],
  allNewCar: [
    {
      id: 1001,
      car: "BMW",
      car_model: "X3 M40i",
      car_color: "Black",
      car_model_year: 2023,
      car_vin: "SAJWJ0FF3F8897657",
      price: "$61.000",
      availability: true
    },
    {
      id: 1002,
      car: "BMW",
      car_model: "XM Hybrid",
      car_color: "White",
      car_model_year: 2023,
      car_vin: "SAJWJ0GG3F8897007",
      price: "$120.000",
      availability: true
    },
    {
      id: 1003,
      car: "BMW",
      car_model: "X7 xDrive40i",
      car_color: "White",
      car_model_year: 2023,
      car_vin: "SAJWJ0GG3F1237007",
      price: "$85.000",
      availability: true
    },
    {
      id: 1004,
      car: "BMW",
      car_model: "XB7",
      car_color: "White",
      car_model_year: 2023,
      car_vin: "SAJWJ0GG3F8897007",
      price: "$149.000",
      availability: true
    },
    {
      id: 1005,
      car: "BMW",
      car_model: "X1 SPORTS",
      car_color: "Blue",
      car_model_year: 2023,
      car_vin: "SAJWJ0GG3F8897099",
      price: "$55.000",
      availability: true
    },
    {
      id: 1006,
      car: "Ford",
      car_model: "E CoSport",
      car_color: "Red",
      car_model_year: 2023,
      car_vin: "FDEWJ0GG3F8897007",
      price: "$35.000",
      availability: true
    },
    {
      id: 1007,
      car: "Ford",
      car_model: "EDGE",
      car_color: "Black",
      car_model_year: 2023,
      car_vin: "FEGWJ0GG3F3897007",
      price: "$43.000",
      availability: true
    },
    {
      id: 1008,
      car: "Toyota",
      car_model: "Render",
      car_color: "White",
      car_model_year: 2023,
      car_vin: "TSJWJ0GG3F3597007",
      price: "$65.000",
      availability: true
    },
    {
      id: 1009,
      car: "Toyota",
      car_model: "XMR 23",
      car_color: "White",
      car_model_year: 2023,
      car_vin: "TRJWJ0GG3X8897007",
      price: "$80.000",
      availability: true
    },
    {
      id: 1010,
      car: "Mitsubishi",
      car_model: "MinX Hybrid",
      car_color: "Black",
      car_model_year: 2023,
      car_vin: "MIJWJ0GG3F8897023",
      price: "$25.000",
      availability: true
    },
  ],
  allUsedCar: [],
  allProducts: [],
  searchState: {
    type: '',
    price: '',
    color: '',
    brand: ''
  },
  selectedItems: [],
  itemsConter: 0,
  total: 0,
};


const ProductProvider = ({ children }) => {

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const service = new productService();

  // methodes

  const showAllProducts = async () => {
    const data = await service.allProducts();
    console.log(data)
    dispatch({ type: 'showAllProducts', payload: data });
  }

  const saveFilterState = (data) => {
    dispatch({type:"saveFilterState",payload:data});
  }

  const filterProducts = (data) => {
    console.log(state.searchState)
    dispatch({ type: 'filterProducts', payload: data });
  }

  const addNewItem = (productData) => {
    dispatch({ type: 'addNewItem', payload: productData });
  }

  const removeItem = (productData) => {
    if (window.confirm("Are you sure about this?") == true) {
      dispatch({ type: 'removeItem', payload: productData });
      successMessage("The product has been successfully removed");
    } 
  }

  const showTrashbin = () => {
    dispatch({ type: 'showTrashbin' });
  }

  const hideTrashbin = () => {
    dispatch({ type: 'hideTrashbin' });
  }


  console.log(state.filteredProduct)

  return (
    <ProductContext.Provider
      value={{
        state, 
        dispatch, showAllProducts, filterProducts, addNewItem, removeItem,
        showTrashbin, hideTrashbin, saveFilterState
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}



export { ProductProvider, ProductContext };

