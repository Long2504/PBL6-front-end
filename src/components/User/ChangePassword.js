import { Component } from "react";
import styles from "../../assets/appstyle/user.module.css";
class ChangePassword extends Component {
	render() {
		return (
			<div className={styles["change-password"]} >
				<h1 style={{textAlign: 'center',marginBottom:'40px'}}>Đổi mật khẩu</h1>
				<div className="input-group mb-3">
					<div className="input-group-prepend col-4" >
						<span className="input-group-text">
							Nhập mật khẩu cũ
						</span>
					</div>
					<input
						type="password"
						className="form-control col-8"
					/>
				</div>
                <div className="input-group mb-3" >
					<div className="input-group-prepend col-4">
						<span className="input-group-text">
							Nhập mật khẩu mới
						</span>
					</div>
					<input
						type="password"
						className="form-control col-8"
					/>
				</div>
                <div className="input-group mb-3">
					<div className="input-group-prepend col-4" >
						<span className="input-group-text">
							Nhập lại mật khẩu mới
						</span>
					</div>
					<input
						type="password"
						className="form-control col-8"
					/>
				</div>
				<button type="button" class="btn btn-success" style={{marginLeft:'45%',marginTop:'30px'}}>Đổi mật khẩu</button>
			</div>
		);
	}
}

export default ChangePassword;
