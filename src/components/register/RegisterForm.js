import { Component } from "react";
import styles from "../../assets/appstyle/register.module.css";
import { BsEye, BsEyeSlash } from 'react-icons/bs'
class RegisterForm extends Component {
	render() {
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
					<div className={styles["desc"]}>
						<p>Chào mừng bạn đến với Computer Store LVKN </p>
					</div>
					<div className={styles["form"]}>
						<div className={styles["input"]}>
							<label style={{width:'30%'}}>Tên đăng nhập</label>
							<input
								className={
									this.props.error.username.length > 0
										? styles["is-invaid"]
										: ""
								}
								name="username"
								type="text"
								placeholder="Nhập tên đăng nhập của bạn"
								value={this.props.username}
								onChange={(e) => {
									this.props.onChange(e);
								}}
								onBlur={(e) => {
									this.props.onBlur(e);
								}}
							/>
						</div>
						<div className={styles["input"]}>
							<label style={{width:'30%'}}>Email</label>
							<input
								className={
									this.props.error.email.length > 0 ? styles["is-invaid"] : ""
								}
								name="email"
								type="email"
								placeholder="Nhập email của bạn"
								value={this.props.email}
								onChange={(e) => {
									this.props.onChange(e);
								}}
								onBlur={(e) => {
									this.props.onBlur(e);
								}}
							/>
						</div>
						<div className={styles["input"]}>
							<label style={{width:'30%'}}>Tên</label>
							<input
								className={
									this.props.error.name.length > 0 ? styles["is-invaid"] : ""
								}
								name="name"
								type="text"
								placeholder="Nhập tên của bạn"
								value={this.props.name}
								onChange={(e) => {
									this.props.onChange(e);
								}}
								onBlur={(e) => {
									this.props.onBlur(e);
								}}
							/>
						</div>

						<div className={styles["input"]}>
							<label style={{width:'30%'}}>Số điện thoại</label>
							<input
								className={
									this.props.error.phoneNumber.length > 0
										? styles["is-invaid"]
										: ""
								}
								name="phoneNumber"
								type="text"
								placeholder="Nhập số điện thoại của bạn"
								value={this.props.phoneNumber}
								onChange={(e) => {
									this.props.onChange(e);
								}}
								onBlur={(e) => {
									this.props.onBlur(e);
								}}
							/>
						</div>
						<div className={styles["include"]}>
							<div className={styles["birthday"]}>
								<label>Ngày sinh</label>
								<input
									className={styles["date"]}
									name="dateOfBirth"
									type="date"
									value={this.props.dateOfBirth}
									min="1940-01-01"
									max="2005-01-01"
									onChange={(e) => {
										this.props.onChange(e);
									}}
								/>
							</div>
							<div className={styles["gender"]}>
								<label>Giới tính</label>
								<div className={styles["sex"]}>
									<label>Nam</label>
									<input
										type="radio"
										name="gender"
										value={true}
										onChange={(e) => {
											this.props.onChange(e);
										}}
									/>
								</div>
								<div className={styles["sex"]}>
									<label>Nữ</label>
									<input
										type="radio"
										name="gender"
										value={false}
										onChange={(e) => {
											this.props.onChange(e);
										}}
									/>
								</div>
							</div>
						</div>

						<div className={styles["input"]}>
							<label style={{width:'30%'}}>Địa chỉ</label>
							<input
								className={
									this.props.error.address.length > 0 ? styles["is-invaid"] : ""
								}
								name="address"
								type="text"
								placeholder="Nhập địa chỉ của bạn"
								value={this.props.address}
								onChange={(e) => {
									this.props.onChange(e);
								}}
								onBlur={(e) => {
									this.props.onBlur(e);
								}}
							/>
						</div>

						<div className={styles["input"]} >
							<label style={{width:'30%'}}>Mật khẩu</label>
							<input
								style={{width:'65%'}}
								id={styles["password"]}
								name="password"
								type={this.props.passwordType.password}
								placeholder="Nhập mật khẩu của bạn"
								className={
									this.props.error.password.length > 0
										? styles["is-invaid"]
										: ""
								}
								value={this.props.password}
								onChange={(e) => {
									this.props.onChange(e);
								}}
								onBlur={(e) => {
									this.props.onBlur(e);
								}}
							/>
							<button type="button" className="btn" style={{display:'flex',alignItems:'center'}} onClick={()=>this.props.onClickEye("password")}>{this.props.passwordType.password === 'password'? <BsEye/>:<BsEyeSlash/>}</button>
						</div>

						<div className={styles["input"] + " " + styles["confirm-password"]}>
							<label style={{width:'30%'}}>Nhập lại mật khẩu</label>
							<input
								style={{width:'65%'}}
								id={styles["confirm-password"]}
								className={
									this.props.error.confirmpassword.length > 0
										? styles["is-invaid"]
										: ""
								}
								name="confirmpassword"
								type={this.props.passwordType.confirmpassword}
								placeholder="Xác nhận lại mật khẩu"
								value={this.props.confirmpassword}
								onChange={(e) => {
									this.props.onChange(e);
								}}
								onBlur={(e) => {
									this.props.onBlur(e);
								}}
							/>
							<button type="button" className="btn" style={{display:'flex',alignItems:'center'}} onClick={()=>this.props.onClickEye("confirmpassword")}>{this.props.passwordType.confirmpassword === 'password'? <BsEye/>:<BsEyeSlash/>}</button>

						</div>

						<div className={styles["form-submit"]}>
							<div className={styles["btn-login"]}>
								<button onClick={(e)=>this.props.handleSubmit(e)}>OK</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterForm;
