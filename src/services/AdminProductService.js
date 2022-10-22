import { actFetchProducts } from "../actions/AdminProductAction"
import { ApiCaller } from "./ApiCaller"

export const getProducts=(dispatch)=>{
    return ApiCaller("GET",null,"product")
    .then(res=>dispatch(actFetchProducts(res.data)))
}