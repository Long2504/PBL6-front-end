import { Component } from "react";
import styles from '../../assets/appstyle/user.module.css'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import Bill from "./Bill";

class Order extends Component{
    render(){
        
        const orderDetailSet = (list)=>{
            const orders = list.map((item,index)=>{
                return(
                    <div key={index} className={styles["info-order"]}>
                        <img src={item.product.productImgs[0]}></img>
                        <div className={styles["infor-more"]}>
                            <p>{item.product.name}</p>
                            <p>x{item.amount}</p>
                        </div>
                    </div>
                )
            })
            return orders
        }
        const listOrder = this.props.listOrder.map((item,index)=>{
            return(
                <div key={index} className={styles["order"]}>
                    <div className={styles["titel-order"]}>
                        <span>{item.dayOrder}</span>
                        <span>{item.orderStatus.name}</span>
                    </div>
                    {orderDetailSet(item.orderDetailSet)}

                    <div className={styles["order-bottom"]}>
                        <div className={styles["total"]}>
                            <FaMoneyBillAlt />
                            <span>Thành tiền : </span>
                            <span>{item.bill.total}</span>
                        </div>
                        <div className={styles['bill']} onClick={this.props.onClickBill}>
                            <FaRegMoneyBillAlt size="1.2vw"/>
                            <span >Hóa đơn</span>
                        </div>
                    </div>
                    {this.props.clickBill ? <Bill bill={item.bill} user={item.user}/> : null }
                
                </div>
            )
        })
        return(
            <div className={styles["list-order"]}>
                {listOrder}
            </div>
        )
    }
}


export default Order