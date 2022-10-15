import * as Type from "../contants/ActionType"

const authReducer = (state={},action)=>{
    switch(action.type){
        case Type.LOGIN:
            console.log(action.user)
            break;
        default:
    }
    return {}
}

export default authReducer;