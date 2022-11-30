import { ApiCaller } from "./ApiCaller"
import { fetchCartAction } from '../actions/CartAction'

// export const pushCart = async (dispatch,id)=>{
//     console.log("pushCartService")
//     console.log(id,"ID")
//     return ApiCaller("POST",JSON.stringify.id,"cart")
//     .then(res=>dispatch(fetchCartAction(res.data)))
//     .catch(error=>{
//         console.log(error,"error")
//     })
// }


export const pushCart = async (dispatch,id)=>{
    console.log("pushCartService")
    console.log(JSON.stringify(id),"ID")
    return ApiCaller("POST",JSON.stringify(id),"cart/4")
    .then(res=>fetchCart(dispatch))
    .catch(error=>{
        console.log(error,"error")
    })
}


export const fetchCart= async (dispatch)=>{
    return ApiCaller("GET",null,"cart/4")
    .then(res=>dispatch(fetchCartAction(res.data)))
    .catch(error=>{
        console.log(error,"error")
    })
}