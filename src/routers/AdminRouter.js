import AdminBillPage from "../pages/AdminBillPage";
import AdminCustomerPage from "../pages/AdminCustomerPage";
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
    },
    {
        path : "/admin/customer",
        exact : false,
        page : AdminCustomerPage,
        role:[],
    }
]

export default adminRoutes;