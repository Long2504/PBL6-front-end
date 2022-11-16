

export const catalogReducer = (
    state = {loading: true, catalogs: []}, 
    action
) =>{
    switch(action.type){
        case 'CATALOG_LIST_REQUEST':{
            return {loading: true};
        }
        case 'CATALOG_LIST_SUCCESS':
            return{
                loading: false,
                catalogs: action.payload,
        }
        case 'CATALOG_LIST_FAIL':
            return {loading: false}
        default:
            return state;
    }
};




export const productReducer = (
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
 


