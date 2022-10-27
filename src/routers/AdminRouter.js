import AdminBillPage from "../pages/AdminBillPage";
import AdminProductDetailPage from "../pages/AdminProductDetailPage";
import AdminProductPage from "../pages/AdminProductPage";
import AdminReportPage from "../pages/AdminReportPage";

const adminRoutes=[
    {
        path : "/admin",
        exact : false,
        page : AdminProductPage,
        role:[],
    },
    {
        path : "/admin/bill",
        exact : false,
        page : AdminBillPage,
        role:[],
    },
    {
        path : "/admin/:id",
        exact : false,
        page : AdminProductDetailPage,
        role:[],
    },
    {
        path : "/admin/bill/detail",
        exact : false,
        page : AdminProductDetailPage,
        role:[],
    },
    {
        path : "/admin/report",
        exact : false,
        page : AdminReportPage,
        role:[],
    }
]

export default adminRoutes;