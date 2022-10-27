import * as Type from '../contants/ActionType'
import { addProduct, editProduct, getProductById, getProducts } from '../services/AdminProductService'

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

export const actGetProduct = product=>{
    return {
        type : Type.GET_PRODUCT_BY_ID,
        product
    }
}

export const actGetProductByIdRequest= id=>{
    return (dispatch) => {
            return getProductById(dispatch,id);
        }
    
}

export const actEditProduct= product=>{
    return{
        type : Type.EDIT_PRODUCT,
        product
    }
}

export const actEditProductRequest = (product,id)=>{
    return dispatch =>{
        return editProduct(dispatch,product,id);
    }
}

export const actAddProduct= product=>{
    return{
        type : Type.ADD_PRODUCT,
        product
    }
}

export const actAddProductRequest = product=>{
    return dispatch =>{
       return addProduct(dispatch,product)
    }
}