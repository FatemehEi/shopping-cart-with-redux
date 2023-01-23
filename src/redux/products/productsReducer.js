const initialState = {
    loading: false,
    products: [],
    error: ""
} 

const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                products: action.payload,
                loading: false
            }
        case "FETCH_PRODUCTS_FAILURE":
            return {
                error: action.payload,
                products: [],
                loading: false
            }
        default:
            return state
    }
}

export default productsReducer; 