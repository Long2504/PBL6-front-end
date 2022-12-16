import styles from '../assets/appstyle/user.module.css'
import Account from '../components/User/Account'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { RiLockPasswordLine } from 'react-icons/ri'
import { TbClipboardList } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrder } from '../services/CartService'
import Order from '../components/User/Order'
const User = ()=>{

    var trackClick = [false,false,false,false]
    const [clickBill,setClickBill] = useState(false)
    var trackClickBill = []
    
    const onClickBill = ()=>{
        
    }

    const [clickItemUser,setClickItemUser] = useState(trackClick)
    const onClickItemUser = (index)=>{
        for (let i = 0; i < trackClick.length; i++) {     
            if(i===index){
                trackClick[i] = true
                console.log('i',i)
            }
            else{
                trackClick[i] = false
            }
        }
        setClickItemUser(trackClick)
        console.log(clickItemUser)
    }
    const dispatch = useDispatch()
    const listOrder = useSelector(state => state.orderReducer.orders);

    useEffect(()=>{
        if(listOrder.length !== 0){
            trackClickBill = new Array(listOrder.length).fill(false)
            setClickBill(trackClickBill)
        }
    })

    useEffect(()=>{
        fetchOrder(dispatch)

    },[dispatch]);

    console.log(listOrder,"listOrder")
    return(
        <div className={styles["user"]}>
            <div className={styles['nav-user']}>
                <div className={styles['profile']}>
                    <img src='assets/image/home.jpg'/>
                    <span>Long</span>
                </div>
                <hr/> 
                <div className={styles['nav']}  >
                    <Link  to={''}>                    
                        <div className={styles['item-nav']} onClick={()=> onClickItemUser(0)} >
                            <BsPersonBoundingBox color='rgb(40, 103, 219)' size="1vw"/>
                            <span style={{ color:clickItemUser[0] ? 'red': null }}>Hồ sơ</span>
                        </div> 
                    </Link> 
                    <Link to={''}>
                        <div className={styles['item-nav']} onClick={()=> onClickItemUser(1)}>
                            <RiLockPasswordLine color='rgb(40, 103, 219)' size="1vw"/>
                            <span style={{ color:clickItemUser[1] ? 'red': null }}>Đổi mật khẩu</span>
                        </div> 
                    </Link>    
                    <Link to={''}>                    
                        <div className={styles['item-nav']} onClick={()=> onClickItemUser(2)}>
                            <TbClipboardList color='rgb(40, 103, 219)' size="1vw"/>
                            <span style={{ color:clickItemUser[2] ? 'red': null }}>Quản lí đơn hàng</span>    
                        </div>
                    </Link>

                </div>
            </div>
            <div className={styles['container-user']}>
                {clickItemUser[0] ? <Account/> : null}
                {clickItemUser[2] ? <Order 
                                        listOrder={listOrder} 
                                        clickBill={clickBill}
                                        onClickBill={onClickBill}
                                    />  
                                    : null }
            </div>
        </div>
    )

}

export default User