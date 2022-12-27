import * as Type from "../contants/ActionType"

const adminOrderReducer = (
    state={
        loading:true,
        orders:[]
    },action
)=>{
    switch(action.type){
        case Type.ORDER_LIST_SUCCESS:
            return {
                loading:false,
                orders:action.orders
            }
        case Type.ORDER_PUSH_SUCCESS:
            console.log(action.orders)
        default:
            return state
    }
}

export default adminOrderReducer;