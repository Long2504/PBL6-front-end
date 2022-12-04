import {pushPayment } from '../services/OrderService'

export const pushPaymentAction = (inforCart)=>{
    console.log(inforCart,"inforCart")
    return dispatch => {
        return pushPayment(dispatch,inforCart)
    }
}

export const loadPaymentAction = (link)=>{
    console.log(link,"orderAction")
    return(
        {
            type: "PUSH_PAYMENT_ACCESS",
            link
        }
    )

}
