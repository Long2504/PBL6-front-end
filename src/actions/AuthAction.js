
import * as Type from '../contants/ActionType'
import { loginApi } from '../services/AuthService'

export const actLogin = (user)=>{
    return(
        {
            type: Type.LOGIN,
            user,
        }
    )
}

export const actLoginRequest = (user) =>{
    //console.log('action request')
    return dispatch => loginApi(dispatch,user)
}

export const logoutAction = ()=>{
    return ({
        type: Type.LOGOUT
    })
}

export const editUserAction = (data)=>{
    console.log(data,"data action")
    return({
        type: Type.EDIT_USER_SUCCESS,
        data
    })
}