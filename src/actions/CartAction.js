

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

export const fetchCartAction = (product)=>{
  //console.log(product,"product Action")
  return{
    type: 'PRODUCT_SUCCESS',
    payload : product
  }
}
export const pushCartAction = (cartItem)=> async() =>{
  dispatch({
    type: 'CART_PUT_ITEM',cartItem
  });
}