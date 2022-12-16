import * as Type from "../contants/ActionType"

const adminProductDetailReducer = (state={},action)=>{
    switch(action.type){
        case Type.GET_PRODUCT_BY_ID:
            return action.product
        default:
            return {
                name : "",
                price:0,
                status :false,
                description:"",
                popular:"",
                rate:"",
                information:"",
                category:{
                    "id":1
                }
            }
    }
}

export default adminProductDetailReducer;