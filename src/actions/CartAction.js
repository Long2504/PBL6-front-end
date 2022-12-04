import { pushCart } from '../services/CartService'

export const addToCart = (productId) => async (dispatch) => {
  dispatch({
    type: 'CART_ADD_ITEM',
    payload: {
      id: productId,
      quatity: 1
    },
  });

  
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: 'CART_REMOVE_ITEM', payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};



export const fetchCartAction = (cartItems)=> async(dispatch) =>{
  dispatch({
    type: 'CART_LIST_ITEM',
    payload : cartItems
  })
  //console.log(product,"product Action")
}



export const pushCartAction = (productId,methodQuantity)=>{  
  return dispatch => {
    return pushCart(dispatch,productId,methodQuantity)
  }
}

export const subQuantityCartAction = (productId)=>{
  return dispatch => {
    // return subQuantityProduct(dispatch,productId)
  }
}