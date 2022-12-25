import { Component } from "react";
import styles from "../../assets/appstyle/user.module.css";

const Account = (props) => {
	return (
		<div className={styles["account"]}>
			<table className="table table-striped mb-0">
				<thead>
					<tr>
						<th style={{ textAlign: "center", fontSize: "1.5rem" }} colSpan={2}>
							Hồ Sơ Của Tôi
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Tên đăng nhập</th>
						<td>{props.accountUser.userAccount}</td>
					</tr>
					<tr>
						<th>Tên</th>
						<td>{props.accountUser.name}</td>
					</tr>
					<tr>
						<th>Email</th>
						<td>{props.accountUser.email}</td>
					</tr>
					<tr>
						<th>Số điện thoại</th>
						<td>{props.accountUser.phoneNumber}</td>
					</tr>
					<tr>
						<th>Giới tính</th>
						<td>{props.accountUser.gender ? "Nam" : "Nữ"}</td>
					</tr>
					<tr>
						<th>Ngày sinh</th>
						<td>{props.accountUser.dateOfBirth}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Account;
