import { pushCart } from '../services/CartService'
import * as  TYPE from '../contants/ActionType'

export const fetchCartAction = (cartItems)=> async(dispatch) =>{
  dispatch({
    type: TYPE.CART_LIST_ITEM,
    payload : cartItems
  })
}


export const pushCartAction = (productId,methodQuantity)=>{  
  return dispatch => {
    return pushCart(dispatch,productId,methodQuantity)
  }
}



export const fetchOrderAction = (oders) => async(dispatch)=>{
  console.log(oders)
  dispatch({
    type: TYPE>TYPE.LIST_ORDER_ACCESS,
    payload: oders
  })
}