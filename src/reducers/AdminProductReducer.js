import * as Type from "../contants/ActionType"

const adminProductReducer = (state={},action)=>{
    switch(action.type){
        case Type.FETCH_PRODUCTS:
            console.log(action.products)
            return action.products
        default:
    }
    return []
}

export default adminProductReducer;