import { ApiCaller } from "./ApiCaller"
import { loadPaymentAction } from '../actions/OrderAction'

export const pushPayment = async (dispatch,inforCart)=>{
    //console.log(inforCart,"inforCart")
    return ApiCaller("POST",JSON.stringify(inforCart),"payment/paypal")
    .then(res=> dispatch(loadPaymentAction(res.data)))
    .catch(error =>{
        console.log(error,"error")
    })

}