import { fetchCategoryAction,fetchProductListAction,fetchProductAction } from "../actions/ProductAction"
import { ApiCaller } from "./ApiCaller"

export const fetchCategory= async (dispatch)=>{
    return ApiCaller("GET",null,"")
    .then(res=>dispatch(fetchCategoryAction(res.data)))
    .catch(error=>{
        console.log({error},"error")
    })
}



export const fetchProductList= async (dispatch)=>{
    return ApiCaller("GET",null,"product")
    .then(res=>dispatch(fetchProductListAction(res.data)))
    .catch(error=>{
        console.log(error,"error")
    })
}



export const fetchProduct= async (dispatch,id)=>{
    return ApiCaller("GET",null,"product/"+id)
    .then(res=>dispatch(fetchProductAction(res.data)))
    .catch(error=>{
        console.log(error,"error")
    })
}