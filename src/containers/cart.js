import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "../assets/appstyle/cart.module.css";
import { fetchCart } from "../services/CartService";
import Cart from "../components/Order/Cart";
import { pushCartAction } from "../actions/CartAction";
import { pushPaymentAction } from "../actions/OrderAction";


const CartContent = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cartReducer.cartItems);

	const [total, setTotal] = useState(0);
	useEffect(() => {
		fetchCart(dispatch);
	}, [dispatch]);
	useEffect(() => {
		var temp = 0;
		if (cartItems) {
			cartItems.forEach((item) => {
				temp += item.product.price * item.amount;
			});
			setTotal(temp);
		}
	}, [total, cartItems]);
	console.log(cartItems, "cartItems");
	const listIdCart = [];
	if (cartItems) {
		cartItems.forEach((item) => listIdCart.push(item.id));
	}
	//handle quantity ---methodQuantit ('ADD' = +) ('SUB' -)
	const handleQuantity = (productId, methodQuantity) => {
		dispatch(pushCartAction({ id: productId }, methodQuantity));
	};
	const handlePayMent = async (amount, oderInfor, listIdCart) => {
		amount = amount / 23000;
		const idUser = JSON.parse(localStorage.getItem("user")).userModel.id;
		await dispatch(
			pushPaymentAction({
				amount: amount,
				oderInfor: oderInfor,
				listCart: listIdCart,
				userId: idUser,
			})
		);
		const link = localStorage.getItem("linkPayment").replace(/["]/g, "");
		if (link) {
			window.open(link);
		}
		console.log(link, "link");
	};

	return (
		<div className={styles["cart-content"]}>
			<div className={styles["div-link"]}>
				<span>Trang chủ</span>
				<FaAngleRight
					style={{
						margin: "auto",
						width: "20px",
						fontWeight: "10",
					}}
				></FaAngleRight>

				<span>Giỏ hàng</span>
			</div>
			<h1
				style={{
					marginLeft: "240px",
					marginTop: "20px",
				}}
			>
				Giỏ hàng
			</h1>
			<Cart
				listProduct={cartItems}
				total={total}
				listIdCart={listIdCart}
				handleQuantity={handleQuantity}
				handlePayMent={handlePayMent}
			/>
		</div>
	);
};

export default CartContent;
