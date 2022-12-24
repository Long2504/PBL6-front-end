import * as Type from "../contants/ActionType"

const adminOrderReducer = (state=[],action)=>{
    var { orders } = action
    switch(action.type){
        case Type.ORDER_LIST_SUCCESS:
            state=orders
            return state
        default:
            return state
    }
}

export default adminOrderReducer;