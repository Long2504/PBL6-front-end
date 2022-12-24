import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "../components/admin_bill/OrderList";
import OrderItem from "../components/admin_bill/OrderItems";
import OrderDetailModal from '../components/admin_bill/OrderDetailModal'
import AdminTemplate from "../components/admin_template/AdminTemplate";
import { getListOrder } from "../services/AdminOrderService"

const AdminOrder = () => {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.adminOrderReducer);

	const [onClickShow,setOnClickShow] = useState(false)
	const [indexCurent,setIndexCurent] = useState(0)

	useEffect(() => {
		getListOrder(dispatch)
	}, [dispatch]);
	console.log(orders)

	const clickOpen = (index)=>{
		setOnClickShow(true)
		setIndexCurent(index)
	}
	const clickClose = ()=>{
		setOnClickShow(false)
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
			<OrderList>
				{loadOrderItems(orders)}
			</OrderList>
			<OrderDetailModal 
				clickClose={clickClose} 
				check = {onClickShow}
				order = {orders ? orders[indexCurent] : null}	
			/>
		</AdminTemplate>
	);
};

export default AdminOrder;
