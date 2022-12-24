import { useState } from "react";
import styles from '../../assets/appstyle/user.module.css'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import Bill from "./Bill";


const ListOrder = (props)=> {
        console.log(props.listOrder,"listOrder")
        const listOrder = props.listOrder.map((order,index)=>
            <Order key={index} order={order} index={index} Check={props.Check}/>
        )
        return(
            <div className={styles["list-order"]}>
                <h1>Đơn Hàng</h1>
                {listOrder}
            </div>
        )
}

const Order = ({order,Check})=>{
    const [isOpen,setIsOpen] = useState(false)
    const onClickOpenOrder = ()=>{
        setIsOpen(true)
        Check(true)
    } 
    const onClickCloseOrder = ()=>{
        setIsOpen(false)
        Check(false)
    }
    return(
        <div className={styles["order"]}>
            <div className={styles["titel-order"]}>
                <span>{order.dayOrder}</span>
                <span>{order.orderStatus.name}</span>
            </div>
            <ItemOfOrder list={order.orderDetailSet} />

            <div className={styles["order-bottom"]}>
                <div className={styles["total"]}>
                    <FaMoneyBillAlt />
                    <span>Thành tiền : </span>
                    <span>{vietnamdognVN.format(order.bill.total)}</span>
                </div>
                <div className={styles['bill']} 
                    onClick={onClickOpenOrder}
                >
                    <FaRegMoneyBillAlt size="1.2vw"/>
                    <span >Hóa đơn</span>
                </div>
            </div>
                    
            <Bill 
                bill={order.bill} 
                open={isOpen}
                onClose={onClickCloseOrder}
            /> 
        </div>
    )
}


// item of one Order
const ItemOfOrder = ({list})=>{
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


let vietnamdognVN = Intl.NumberFormat("vi",{
    style: "currency",
    currency : 'VND'
});

export default ListOrder