// const { default: axios, AxiosHeaders } = require("axios");
 import axios from "axios";


const getAllData = async () => {
    try {
        const response = await axios.get('https://myfakeapi.com/api/cars/')
        console.log(response.data.cars.filter(item=>item.id<100))
        const data = response.data.cars.filter(item=>item.id<100);
        return data;
        
    } catch (error) {
        console.log(error)
    }
}



export {getAllData}
