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
import { changePassword, editUser } from "../services/AuthService";

const errorTrim = "Bạn chưa nhập trường này";

const User = () => {
	const dispatch = useDispatch();
	const listOrder = useSelector((state) => state.orderReducer.orders);
	const logged = useSelector((state) => state.authReducer.logged);
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


	useEffect(() => {
		fetchOrder(dispatch);
	}, [dispatch]);

	var [password, setPassword] = useState({
		recentPassword: "",
		newPassword: "",
	});

	const [comfirmPassword, setComfirmPassword] = useState("");
	const [passwordType,setPasswordType] = useState({recentPassword:'password',newPassword:'password',confirmpassword:'password'})

	const onClickEye = (name)=>{
		if(passwordType[name] === 'password'){
			setPasswordType({ ...passwordType,[name]:'text'})
		}
		else{
			setPasswordType({...passwordType,[name]:'password'})
		}
	}

	const onChange = (e) => {
		var name = e.target.name;
		var value = e.target.value;
		if (name === "confirmpassword") {
			setComfirmPassword(value);
		} else {
			setPassword({ ...password, [name]: value });
			setError({ ...error, [name]: "" });
		}
	};
	const [error, setError] = useState({
		recentPassword: "",
		password: "",
		confirmpassword: "",
	});

	const onBlur = (e) => {
		const atribute = e.target.name;
		if (!e.target.value) {
			setError({ ...error, [atribute]: errorTrim });
		} else {
			if (atribute === "newPassword") {
				if (password[atribute].length < 6) {
					setError({ ...error, [atribute]: "Mật khẩu phải nhiều hơn 6 kí tự" });
				}
			}
			if (atribute === "confirmpassword") {
				if (e.target.value !== password["newPassword"]) {
					setError({ ...error, [atribute]: "Mật khẩu không khớp" });
				}
			}
		}
	};

	const onChangePassword = () => {
		if (
			error.recentPassword.length +
				error.password.length +
				error.confirmpassword.length ===
				0 &&
			comfirmPassword.length > 0
		) {
			changePassword(password)
		} else {
			alert("Vui lòng điền đầy đủ thông tin");
		}
	};

	//---------------------------Account----------------------------------------
	const [accountUser, setAccountUser] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		gender: "",
		dateOfBirth: "",
		address:''
	});
	const loading = useSelector(state=>state.authReducer.loading)

	useEffect(() => {
		if (logged) {
			const user = JSON.parse(localStorage.getItem("user")).userModel;
			setAccountUser(user);
		}
	}, [logged]);

	var [editState,setEditState]= useState({
        name : false,
        address :false,
        phoneNumber:false,
        gender:false,
        dateOfBirth:false,
    })
	const onEditClick = (name,boolean)=>{
        var value = boolean
        setEditState({...editState,[name]:value})
    }
    const checkSubmit = ()=>{
        return (editState.name || editState.address || editState.phoneNumber || editState.gender || editState.dateOfBirth )

    }

    const onChangeAccount = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        setAccountUser({...accountUser,[name]:value})
    }
	const onSave = (e)=>{
        e.preventDefault();
        var user = {
            name : accountUser.name,
            dateOfBirth:accountUser.dateOfBirth,
            address:accountUser.address,
            phoneNumber:accountUser.phoneNumber,
            gender:accountUser.gender,
        }
        console.log(user,"user")
		editUser(dispatch,user)
		
    }
	useEffect(()=>{},[loading])
	//---------------------------------------------------------------------------



	return (
		<div className={styles["user"]} id="user">
			<div className={styles["nav-user"]}>
				<div className={styles["profile"]}>
					<img src="assets/image/home.jpg" />
					<span>Long</span>
				</div>
				<hr />
				<div className={styles["nav"]}>
					<div
						className={styles["item-nav"]}
						onClick={() => onClickItemUser(0)}
					>
						<BsPersonBoundingBox color="rgb(40, 103, 219)" size="1vw" />
						<span style={{ color: clickItemUser[0] ? "red" : null }}>
							Hồ sơ
						</span>
					</div>
					<div
						className={styles["item-nav"]}
						onClick={() => onClickItemUser(1)}
					>
						<RiLockPasswordLine color="rgb(40, 103, 219)" size="1vw" />
						<span style={{ color: clickItemUser[1] ? "red" : null }}>
							Đổi mật khẩu
						</span>
					</div>
					<div
						className={styles["item-nav"]}
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
				{clickItemUser[0] ? 
					<Account 
						accountUser={accountUser} 
						editState={editState}
						onChange={onChangeAccount}  
						onEditClick={onEditClick}
						checkSubmit={checkSubmit}
						onSave={onSave}
					/> 
				: null}
				{clickItemUser[1] ? (
					<ChangePassword
						onChange={onChange}
						onBlur={onBlur}
						error={error}
						onChangePassword={onChangePassword}
						onClickEye = {onClickEye}
						passwordType={passwordType}
					/>
				) : null}
				{clickItemUser[2] ? (
					<ListOrder listOrder={listOrder} Check={Check} />
				) : null}
			</div>
		</div>
	);
};

export default User;
