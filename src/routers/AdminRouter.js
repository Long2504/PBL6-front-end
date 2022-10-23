import AdminBillPage from "../pages/AdminBillPage";
import AdminProductActionPage from "../pages/AdminProductActionPage";
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
        path : "/admin/action",
        exact : false,
        page : AdminProductActionPage,
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