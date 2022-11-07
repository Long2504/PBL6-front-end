import styles from "../assets/appstyle/cart.module.css"

const CartContent =() =>{
    // const { state , dispatch: ctxDispath } = useContext(Store);
    // const {
    //     cart: { cartItems },
    // } = state;
    return(
        <div className={styles["cart-content"]}>
            <div className={styles["container-cart"]}>
                <div className={styles["items"]}>
                    <table>
                        <tr className={styles["row"]}>
                            <th>Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Đơn Giá</th>
                            <th>Số Lượng</th>
                            <th>Thành Tiền</th>
                        </tr>
                        <tr className={styles["row"]}>
                            <td>
                                <img src="https://assets3.razerzone.com/G64tp4ah7joZr6mdqWk6hjDqNRc=/78x78/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh1e%2Fhd4%2F9286405029918%2F210104-blade-15-ch8-fhd-1500x1000-4.jpg"></img>
                            </td>
                            <td>
                            Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black
                            </td>
                            <td>
                                40.0000
                            </td>
                            <td>
                                <button>-</button>
                                <span>3</span>
                                <button>+</button>
                            </td>
                            <td>
                                40000000
                            </td>
                            <td>
                                <button>Xoa</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles["total"]}>
                    <div className="coupon">
                        asdfasdf
                    </div>
                    <div className={styles["sum"]}>
                        <h3>Thanh Toán</h3>
                        <div>
                            <span>thành Tiền</span>
                            <span>xxxxxxxxxx</span>
                            
                        </div>
                        <button>Thanh Toán</button>
                    </div>
                </div>

            </div>
        </div>
    )
    
}


export default CartContent;