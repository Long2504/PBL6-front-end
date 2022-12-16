import { ApiCaller } from "./ApiCaller"
import { fetchCartAction, fetchOrderAction } from '../actions/CartAction'

var user ;
if(localStorage.getItem("user")){
    user = JSON.parse(localStorage.getItem("user")).userModel
}

export const pushCart = async (dispatch,id,methodQuantity)=>{
    // console.log("pushCartService")
    // console.log(JSON.stringify(id),"ID")
    const method =   methodQuantity === "ADD" ? 'POST': "PUT"  
    return ApiCaller(method,JSON.stringify(id),"cart/" + user.id)
    .then(res=>fetchCart(dispatch))
    .catch(error=>{
        console.log(error,"error")
    })
}


export const fetchCart= async (dispatch)=>{
    return ApiCaller("GET",null,"cart/" + user.id)
    .then(res=>dispatch(fetchCartAction(res.data)))
    .catch(error=>{
        console.log(error,"error")
    })
}

export const fetchOrder = async (dispatch) =>{
    return ApiCaller("GET",null,"order/" + user.id)
    .then(res => dispatch(fetchOrderAction(res.data)))
    .catch(error=>{
        console.log(error,"error")
    })
}