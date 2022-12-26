import { confirmOrderAction, fetchOrderAction } from "../actions/AdminOrderAction"
import { ApiCaller } from "./ApiCaller"


export const getListOrder= async(dispatch)=>{
    return ApiCaller("GET",null,"order/pending")
    .then(res=>dispatch(fetchOrderAction(res.data)))
    .catch(error =>{
        console.log(error)
    })
}

export const confirmOrder = async(dispatch,idOrder,status)=>{
    const data =  JSON.stringify(
        {
            "status" :status,
            "orderId":idOrder
        }
    )
    console.log(data)
    return ApiCaller("PUT",data,'order')
    .then(res => confirmOrderAction(res.data))
    .catch( error => {
        console.log(error)
    })
}