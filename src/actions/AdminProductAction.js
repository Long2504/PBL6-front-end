import * as Type from '../contants/ActionType'
import { getProducts } from '../services/AdminProductService'

export const actFetchProducts = (products)=>{
    return {
        type : Type.FETCH_PRODUCTS,
        products:products
    }
}

export const actFetchProductsRequest = ()=>{
    return dispatch =>{
        return getProducts(dispatch)
    }
}