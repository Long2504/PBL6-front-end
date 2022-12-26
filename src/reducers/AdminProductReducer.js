import * as Type from "../contants/ActionType";

const adminProductReducer = (
    state = {
        loading: true,
        products: []
    }, action
)=>{
	var { product } = action;
	switch (action.type) {
		case Type.FETCH_PRODUCTS:
			return {
                loading:false,
                products: action.products  
            } 
		case Type.EDIT_PRODUCT:
			// var index = state.findIndex(productElement =>productElement.id===product.id);
			state = state.products.map((newProduct) => {
				if (product.id === newProduct.id) return product;
				return newProduct;
			});
			return {
                loading: false,
                products: [...state]
            };
		case Type.ADD_PRODUCT:
			state.push(product);
			return [...state];
		default:
			return state;
	}
};

export default adminProductReducer;
