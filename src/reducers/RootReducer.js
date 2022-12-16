import adminBillReducer from "./AdminBillReducer";
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
    authReducer,
    adminBillReducer
}

export default rootReducer;

export const Store = createContext();


