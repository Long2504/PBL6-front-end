import AdminOrderPage from "../pages/AdminOrderPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminProductDetailPage from "../pages/AdminProductDetailPage";
import AdminProductPage from "../pages/AdminProductPage";
import LoginPage from "../pages/LoginPage";


const CheckAdmin = (props) => {
	const user = JSON.parse(localStorage.getItem("user"));
	if (user) {
		if (user.roles.length === 1) {
			return "khong co quyen";
		} 
        else {
            if(props.role === 'admin'){
                return < AdminDashboardPage />
            }
            if(props.role === 'order'){
                return < AdminOrderPage />
            }
            if(props.role === 'productDetail'){
                return < AdminProductDetailPage />
            }
            if(props.role === 'product'){
                return < AdminProductPage />
            }
		}
	}
    else{
        return <LoginPage/>
    }
};

export default CheckAdmin
