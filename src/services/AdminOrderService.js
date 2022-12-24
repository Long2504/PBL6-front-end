import { fetchOrderAction } from "../actions/AdminOrderAction"
import { ApiCaller } from "./ApiCaller"


export const getListOrder= async(dispatch)=>{
    return ApiCaller("GET",null,"order/pending")
    .then(res=>dispatch(fetchOrderAction(res.data)))
    .catch(error =>{
        console.log(error)
    })
}