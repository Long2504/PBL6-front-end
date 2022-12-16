

export const fetchCategoryAction = (categories)=>{
  return {
    type : "CATALOG_LIST_SUCCESS",
    payload : categories
  }
}

export const fetchProductListAction = (products)=>{
  return{
    type: 'PRODUCT_LIST_SUCCESS',
    payload : products
  }
}


export const fetchProductAction = (product)=>{
  //console.log(product,"product Action")
  return{
    type: 'PRODUCT_SUCCESS',
    payload : product
  }
}