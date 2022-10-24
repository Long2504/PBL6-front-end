import AdminBill from "../containers/AdminBill";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
const AdminBillPage = () => {
    return (
        <Container>
                <Col>
                    <h2>
                        Bill Admin
                    </h2>
                    <AdminBill />
                </Col>
        </Container>
    )
}

export default AdminBillPage;