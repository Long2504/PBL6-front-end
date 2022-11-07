import adminBillReducer from "./AdminBillReducer";
import adminProductReducer from "./AdminProductReducer";
import authReducer from "./AuthReducer"
import { createContext, useReducer } from "react";

const rootReducer = {
    adminProductReducer ,   
    authReducer,
    adminBillReducer
}

export default rootReducer;

export const Store = createContext();

const initialState = {
    cart: {
        cartItems: [],
    },
}


function reducer(state,action){
    switch(action.type){
        case 'CART_ADD_ITEM':
           
            const newItem = action.payload;
            console.log(newItem,"action")
            const existItem = state.cart.cartItems.find((item) => item.id === newItem.id);
            console.log(existItem,"sdf")
            const cartItems = existItem ? state.cart.cartItems.map((item) =>
                item.id === existItem.id ? newItem : item) : [...state.cart.cartItems, newItem];
            return {
                ...state, 
                cart: {...state.cart, cartItems}
            }
        default:
            return state
    }



}
export const StoreProvider = (props) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const value = {state, dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>

}