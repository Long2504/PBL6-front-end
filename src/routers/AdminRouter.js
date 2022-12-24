import AdminOrderPage from "../pages/AdminOrderPage";
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
        path : "/admin/order",
        exact : false,
        page : AdminOrderPage,
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