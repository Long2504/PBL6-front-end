import Axios from "axios";

export const listCatalogs =() => async (dispatch) => {
  dispatch({
    type: 'LIST_CATALOG_REQUEST',
  });
  try {
    const { data } = await Axios.get('https://backendpbl6.herokuapp.com/');
    //console.log(data)
    dispatch({ type: 'CATALOG_LIST_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'CATALOG_LIST_FAIL', payload: error.message });
  }
};


export const listProducts = () => async (dispatch) => {
  dispatch({
    type: 'PRODUCT_LIST_REQUEST',
  });
  try {
    const { data } = await Axios.get('https://backendpbl6.herokuapp.com/product');
    dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'PRODUCT_LIST_FAIL', payload: error.message });
  }
};