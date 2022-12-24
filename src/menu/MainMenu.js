import { Link } from 'react-router-dom';

import styles from '../../src/assets/appstyle/header.module.css'
import { FaSistrix,FaCartPlus } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBell } from 'react-icons/bs'
import { useSelector } from "react-redux";
import { useState } from 'react';


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
    // {
    //     name: "Đăng nhập",
    //     to: "/login"
    // },
]

const menberMenu = [
    {
        name: "Thông tin tài khoản",
        to: "/User"
    },
    {
        name: "Quản lý đơn hàng",
        to: "/"
    },
    {
        name: "Đăng xuất",
        to: "/logout"
    }
]


const MenuBar = () => {
    const cartItems = useSelector(state=>state.cartReducer.cartItems);
    const check = useSelector(state=>state.authReducer.logged)
    console.log(check)

    const [clickPersonal,setClickPersonal] = useState(false);
    const onClickPersonal = ()=>{
        setClickPersonal(!clickPersonal)
    }
    

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
                <div className={styles["btn"]}>
                    <FaSistrix size="1.2vw" color='#008ECC'/>
                </div>
                <div className={styles['btn']} onClick={onClickPersonal} >    
                    <AiOutlineUser size="1.3vw"  color='#008ECC'/>
                    {
                        clickPersonal ? <ul className={styles["detailPersonal"]}>
                        {loadMenu(menberMenu)}</ul> : null
                    }
                </div>

                <div className={styles["btn"]}>
                    <BsBell size="1.2vw" color='#008ECC'/>
                </div>
                <div className={styles["btn"]}>
                    <Link to={"/cart"}>
                        <FaCartPlus size="1.2vw" color='#008ECC' />
                        <div className={styles["cart-item-qty"]}>
                            <span >{cartItems.length}</span>
                        </div>
                    </Link>
                </div>
                {!check ? <Link className={styles['login']} to={"/login"}>Đăng nhập</Link> : null}
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