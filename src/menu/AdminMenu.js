import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const adminMenu = [
    {
        name: "Dashboard",
        to: "/admin"
    },
    {
        name: "Bill",
        to: "/admin/bill"
    },
    {
        name: "Product",
        to: "/admin/product"
    }
]




const AdminMenuBar = () => {
    return (
        <div className=" pt-4 px-4">
        <nav className="navbar bg-dark navbar-dark">
            <a href="index.html" className="navbar-brand mx-4 mb-3">
                <h3 className="text-primary"><i className="fa fa-user-edit me-2" />ADMIN</h3>
            </a>
            <div className="navbar-nav w-100">
                {loadMenu(adminMenu)}
                            </div>
        </nav>
    </div>
    )
}

const loadMenu = (menu) => {
    return (
        menu.map((menu, index) => (
            <div className="nav-item nav-link active" key={index}>
                <Link to={menu.to} className="nav-link" >
                    {menu.name}
                </Link>             
                 </div>

        ))
    )
}

export default AdminMenuBar;