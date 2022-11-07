import adminBillReducer from "./AdminBillReducer";
import adminProductDetailReducer from "./AdminProductDetailReducer";
import adminProductReducer from "./AdminProductReducer";
import adminReportReducer from "./AdminReportReducer";
import authReducer from "./AuthReducer"

const rootReducer = {
    adminProductReducer ,   
    authReducer,
    adminBillReducer,
    adminProductDetailReducer,
    adminReportReducer
}

export default rootReducer;