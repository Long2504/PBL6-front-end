import * as Type from "../contants/ActionType"

const adminBillReducer = (state=[],action)=>{
    var {bills} = action
    switch(action.type){
        case Type.FETCH_BILLS:
            state=bills
            return state
        default:
            return state
    }
}

export default adminBillReducer;