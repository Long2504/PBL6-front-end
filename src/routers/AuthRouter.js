import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import TEST from "../pages/test";
import Cart from "../pages/CartPage";
const authRoutes=[
    {
        path : "/login",
        exact : true,
        page : LoginPage,
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
        path: "/Cart",
        exact : true,
        page : Cart,
        role:[],
    }
]

export default authRoutes;