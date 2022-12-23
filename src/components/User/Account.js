import { Component } from "react";
import styles from "../../assets/appstyle/user.module.css";

const Account = (props) => {
	return (
		<div className={styles["account"]}>
			<h1>Hồ Sơ Của Tôi</h1>
			<hr></hr>
			<div className={styles["account-info"]}>
				<div className={styles["info"]}>
					<div className={styles["label"]}>
						<label>Tên đăng nhập</label>
					</div>
					<div className={styles["info-main"]}>
						<span>{props.accountUser.userAccount}</span>
					</div>
				</div>
				<div className={styles["info"]}>
					<div className={styles["label"]}>
						<span>Tên</span>
					</div>
					<div className={styles["info-main"]}>
						<span>{props.accountUser.name}</span>
					</div>
				</div>
				<div className={styles["info"]}>
					<div className={styles["label"]}>
						<label>Email</label>
					</div>
					<div className={styles["info-main"]}>
						<span>{props.accountUser.email}</span>
					</div>
				</div>
				<div className={styles["info"]}>
					<div className={styles["label"]}>
						<label>Số điện thoại</label>
					</div>
					<div className={styles["info-main"]}>
						<span>{props.accountUser.phoneNumber}</span>
					</div>
				</div>
				<div className={styles["info"]}>
					<div className={styles["label"]}>
						<label>Giới tính</label>
					</div>
					<div className={styles["info-main"]}>
						<span>{props.accountUser.gender ? "Nam" : "Nữ"}</span>
					</div>
				</div>
				<div className={styles["info"]}>
					<div className={styles["label"]}>
						<label>Ngày sinh</label>
					</div>
					<div className={styles["info-main"]}>
						<span>{props.accountUser.dateOfBirth}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
