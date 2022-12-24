import adminOrderReducer from "./AdminOrderReducer";
import adminProductDetailReducer from "./AdminProductDetailReducer";
import adminProductReducer from "./AdminProductReducer";
import adminReportReducer from "./AdminReportReducer";
import authReducer from "./AuthReducer"
import { cartReducer } from "./CartReducer";
import { catalogReducer, productsReducer, productReducer } from "./ProductReducer"
import { paymentReducer,orderReducer } from "./OrderReducer"
import { createContext } from "react";


const rootReducer = {
    adminProductReducer ,   
    adminReportReducer,
    adminProductDetailReducer,
    authReducer,
    adminOrderReducer,
    cartReducer,
    catalogReducer,
    productsReducer,
    productReducer,
    paymentReducer,
    orderReducer
}

export default rootReducer;

export const Store = createContext();


