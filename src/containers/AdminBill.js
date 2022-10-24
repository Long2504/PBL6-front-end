import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchBillsRequest } from "../actions/AdminBillAction";
import BillDetailItems from "../components/admin_bill/BillDetailItems";
import BillItem from "../components/admin_bill/BillItems";
import BillList from "../components/admin_bill/BillList";
const AdminBill = ()=>{

    const dispatch = useDispatch();
    const bills=useSelector(state=>state.adminBillReducer);
    const [show, setShow] = useState(false);
    const [bill,setBill] = useState();
    useEffect(()=>{
        dispatch(actFetchBillsRequest())
    },[dispatch])


    const getBill=(value)=>{
        var billNew = bills.find(x=>x.id ===value)
        handleShow(billNew);
    }

    const loadBillItems = (bills)=>{
        return bills.map((bill,index)=>(
            <BillItem key={index} Bill={bill} index={index} getBill={getBill}/>
        ))
    }



    const loadBillDetailItems=(bill)=>{
        console.log(bill)
        if(bill){
            return bill.billDetails.map((item,index)=>(
                <BillDetailItems key={index} name={item.product.name} price={item.product.price}/>
            ))
        }
        return null
    }

    const handleClose = () =>{
        getBill(-1);
        setShow(false);
    }
    const handleShow = (bill) =>{
        setBill(bill);
        setShow(true);
    }
    // const calculatorAmount = ()=>{
        
    // }



    return(
        <div>
            <BillList loadBillDetail={loadBillDetailItems} bill={bill} getBill={getBill} show={show} handleClose={handleClose} handleShow={handleShow}>
                {loadBillItems(bills)}
            </BillList>
        </div>
    )
}

export default AdminBill;