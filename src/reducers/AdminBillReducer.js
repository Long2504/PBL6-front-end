import * as Type from "../contants/ActionType"

const adminBillReducer = (state={},action)=>{
    switch(action.type){
        case Type.FETCH_BILLS:
            return action.bills
        default:
    }
    return []
}

export default adminBillReducer;