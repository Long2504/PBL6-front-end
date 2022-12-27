import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "../components/admin_bill/OrderList";
import OrderItem from "../components/admin_bill/OrderItems";
import OrderDetailModal from '../components/admin_bill/OrderDetailModal'
import AdminTemplate from "../components/admin_template/AdminTemplate";
import { getListOrder } from "../services/AdminOrderService"
import { confirmOrder } from "../services/AdminOrderService";
import Loading from "../components/LoadingBox";

const AdminOrder = () => {
	const dispatch = useDispatch();
	const orders = useSelector(state => state.adminOrderReducer.orders);
	const loading = useSelector(state=>state.adminOrderReducer.loading)
	const [confirm,setConfirm] = useState(false)
	const [onClickShow,setOnClickShow] = useState(false)
	const [indexCurent,setIndexCurent] = useState(0)

	useEffect(() => {
		getListOrder(dispatch)
	}, [dispatch,confirm]);
	console.log(orders)

	const clickOpen = (index)=>{
		setOnClickShow(true)
		setIndexCurent(index)
	}
	const clickClose = ()=>{
		setOnClickShow(false)
	}
	const onClickConfirmStatus = async (idOrder,status)=>{
		await confirmOrder(dispatch,idOrder,status)
		setOnClickShow(false)
		setConfirm(!confirm)
	}

	const loadOrderItems = (orders) => {
		return orders.map((order, index) => (
			<OrderItem 
				key={index} 
				Order={order} 
				index={index} 
				onClickShow={clickOpen}  
			/>
		));
	};
	

	return (
		<AdminTemplate>
			{loading ? <Loading /> : 
			<OrderList>
				{loadOrderItems(orders)}
			</OrderList>
}
			<OrderDetailModal 
				clickClose={clickClose} 
				check = {onClickShow}
				order = {orders ? orders[indexCurent] : null}	
				onClickConfirmStatus = {onClickConfirmStatus}
			/>
		</AdminTemplate>
	);
};

export default AdminOrder;
