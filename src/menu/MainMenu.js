import { Link } from 'react-router-dom';

import styles from '../../src/assets/appstyle/header.module.css'
import { FaSistrix,FaUser,FaBell,FaCartPlus } from 'react-icons/fa'
import { useSelector } from "react-redux";


const mainMenu = [
    {
        name: "Sản Phẩm",
        to: "/product/latop"
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


const MenuBar = () => {
    const cartItems = useSelector(state=>state.cartReducer.cartItems)

    return (
        <header>
            <div className={styles['div-img']}>
                <Link to={""}>
                    <img src="/assets/image/logo.jpg" alt="" className={styles["logo"]} />
                </Link>
            </div>
            <div className={styles["nav"]}>
                <ul>
                    {loadMenu(mainMenu)}
                </ul>
            </div>
            <div className={styles["iconBlock"]}>
                <div className={styles["distribution"]} />
                <div className={styles["btn"] + " " + styles["btn-search"]}>
                    <button >
                        <FaSistrix size="2.6vh"/>
                    </button>
                </div>
                <div className={styles['personal']}>    
                    <button className={styles["btn-personal"]}>
                        <FaUser size="2.6vh" />
                    </button>
                    <ul className={styles["detailPersonal"]}>
                        {loadMenu(menberMenu)}
                    </ul>
                </div>
                <div className={styles["btn"] + " " + styles["btn-nofitication"]}>
                    <button >
                        <FaBell size="2.6vh"/>
                    </button>
                </div>
                <div className={styles["btn"] + " " + styles["btn-cart"]}>
                    <button >
                        <Link to={"/cart"}>
                            <FaCartPlus size="2.6vh" color='black' />
                            <div className={styles["cart-item-qty"]}>
                                <span >{cartItems.length}</span>
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    )
}

const loadMenu = (menu) => {
    return (
        menu.map((menu, index) => (
            <li key={index} className={styles["nav-item"]}>
                <Link to={menu.to.toString()} className={styles["nav-link"]} >
                    {menu.name}
                </Link>
            </li>
        ))
    )
}

export default MenuBar;