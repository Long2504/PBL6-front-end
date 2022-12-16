import adminBillReducer from "./AdminBillReducer";
import adminProductReducer from "./AdminProductReducer";
import authReducer from "./AuthReducer"
import { cartReducer } from "./CartReducer";
import { catalogReducer, productsReducer, productReducer } from "./ProductReducer"
import { paymentReducer,orderReducer } from "./OrderReducer"
import { createContext } from "react";


const rootReducer = {
    adminProductReducer ,   
    authReducer,
    adminBillReducer,
    cartReducer,
    catalogReducer,
    productsReducer,
    productReducer,
    paymentReducer,
    orderReducer
}

export default rootReducer;

export const Store = createContext();


