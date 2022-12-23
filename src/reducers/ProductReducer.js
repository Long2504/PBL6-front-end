import * as TYPE from '../contants/ActionType'

export const catalogReducer = (
    state = {
        loading: true, 
        categories: [],
        error: ''
    }, 
    action
) =>{
    switch(action.type){
        case TYPE.CATALOG_LIST_REQUEST:{
            return {loading: true};
        }
        case TYPE.CATALOG_LIST_SUCCESS:
            return{
                loading: false,
                categories: action.payload,
        }
        case TYPE.CATALOG_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};


export const productsReducer = (
    state = {
        loading: true, 
        products:[],
        error: ''
    },
    action
)=>{
    switch(action.type){
        case TYPE.PRODUCT_LIST_REQUEST:{
            return {loading: true}
        }
        case TYPE.PRODUCT_LIST_SUCCESS:
            return{
                loading: false,
                products: action.payload,
            }
        case TYPE.PRODUCT_LIST_FAIL:
            return { 
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};


export const productReducer = (
    state = {
        loading: true,
        product: {
            productImgs: [],
            attributes: [],
            description: '',
        }
    },
    action
)=>{
    switch(action.type){
        case TYPE.PRODUCT_REQUEST:{
            return {loading: true}
        }
        case TYPE.PRODUCT_SUCCESS:
            console.log("ok ok")
            console.log(action.payload,"reducer")
            return{
                loading: false,
                product: action.payload,
            }
        case TYPE.PRODUCT_FAIL:
            return { 
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};
 
 


