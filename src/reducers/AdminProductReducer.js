import * as Type from "../contants/ActionType"

const adminProductReducer = (state=[],action)=>{
    var {product} = action;
    switch(action.type){
        case Type.FETCH_PRODUCTS:
            return action.products
        case Type.EDIT_PRODUCT:
            // var index = state.findIndex(productElement =>productElement.id===product.id);
            state = state.map((newProduct)=>{
                if(product.id===newProduct.id) return product;
                return newProduct;
            })
            return [...state]
        case Type.ADD_PRODUCT:
            state.push(product);
            return [...state]
        default:
            return state;
    }
}

export default adminProductReducer;