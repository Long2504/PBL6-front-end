import styles from "../assets/appstyle/cart.module.css"
import { FaMinus,FaPlus,FaTrashAlt,FaAngleRight } from 'react-icons/fa'
import { Store } from '../reducers/RootReducer'
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from '../services/CartService'


const CartContent =() =>{
    const dispatch = useDispatch();
    const cartItems = useSelector(state=>state.cartReducer.cartItems)
    // const [total,setTotal] = useState(0)
    useEffect(()=>{
        fetchCart(dispatch)
        
    },[dispatch]);
    console.log(cartItems,"cartItems")
    
    let vietnamdognVN = Intl.NumberFormat("vi",{
        style: "currency",
        currency : 'VND'
    });


    return(
        <div className={styles["cart-content"]}>
            <div className={styles["div-link"]}>
                <span>Trang chủ</span>
                <FaAngleRight
                    style={
                        {
                            margin:"auto",
                            width: "20px",
                            fontWeight:"10",
                        }
                    } 
                >
                </FaAngleRight>
                
                <span>Giỏ hàng</span>
            </div>
            <h1
                style={
                    {
                        marginLeft:"240px",
                        marginTop:"20px"

                    }
                }
            >Giỏ hàng</h1>
            <div className={styles["container-cart"]}>

                <div className={styles["items"]} >
                    <table>
                        <tbody>
                            <tr className={styles["row"]}>
                                <th>Sản Phẩm</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Đơn Giá</th>
                                <th>Số Lượng</th>
                                <th>Thành Tiền</th>
                                <th>Xóa</th>
                            </tr>
                            {
                                cartItems.map((item) => (
                                    <tr 
                                        className={styles["row"]}
                                    >
                                        <td>
                                            <Link 
                                                to={'/product/' + item.product.category.name.toString() }
                                            >
                                                <img 
                                                    src={item.product.productImgs[0]}
                                                > 
                                                </img>
                                            </Link>
                                        </td>
                                        <td>
                                            {item.product.name.split(`(`)[0]}
                                        </td>
                                        <td 
                                            style={
                                                {
                                                    color:"black",
                                                    fontSize:"25px",
                                                    fontWeight: "700",
                                                }
                                            }
                                            >
                                            {vietnamdognVN.format(item.product.price)}
                                        </td>
                                        <td>
                                            <div 
                                                className={styles["quantity"]}
                                            >
                                                <button 
                                                    className={styles["btn"] + styles["sub"]}
                                                >
                                                    <FaMinus 
                                                        style={
                                                            {
                                                                margin:"auto",
                                                                width: "30px"
                                                            }
                                                        } 
                                                    />
                                                </button>
                                                <span>
                                                    {item.amount}
                                                </span>
                                                <button 
                                                    className={styles["btn"] +  styles["add"]}
                                                >
                                                    <FaPlus 
                                                        style={
                                                            {
                                                                margin:"auto",
                                                                width: "30px"
                                                            }
                                                        } />
                                                </button>
                                            </div>
                                        </td>
                                        <td
                                            style={
                                                {
                                                    color:"black",
                                                    fontSize:"25px",
                                                    fontWeight: "700",
                                                }
                                            }
                                        >
                                            {vietnamdognVN.format(item.product.price*item.amount)}
                                        </td>
                                    
                                        <td>
                                            <button 
                                                className={styles["delete"]}
                                            >
                                                <FaTrashAlt size={"25px"}  />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className={styles["total"]}>
                    <div className={styles["coupon"]}>
                        <p>Khuyến Mãi</p>
                        <div className={styles["coupon-container"]}>
                            <input type={"text"} placeholder={"Mã khuyến mãi"}></input>
                            <button className={styles["btn-discount"]}>Áp dụng </button>
                        </div>
                    </div>
                    <div className={styles["sum"]}>
                        <p>Thanh Toán</p>
                        <div className={styles["sum-container"]}>
                            <span>Thành Tiền :</span>
                            <span
                                style={
                                    {
                                        fontSize:"30px",
                                        fontWeight: "700",
                                        color:"red"
                                    }
                                }
                            >
                                {vietnamdognVN.format(1055520000)}
                            </span>
                            
                        </div>
                        <button className={styles["checkout"]}>Thanh Toán</button>
                    </div>
                </div>

            </div>
        </div>
    )
    
}


export default CartContent;