import Oauth2Handler from "../containers/Oauth2Handler";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const authRoutes=[
    {
        path : "/login",
        exact : true,
        page : LoginPage,
        role:[],
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
    }
]

export default authRoutes;