import { Component } from "react";
import styles from "../../assets/appstyle/user.module.css";
import { BsEye, BsEyeSlash } from 'react-icons/bs'
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
						type={this.props.passwordType.recentPassword}  
						onChange={(e)=>this.props.onChange(e)}	
						onBlur={(e) => this.props.onBlur(e)}
					/>
					<button type="button" className="btn" style={{display:'flex',alignItems:'center'}} onClick={()=>this.props.onClickEye("recentPassword")}>{this.props.passwordType.recentPassword === 'password'? <BsEye/>:<BsEyeSlash/>}</button>
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
						type={this.props.passwordType.newPassword} 
						onChange={(e)=>this.props.onChange(e)}
						onBlur={(e) => this.props.onBlur(e)}	
					/>
					<button type="button" className="btn" style={{display:'flex',alignItems:'center'}} onClick={()=>this.props.onClickEye("newPassword")}>{this.props.passwordType.newPassword === 'password'? <BsEye/>:<BsEyeSlash/>}</button>
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
						type={this.props.passwordType.confirmpassword}
						onChange={(e)=>this.props.onChange(e)}
						onBlur={(e) => this.props.onBlur(e)}
					/>
					<button type="button" className="btn" style={{display:'flex',alignItems:'center'}} onClick={()=>this.props.onClickEye("confirmpassword")}>{this.props.passwordType.confirmpassword === 'password'? <BsEye/>:<BsEyeSlash/>}</button>
				</div>
				<p style={{color:'red'}}>{this.props.error.confirmpassword}</p>
				<div style={{width:'100%',display:"flex",justifyContent:'center',marginTop:'30px'}}>

					<button
						type="button"
						className="btn btn-success"
						style={{width:'30%',height:'50px',margin:'0'}}
						onClick={()=>this.props.onChangePassword()}
					>
						Đổi mật khẩu
					</button>
				</div>
			</div>
		);
	}
}

export default ChangePassword;
