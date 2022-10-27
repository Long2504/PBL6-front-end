import adminBillReducer from "./AdminBillReducer";
import adminProductDetailReducer from "./AdminProductDetailReducer";
import adminProductReducer from "./AdminProductReducer";
import authReducer from "./AuthReducer"


const rootReducer = {
    adminProductReducer ,   
    authReducer,
    adminBillReducer,
    adminProductDetailReducer
}

export default rootReducer;