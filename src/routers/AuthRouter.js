import Oauth2Handler from "../containers/Oauth2Handler";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import TEST from "../pages/test";
import Cart from "../pages/CartPage";
import UserPage from "../pages/UserPage";
import Logout from "../containers/Logout";
import NotFound from "../containers/NotFound";
import ResetPassword from "../containers/ResetPassword";
import PaymentSuccess from "../containers/PaymentSuccess";
const authRoutes=[
    {
        path : "/login",
        exact : true,
        page : LoginPage,
        role:[],
    },
    {
        path: "/logout",
        exact : true,
        page : Logout,
        role: [],
    },
    {
        path : "/login/oauth2",
        exact : false,
        page : Oauth2Handler,
        role:[],
    },
    {
        path : "/register",
        exact : true,
        page : RegisterPage,
        role:[],
    },
    {
        path : "/product/:catelogy",
        exact : true,
        page : ProductPage,
        role:[],
    },
    {
        path : "/product/:catelogy/:id",
        exact : true,
        page : ProductDetailPage,
        role:[],
    },
    {
        path : "/product/latop/asc",
        exact : true,
        page : TEST,            
        role:[],
    },
    {
        path: "/cart",
        exact : true,
        page : Cart,
        role:[],
    },
    {
        path: "/user",
        exact: true,
        page:UserPage,
        role:[],
    },
    {   
        path:"/resetpasword",
        exact: true,
        page:ResetPassword,
        role:[]
    },
    {
        path:"/paymentsuccess",
        exact: true,
        page:PaymentSuccess,
        role:[]
    },
    {
        path: "*",
        exact: true,
        page: NotFound,
        role:[],
    }
]

export default authRoutes;