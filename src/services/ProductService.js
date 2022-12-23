import { fetchCategoryAction,fetchProductListAction,fetchProductAction, errorProductListAction, loadingProductListAction, loadingCategoryAction, errorCategoryAction, loadingProductAction, errorProductAction } from "../actions/ProductAction"
import { ApiCaller } from "./ApiCaller"


const getError = (error)=> error.response && error.response.data.message ? error.response.data.message : error.message

export const fetchCategory= async (dispatch)=>{
    dispatch(loadingCategoryAction())
    return ApiCaller("GET",null,"")
    .then(res=>dispatch(fetchCategoryAction(res.data)))
    .catch(error=>{
        console.log({error},"error Category")
        dispatch(errorCategoryAction(getError(error)))
    })
}


export const fetchProductList= async (dispatch)=>{
    dispatch(loadingProductListAction())
    return ApiCaller("GET",null,"product")
    .then(res=>dispatch(fetchProductListAction(res.data)))
    .catch(error=>{
        console.log(error,"error")
        dispatch(errorProductListAction(getError(error)))
    })
}


export const fetchProduct = (id) => async (dispatch)=>{
    //dispatch(loadingProductAction())
    return ApiCaller("GET",null,"product/"+id)
    .then(res=>{console.log(res.data) ; dispatch(fetchProductAction(res.data))})
    .catch(error=>{
        console.log(error,"error")
        dispatch(errorProductAction(getError(error)))
    })
}