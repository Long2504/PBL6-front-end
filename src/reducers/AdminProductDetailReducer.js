import * as Type from "../contants/ActionType"

const adminProductDetailReducer = (
    state = {
        loading: true,
        product:{
            name : "",
            price:0,
            status :false,
            description:"",
            popular:"",
            rate:"",
            information:"",
            category:{
                "id":1
            },
            productImgs: [],
            attributes: []
        }
    },
    action)=>{
    switch(action.type){
        case Type.GET_PRODUCT_BY_ID:
            return {
                loading: false,         
                product: action.product
            }
        default:
            return state;
    }
}

export default adminProductDetailReducer;