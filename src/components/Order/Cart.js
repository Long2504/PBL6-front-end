import { Component } from "react";
import styles from "../../assets/appstyle/cart.module.css"
import { FaMinus,FaPlus,FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";


let vietnamdognVN = Intl.NumberFormat("vi",{
    style: "currency",
    currency : 'VND'
});
class Cart extends Component{
    render(){
        const listProduct = this.props.listProduct;
        const listIdCart = this.props.listIdCart;

       // console.log(listProduct,"listpriduct CARt")
        const total = this.props.total
        const handleQuantity = this.props.handleQuantity
        const handlePayMent = this.props.handlePayMent
        return(
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
                            listProduct.map((item,index) => (
                                <tr key={index} className={styles["row"]}>
                                    <td>
                                        <Link to={'/product/' + item.product.category.name.toString() }>
                                            <img src={item.product.productImgs[0]}></img>
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
                                        <div className={styles["quantity"]}>
                                            <button className={styles["btn"]}
                                                onClick={()=>handleQuantity(item.product.id,'SUB')}
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
                                            <span>{item.amount}</span>
                                            <button className={styles["btn"]}
                                                onClick={()=>handleQuantity(item.product.id,'ADD')}
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
                                        <button style={{backgroundColor: "white",cursor: "pointer"}}>
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
                            {vietnamdognVN.format(total)}
                        </span>
                        
                    </div>
                    <Link>
                    </Link>
                    <button className={styles["checkout"]}
                        onClick={()=>handlePayMent(total,"payment",listIdCart)}
                    >
                        Thanh Toán
                    </button>
                </div>
            </div>

        </div>
        )
    }
}

export default Cart