


const sumPrice = (item) => {
    let total = item.reduce(
        (total, product) => total + Number(product.price.slice(1)), 0
    )
    total = total.toFixed(2)

    return { total }
}


const ProductReducer = (state, action) => {

    const { type, payload } = action;

    const {
        allProducts, allNewCar, filteredProduct,
        searchState, selectedItems, itemsConter,
    } = state;

    const typeFilter = (car) => {
        switch (searchState.type) {
            case 'New':{
                console.log(car.id > 999)
                return car.id > 999;
            }
                break;

            case 'Used':{
                return car.id < 999;
            }
                break;

            case 'All':{
                return car.id >= 0;
            }
                break;

            default:
                break;
        }

    }

    switch (type) {
        
        case 'showAllProducts': {
            try {
                console.log(payload)
                const sum = payload.concat(allNewCar)
                return { ...state, allProducts: [...sum] }
            } catch (error) {
                console.log(error + 'error')
            }
        }
            break;

        case 'saveFilterState': {
            return { ...state, searchState: { ...payload } }
        }
        case 'filterProducts': {
            const data = allProducts.filter(function(car){
                return(
                    typeFilter(car) ||
                    car.car_color === searchState.color ||
                    car.car === searchState.brand &&
                    Number(car.price.slice(1)) <= searchState.price
                )
            }
            );

            console.log(allProducts);
            console.log(data);
            console.log(searchState);



            return { ...state,filteredProduct:[...data]  }
        }
            break;

        case "addNewItem": {
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                })
            }
            console.log(selectedItems)

            return { ...state, selectedItems: [...selectedItems], ...sumPrice(selectedItems) }
        }
            break;

        case "removeItem": {
            const newSelectedItems = selectedItems.filter(
                item => item.id !== payload.id
            )

            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumPrice(newSelectedItems)
            }
        }
            break;

        case "showTrashbin": {
            return { ...state, trashbinState: true }
        }
        case "hideTrashbin": {
            return { ...state, trashbinState: false }
        }

        default:
            return state;
    }

}




export { ProductReducer };

