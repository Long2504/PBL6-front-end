import { pushCartAction } from '../actions/CartAction'


export const pushCart = async (cartItem,dispatch)=>{
    return ApiCaller("POST",cartItem,"cart")
    .then(res=>dispatch(pushCartAction))
    .catch(error=>{
        console.log(error,"error")
    })
}