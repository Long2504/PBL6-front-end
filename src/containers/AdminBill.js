import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actFetchBillsRequest } from "../actions/AdminBillAction";
import BillItem from "../components/admin_bill/BillItems";
import BillList from "../components/admin_bill/BillList";
const AdminBill = ()=>{

    const dispatch = useDispatch();
    const bills=useSelector(state=>state.adminBillReducer);

    console.log(bills)
    useEffect(()=>{
        dispatch(actFetchBillsRequest())
    },[dispatch])

    const loadBillItems = (bills)=>{
        return bills.map((bill,index)=>(
            <BillItem key={index} Bill={bill} index={index} />
        ))
    }

    return(
        <div>
        <Link to={`./add`} className="btn btn-success" style={{marginBottom:"10px"}}>Add</Link>
            <BillList>
                {loadBillItems(bills)}
            </BillList>
        </div>
    )
}

export default AdminBill;