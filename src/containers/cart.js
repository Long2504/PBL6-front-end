import styles from "../assets/appstyle/cart.module.css"
import { FaMinus,FaPlus,FaTrashAlt } from 'react-icons/fa'
import { Store } from '../reducers/RootReducer'
import { useContext } from "react";
import { Link } from "react-router-dom";


const CartContent =() =>{
    const { state , dispatch: ctxDispath } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    return(
        <div className={styles["cart-content"]}>
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
                                    <tr className={styles["row"]}>
                                        <Link to={'/product/' + item.id  }>
                                            <td>
                                                <img src="https://assets3.razerzone.com/G64tp4ah7joZr6mdqWk6hjDqNRc=/78x78/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh1e%2Fhd4%2F9286405029918%2F210104-blade-15-ch8-fhd-1500x1000-4.jpg"></img>
                                            </td>
                                            <td>{item.name}</td>
                                        
                                        </Link>
                                        <td>{item.price}</td>
                                        <td>
                                            <div className={styles["quantity"]}>
                                                <button className={styles["btn"] + styles["sub"]}>
                                                    <FaMinus style={
                                                            {
                                                                margin:"auto",
                                                                width: "30px"
                                                            }
                                                        } 
                                                    />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button className={styles["btn"] +  styles["add"]}>
                                                    <FaPlus style={
                                                            {
                                                                margin:"auto",
                                                                width: "30px"
                                                            }
                                                        } />
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            <button className={styles["delete"]}>
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
                            <span>10000000</span>
                            
                        </div>
                        <button className={styles["checkout"]}>Thanh Toán</button>
                    </div>
                </div>

            </div>
        </div>
    )
    
}


export default CartContent;