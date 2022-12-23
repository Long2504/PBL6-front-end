import * as TYPE from '../contants/ActionType'


//---------------Category----------------------//

export const loadingCategoryAction = ()=>{
  return{
    type : TYPE.CATALOG_LIST_REQUEST,
    loading : true
  }
}

export const fetchCategoryAction = (categories)=>{
  return {
    type : TYPE.CATALOG_LIST_SUCCESS,
    payload : categories
  }
}

export const errorCategoryAction = (error)=>{
  console.log(error,"errorCategory")
  return{
    type: TYPE.CATALOG_LIST_FAIL,
    payload: error
  }
}


//============================================//
//---------------List Product-----------------//
export const loadingProductListAction = ()=>{
  return{
    type : TYPE.PRODUCT_LIST_REQUEST,
    loading : true
  }
}

export const fetchProductListAction = (products)=>{
  return{
    type: TYPE.PRODUCT_LIST_SUCCESS,
    payload : products
  }
}


export const errorProductListAction = (error)=>{
  console.log(error,"errorProduct")
  return{
    type: TYPE.PRODUCT_LIST_FAIL,
    payload: error
  }
}
//============================================//

//------------------- Product-----------------//

export const loadingProductAction = ()=>{
  return{
    type : TYPE.PRODUCT_REQUEST,
    loading : true
  }
}



export const fetchProductAction = (product)=>{
  console.log(product,"action")
  return{
    type: TYPE.PRODUCT_SUCCESS,
    payload : product
  }
}

export const errorProductAction = (error)=>{
  console.log(error,"errorProduct")
  return{
    type: TYPE.PRODUCT_FAIL,
    payload: error
  }
}