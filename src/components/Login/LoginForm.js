import { Component } from "react";
import styles from "../../assets/appstyle/login.module.css";
import { Link } from "react-router-dom";
import { BsEye ,BsEyeSlash } from 'react-icons/bs'
class LoginForm extends Component {
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
						<div className="input-group mb-3" style={{marginTop:'50px'}}>
							<div
								className="input-group-prepend col-4"
								style={{
									backgroundColor: "#e9ecef",
									alignItems: "center",
									border: "1px solid #ced4da",
								}}
							>
								<span>Tên đăng nhập</span>
							</div>
							<input
								className="form-control col-8"
								id={styles["email"]}
								name="username"
								type="text"
								placeholder="Enter your email addresss"
								value={this.props.username}
								onChange={(e) => {
									this.props.onChange(e);
								}}
							/>
						</div>
						<div className="input-group mb-3" style={{marginTop:'20px'}}>
							<div
								className="input-group-prepend col-4"
								style={{
									backgroundColor: "#e9ecef",
									alignItems: "center",
									border: "1px solid #ced4da",
								}}
							>
								<span>Mật khẩu</span>
							</div>
							<input
								className="form-control col-8"
								id={styles["password"]}
								name="password"
								type={this.props.passwordType} 
								placeholder="Nhập mật khẩu"
								value={this.props.password}
								onChange={(e) => {
									this.props.onChange(e);
								}}
							/>
							<button type="button" className="btn" style={{display:'flex',alignItems:'center'}} onClick={()=>this.props.onClickEye()}>{this.props.passwordType === 'password'? <BsEye/>:<BsEyeSlash/>}</button>
						</div>
						<Link to={"/resetpasword"}>Quên mật khẩu</Link>
						<div className={styles["form-submit"]}>
							<div className={styles["btn-login"]}>
								<button onClick={() => this.props.onLogin()}>Login</button>
							</div>
							<p style={{ margin: 0 }}>or connect with</p>
							<div className={styles["btn-social"]}>
								<button
									className={styles["item"]}
									onClick={() => this.props.onClickGG()}
								>
									<img
										src="/assets/image/icons/google.png"
										alt=""
										className={styles["img-item"]}
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginForm;
