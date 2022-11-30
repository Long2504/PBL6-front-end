import adminBillReducer from "./AdminBillReducer";
import adminProductReducer from "./AdminProductReducer";
import authReducer from "./AuthReducer"
import { cartReducer } from "./CartReducer";
import { catalogReducer, productsReducer, productReducer } from "./ProductReducer"
import { createContext } from "react";


const rootReducer = {
    adminProductReducer ,   
    authReducer,
    adminBillReducer,
    cartReducer,
    catalogReducer,
    productsReducer,
    productReducer,
}

export default rootReducer;

export const Store = createContext();


// export const StoreProvider = (props) => {
//     const [state,dispatch] = useReducer(reducer,initialState)
//     const value = {state, dispatch};
//     return <Store.Provider value={value}>{props.children}</Store.Provider>

// }