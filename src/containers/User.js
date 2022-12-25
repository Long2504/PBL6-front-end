import styles from "../assets/appstyle/user.module.css";
import Account from "../components/User/Account";
import { BsPersonBoundingBox } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbClipboardList } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../services/CartService";
import ListOrder from "../components/User/Order";
import ChangePassword from "../components/User/ChangePassword";

const User = () => {
	const dispatch = useDispatch();
	const listOrder = useSelector((state) => state.orderReducer.orders);
	const logged = useSelector(state=> state.authReducer.logged)
	let trackClick = [true, false, false, false];
	const [clickItemUser, setClickItemUser] = useState(trackClick);

	const onClickItemUser = (index) => {
		for (let i = 0; i < trackClick.length; i++) {
			if (i === index) {
				trackClick[i] = true;
			} else {
				trackClick[i] = false;
			}
		}
		setClickItemUser(trackClick);
	};

	const Check = (check) => {
		if (check) {
			document.getElementById("user").style.overflowY = "hidden";
		}
	};
	const [accountUser, setAccountUser] = useState({
        "userAccount": '',
        "name":'',
        "email": '',
        "phoneNumber":'',
        "gender":'',
        "dateOfBirth": ''
    });
    
	useEffect(()=>{
		if(logged) {
			const user = JSON.parse(localStorage.getItem("user")).userModel;
			setAccountUser(user);
		}
	},[logged])


	useEffect(() => {
		fetchOrder(dispatch);
	}, [dispatch]);
	
	console.log(listOrder,"listOrder main")

	return (
		<div className={styles["user"]} id="user">
			<div className={styles["nav-user"]}>
				<div className={styles["profile"]}>
					<img src="assets/image/home.jpg" />
					<span>Long</span>
				</div>
				<hr />
				<div className={styles["nav"]}>
					<div className={styles["item-nav"]}
						onClick={() => onClickItemUser(0)}
					>
						<BsPersonBoundingBox color="rgb(40, 103, 219)" size="1vw" />
						<span style={{ color: clickItemUser[0] ? "red" : null }}>
							Hồ sơ
						</span>
					</div>
					<div className={styles["item-nav"]}
						onClick={() => onClickItemUser(1)}
					>
						<RiLockPasswordLine color="rgb(40, 103, 219)" size="1vw" />
						<span style={{ color: clickItemUser[1] ? "red" : null }}>
							Đổi mật khẩu
						</span>
					</div>
					<div className={styles["item-nav"]}
						onClick={() => onClickItemUser(2)}
					>
						<TbClipboardList color="rgb(40, 103, 219)" size="1vw" />
						<span style={{ color: clickItemUser[2] ? "red" : null }}>
							Quản lí đơn hàng
						</span>
					</div>
				</div>
			</div>
			<div className={styles["container-user"]}>
				{clickItemUser[0] ? <Account accountUser={accountUser} /> : null}
				{clickItemUser[1] ? <ChangePassword /> : null}
				{clickItemUser[2] ? (
					<ListOrder listOrder={listOrder} Check={Check} />
				) : null}
			</div>
		</div>
	);
};

export default User;
