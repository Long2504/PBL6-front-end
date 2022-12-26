import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actFetchProductsRequest } from "../actions/AdminProductAction";
import ProductItem from "../components/admin_product/ProductItems";
import ProductList from "../components/admin_product/ProductList";
import AdminTemplate from "../components/admin_template/AdminTemplate";
import Loading from "../components/LoadingBox";
const AdminProduct = ()=>{

    const dispatch = useDispatch();
    const products=useSelector(state=>state.adminProductReducer.products);
    const loading = useSelector(state=>state.adminProductReducer.loading)

    console.log(products)
    useEffect(()=>{
        dispatch(actFetchProductsRequest())
    },[dispatch])

    const loadProductItems = (products)=>{
        return products.map((product,index)=>(
            <ProductItem key={index} Product={product} index={index} />
        ))
    }
    console.log(loading,"loading")

    return(
        <AdminTemplate>
            <Link to={`./add`} className="btn btn-success col-2" style={{marginBottom:"10px"}}>Add</Link>
            {loading ? <Loading /> : 
                <ProductList>
                    {loadProductItems(products)}
                </ProductList>
            }
        </AdminTemplate>
    )
}

export default AdminProduct;