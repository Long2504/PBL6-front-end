

export const catalogReducer = (
    state = {loading: true, categories: []}, 
    action
) =>{
    switch(action.type){
        case 'CATALOG_LIST_REQUEST':{
            return {loading: true};
        }
        case 'CATALOG_LIST_SUCCESS':
            return{
                loading: false,
                categories: action.payload,
        }
        case 'CATALOG_LIST_FAIL':
            return {loading: false}
        default:
            return state;
    }
};


export const productsReducer = (
    state = {loading: true, products:[]},
    action
)=>{
    switch(action.type){
        case 'PRODUCT_LIST_REQUEST':{
            return {loading: true}
        }
        case 'PRODUCT_LIST_SUCCESS':
            return{
                loading: false,
                products: action.payload,
            }
        case 'PRODUCT_LIST_FAIL':
            return { loading: false}
        default:
            return state;
    }
};


export const productReducer = (
    state = {
        loading: true,
        product: {
            productImgs: [],
            attributes: []
        }
    },
    action
)=>{
    switch(action.type){
        case 'PRODUCT_REQUEST':{
            return {loading: true}
        }
        case 'PRODUCT_SUCCESS':
            return{
                loading: false,
                product: action.payload,
            }
        case 'PRODUCT_FAIL':
            return { loading: false}
        default:
            return state;
    }
};
 
 


