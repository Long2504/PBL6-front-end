import { useNavigate, useParams } from "react-router-dom";
import AdminProductDetail from "../containers/AdminProductDetail";

const AdminProductDetailPage = ()=>{

    let {id} = useParams();
    let navigate = useNavigate()

    return(
        <div>
           <AdminProductDetail id={id} navigate={navigate} />
        </div>
    )
}

export default AdminProductDetailPage;