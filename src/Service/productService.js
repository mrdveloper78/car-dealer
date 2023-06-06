import { getAllData } from "../Adaptor/api";

class productService {

    async allProducts () {
        return await getAllData();
    }

}


export default productService;
