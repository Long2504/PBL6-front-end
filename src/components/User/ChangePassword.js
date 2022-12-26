import { Component } from "react";
import styles from "../../assets/appstyle/user.module.css";
class ChangePassword extends Component {
	render() {
		return (
			<div className={styles["change-password"]}>
				<h1 style={{ textAlign: "center", marginBottom: "40px" }}>
					Đổi mật khẩu
				</h1>
				<div className="input-group mb-3">
					<div
						className="input-group-prepend col-4"
						style={{
							backgroundColor: "#e9ecef",
							alignItems: "center",
							border: "1px solid #ced4da",
						}}
					>
						<span>Nhập mật khẩu cũ</span>
					</div>
					<input className="form-control col-8" 
						name="recentPassword" 
						type="password"  
						onChange={(e)=>this.props.onChange(e)}	
						onBlur={(e) => this.props.onBlur(e)}
					/>
				</div>
				<p style={{color:'red'}}>{this.props.error.recentPassword}</p>
				<div className="input-group mb-3">
					<div
						className="input-group-prepend col-4"
						style={{
							backgroundColor: "#e9ecef",
							alignItems: "center",
							border: "1px solid #ced4da",
						}}
					>
						<span>Nhập mật khẩu mới</span>
					</div>
					<input className="form-control col-8"
						name="newPassword" 
						type="password"  
						onChange={(e)=>this.props.onChange(e)}
						onBlur={(e) => this.props.onBlur(e)}	
					/>
				</div>
				<p style={{color:'red'}}>{this.props.error.newPassword}</p>
				<div className="input-group mb-3">
					<div
						className="input-group-prepend col-4"
						style={{
							backgroundColor: "#e9ecef",
							alignItems: "center",
							border: "1px solid #ced4da",
						}}
					>
						<span>Nhập lại mật khẩu mới</span>
					</div>
					<input className="form-control col-8" 
						name="confirmpassword" 
						type="password" 
						onChange={(e)=>this.props.onChange(e)}
						onBlur={(e) => this.props.onBlur(e)}
						/>
				</div>
				<p style={{color:'red'}}>{this.props.error.confirmpassword}</p>
				<button
					type="button"
					className="btn btn-success"
					style={{ marginLeft: "45%", marginTop: "30px" }}
					onClick={()=>this.props.onChangePassword()}
				>
					Đổi mật khẩu
				</button>
			</div>
		);
	}
}

export default ChangePassword;
