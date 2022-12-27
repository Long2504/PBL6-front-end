import { pushPayment } from '../services/OrderService'
import * as TYPE from '../contants/ActionType'
export const pushPaymentAction = (inforCart)=>{
    //console.log(inforCart,"inforCart")
    return dispatch => {
        return pushPayment(dispatch,inforCart)
    }
}

export const loadPaymentAction = (link)=>{
    //console.log(link,"orderAction")
    return(
        {
            type: TYPE.PUSH_PAYMENT_ACCESS,
            link
        }
    )
}

export const deleteCartSucessAction = (data)=>{
    return(
        {
            type: TYPE.DELETE_CART_SUCESS,
            data
        }
    )
}


// export const loadOrderAction = ()=>{
//     return({
//         type: "LIST_ORDER_ACCESS"
//     })
// }
