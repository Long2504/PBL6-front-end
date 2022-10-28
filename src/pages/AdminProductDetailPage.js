import { useNavigate, useParams } from "react-router-dom";
import AdminProductDetail from "../containers/AdminProductDetail";
import Container from 'react-bootstrap/Container';
const AdminProductDetailPage = ()=>{

    let {id} = useParams();
    let navigate = useNavigate()

    return(
        <Container style={{display:"block"}}>
           <AdminProductDetail id={id} navigate={navigate} />
        </Container>
    )
}

export default AdminProductDetailPage;