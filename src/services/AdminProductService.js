import { actAddProduct, actEditProduct, actFetchProducts, actGetProduct } from "../actions/AdminProductAction"
import { ApiCaller } from "./ApiCaller"

export const getProducts=(dispatch)=>{
    return ApiCaller("GET",null,"product")
    .then(res=>dispatch(actFetchProducts(res.data)))
}

export const getProductById=(dispatch,id)=>{
    return ApiCaller("GET",null,`product/${id}`)
    .then(res=>dispatch(actGetProduct(res.data)))
}

export const editProduct=(dispatch,product,id)=>{
    return ApiCaller("PUT",JSON.stringify(product),`product/edit/${id}`)
    .then(res=>dispatch(actEditProduct(res.data)))
}

export const addProduct=(dispatch,product)=>{
    return ApiCaller("POST",product,"product/add")
    .then(res=>dispatch(actAddProduct(res.data)))
}