import styles from "../assets/appstyle/register.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { resetPasword } from "../services/AuthService";
const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
const errorTrim = "Bạn chưa nhập trường này";

const ResetPassword = () => {
	const [email, Setemail] = useState("");
	const [errorEmail, setErrorEmail] = useState('');
	const onChange = (e) => {
		var value = e.target.value;
		Setemail(value);

		setErrorEmail("");
	};

	const onBlur = (e) => {
		if (!e.target.value) {
			setErrorEmail(errorTrim);
		} else {
			if (!regularExpression.test(e.target.value)) {
				setErrorEmail("trường này là Email");
			}
		}
	};
	const onSubmit = (e) => {
        e.preventDefault()
        if(errorEmail.length === 0){
            console.log(email)
            resetPasword(email)
        }
        else{
            alert("Thông tin bạn nhập không đúng")
        }

	};
	return (
		<div className={styles["main"]}>
			<div className={styles["left"]}>
				<img
					src="/assets/image/home.jpg"
					alt=""
					className={styles["img-left"]}
				/>
			</div>
			<div className={styles["right"]}>
				<div className={styles["form"]}>
					<Link
						to={"/register"}
						style={{
							marginLeft: "450px",
							color: "red",
							marginBottom: "40px",
						}}
					>
						Register here !
					</Link>
					<div className={styles["desc"]}>
						<p>Chào mừng bạn đến với Computer Store LVKN </p>
					</div>
					<div className={styles["form-group"]}>
						<label>Nhập email</label>
						<div className={styles["input"]}>
							<input
								className={
									errorEmail.length > 0 ? styles["is-invaid"] : ""
								}
								name="email"
								type="email"
								placeholder="Nhập email của bạn"
								onChange={(e) => onChange(e)}
								onBlur={(e) => onBlur(e)}
							/>
						</div>
						<div className={styles["form-submit"]}>
							<div className={styles["btn-login"]}>
								<button onClick={(e) => onSubmit(e)}>Xác nhận</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
