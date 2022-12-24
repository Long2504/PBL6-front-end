import { Component } from "react";
import AdminMenuBar from "../../menu/AdminMenu";

class AdminTemplate extends Component {
    render() {
        return (
            <div style={{paddingTop: '100px'}}>
                <div className="container-fluid d-flex text-primary pb-4 px-4" style={{minHeight:"65rem"}}>
                    {/* Sidebar Start */}
                    <AdminMenuBar/>
                    {/* Sidebar End */}
                    {/* Content Start */}
                    <div className="content col-md-10">
                        {this.props.children}
                    </div>
                    {/* Content End */}
                    {/* Back to Top */}
                </div>

            </div>
        )
    }
}

export default AdminTemplate;