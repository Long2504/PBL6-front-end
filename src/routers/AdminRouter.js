import AdminBillPage from "../pages/AdminBillPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminProductDetailPage from "../pages/AdminProductDetailPage";
import AdminProductPage from "../pages/AdminProductPage";

const adminRoutes=[
    {
        path : "/admin",
        exact : true,
        page : AdminDashboardPage,
        role:[],
    },
    {
        path : "/admin/bill",
        exact : false,
        page : AdminBillPage,
        role:[],
    },
    {
        path : "/admin/product/:id",
        exact : false,
        page : AdminProductDetailPage,
        role:[],
    },
    {
        path : "/admin/product",
        exact : false,
        page : AdminProductPage,
        role:[],
    }
]

export default adminRoutes;