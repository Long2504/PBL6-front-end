import { Component } from "react";

class ChangePassword extends Component {
	render() {
		return (
			<div style={{marginTop:'40px'}}>
				<div className="input-group mb-3">
					<div className="input-group-prepend" >
						<span className="input-group-text">
							Nhập mật khẩu cũ
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						id="basic-url"
						aria-describedby="basic-addon3"
					/>
				</div>
                <div className="input-group mb-3" >
					<div className="input-group-prepend">
						<span className="input-group-text">
							Nhập mật khẩu mới
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						id="basic-url"
						aria-describedby="basic-addon3"
					/>
				</div>
                <div className="input-group mb-3">
					<div className="input-group-prepend" >
						<span className="input-group-text">
							Nhập lại mật khẩu mới
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						id="basic-url"
						aria-describedby="basic-addon3"
					/>
				</div>
			</div>
		);
	}
}

export default ChangePassword;
