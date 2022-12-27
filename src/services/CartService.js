import { ApiCaller } from "./ApiCaller"
import { fetchCartAction, fetchOrderAction } from '../actions/CartAction'
import { deleteCartSucessAction } from "../actions/OrderAction"

// var user ;
// if(localStorage.getItem("user")){
//     user = JSON.parse(localStorage.getItem("user")).userModel
// }

export const pushCart = async (dispatch,id,methodQuantity)=>{
    // console.log("pushCartService")
    // console.log(JSON.stringify(id),"ID")
    const user = JSON.parse(localStorage.getItem("user")).userModel
    if(user){
        const method = methodQuantity === "ADD" ? 'POST': "PUT"  
        return ApiCaller(method,JSON.stringify(id),"cart/" + user.id)
        .then(res=>fetchCart(dispatch))
        .catch(error=>{
            console.log(error,"error")
        })
    }
    else{
        alert("Vui lòng đăng nhập")
    }
}


export const fetchCart= async (dispatch)=>{
    const user = JSON.parse(localStorage.getItem("user")).userModel
    if(user){
        return ApiCaller("GET",null,"cart/" + user.id)
        .then(res=>dispatch(fetchCartAction(res.data)))
        .catch(error=>{
            console.log(error,"error")
        })
    }
    else{
        alert("Vui lòng đăng nhập")
    }
}

export const fetchOrder = async (dispatch) =>{
    const user = JSON.parse(localStorage.getItem("user")).userModel
    if(user){
        console.log(user.id,"user.id")
        return ApiCaller("GET",null,"order/" + user.id)
        .then(res => dispatch(fetchOrderAction(res.data)))
        .catch(error=>{
            console.log(error,"error")
        })
    }
    else{
        alert("Vui lòng đăng nhập")
    }
}

export const deleteCart = async (dispatch,IdCart)=>{
        return ApiCaller("DELETE",null,"cart/" + IdCart)
        .then(()=>fetchCart(dispatch))
        .catch(error=>{
            console.log(error,"error")
        })
    }
