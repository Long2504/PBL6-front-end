import { library } from '@fortawesome/fontawesome-svg-core';
import {faBell, faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../assets/appstyle/main.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mainMenu = [
    {
        name: "Sản Phẩm",
        to: "/"
    },
    {
        name: "Cửa hàng",
        to: "/"
    },
    {
        name: "Hỗ trợ",
        to: "/"
    },
    {
        name: "Đăng nhập",
        to: "/login"
    },
]


const menberMenu = [
    {
        name: "Thông tin tài khoản",
        to: "/"
    },
    {
        name: "Quản lý đơn hàng",
        to: "/"
    },
    {
        name: "Đăng xuất",
        to: "/"
    }
]

library.add(faMagnifyingGlass,faUser,faBell,faCartShopping)


const MenuBar = () => {
    return (
        <div id="header">
            <div className="container">
                <img src="/assets/image/Low Resolution Logo.png" alt="" className="logo" />
                <ul className="nav">
                    {loadMenu(mainMenu)}
                </ul>
                <div className="iconBlock">
                    <div className="distribution" />
                    <div className='icon'>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" color='silver'/>
                    </div>
                    <div className='icon'>
                        <div className='personal'>
                        <FontAwesomeIcon icon="fa-solid fa-user"  color='silver'/>
                        <ul className="detailPersonal">
                            {loadMenu(menberMenu)}
                        </ul>
                        </div>
                    </div>
                    <div className='icon'>
                    <FontAwesomeIcon icon="fa-solid fa-bell" color='silver'/>
                    </div>
                    <div className='icon' >
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" color='silver'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const loadMenu = (menu) => {
    return (
        menu.map((menu, index) => (
            <li key={index} className="nav-item">
                <Link to={menu.to} className="nav-link" >
                    {menu.name}
                </Link>
            </li>
        ))
    )
}

export default MenuBar;