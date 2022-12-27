import { Component } from "react";
import styles from "../../assets/appstyle/user.module.css";

const Account = (props) => {
	return (
		<div className={styles["account"]}>
			<p className="h1">Hồ Sơ Của Tôi</p>
			<div className="input-group mb-4">
				<span
					className="input-group-text"
					id="basic-addon3"
					style={{ width: "150px" }}
				>
					Tên
				</span>
				<input
					className="form-control ml-1"
					type="text"
					value={props.accountUser.name}
					name="name"
					readOnly={!props.editState["name"] ? true : false}
					onChange={(e) => props.onChange(e)}
				/>
				<button
					className="btn btn-primary ml-4"
					type="button"
					onClick={() => props.onEditClick("name", true)}
					disabled={props.editState["name"] ? true : false}
				>
					Edit
				</button>
				<button
					className="btn btn-primary ml-4"
					type="button"
					onClick={() => props.onEditClick("name", false)}
					disabled={!props.editState["name"] ? true : false}
				>
					OK
				</button>
			</div>
			{/* <div className="input-group mb-4">
				<span
					className="input-group-text"
					id="basic-addon3"
					style={{ width: "150px" }}
				>
					Email
				</span>
				<input
					className="form-control ml-1"
					type="text"
					value={props.accountUser.email}
					readOnly={true}
				/>
				<button
					className="btn btn-primary ml-4"
					type="button"
					disabled={true}
				>
					Edit
				</button>
				<button
					className="btn btn-primary ml-4"
					type="button"
					disabled={true}
				>
					OK
				</button>
			</div> */}
			<div className="input-group mb-4">
				<span
					className="input-group-text"
					id="basic-addon3"
					style={{ width: "150px" }}
				>
					Số điện thoại
				</span>
				<input
					className="form-control ml-1"
					type="text"
					value={props.accountUser.phoneNumber}
					name="phoneNumber"
					readOnly={!props.editState["phoneNumber"] ? true : false}
					onChange={(e) => props.onChange(e)}
				/>
				<button
					className="btn btn-primary ml-4"
					type="button"
					onClick={() => props.onEditClick("phoneNumber", true)}
					disabled={props.editState["phoneNumber"] ? true : false}
				>
					Edit
				</button>
				<button
					className="btn btn-primary ml-4"
					type="button"
					onClick={() => props.onEditClick("phoneNumber", false)}
					disabled={!props.editState["phoneNumber"] ? true : false}
				>
					OK
				</button>
			</div>
			<div className="input-group mb-4">
				<span
					className="input-group-text"
					id="basic-addon3"
					style={{ width: "150px" }}
				>
					Giới tính
				</span>
				<select className="form-control ml-1" 
					name="gender"
					value={props.accountUser.gender}
					disabled = {!props.editState['gender'] ? true : false}
					onChange={(e)=>props.onChange(e)}
				>
					<option key={0} value={true}>
						Nam
					</option>
					<option key={1} value={false}>
						Nữ
					</option>
                </select>
				<button
					className="btn btn-primary ml-4"
					type="button"
					onClick={() => props.onEditClick("gender", true)}
					disabled={props.editState["gender"] ? true : false}
				>
					Edit
				</button>
				<button
					className="btn btn-primary ml-4"
					type="button"
					onClick={() => props.onEditClick("gender", false)}
					disabled={!props.editState["gender"] ? true : false}
				>
					OK
				</button>
			</div>
			<div className="input-group mb-4">
				<span
					className="input-group-text"
					id="basic-addon3"
					style={{ width: "150px" }}
				>
					Ngày sinh
				</span>
				<input
					className="form-control ml-1"
					type="date"
					value={props.accountUser.dateOfBirth}
					name="dateOfBirth"
					readOnly={!props.editState["dateOfBirth"] ? true : false}
					onChange={(e) => props.onChange(e)}
				/>
				<button
					className="btn btn-primary ml-4"
					type="button"
					onClick={() => props.onEditClick("dateOfBirth", true)}
					disabled={props.editState["dateOfBirth"] ? true : false}
				>
					Edit
				</button>
				<button
					className="btn btn-primary ml-4"
					type="button"
					onClick={() => props.onEditClick("dateOfBirth", false)}
					disabled={!props.editState["dateOfBirth"] ? true : false}
				>
					OK
				</button>
			</div>
			<div className="input-group mb-4">
				<span
					className="input-group-text"
					id="basic-addon3"
					style={{ width: "150px" }}
				>
					Địa chỉ
				</span>
				<input
					className="form-control ml-1"
					type="text"
					value={props.accountUser.address}
					name="address"
					readOnly={!props.editState["address"] ? true : false}
					onChange={(e) => props.onChange(e)}
				/>
				<button
					className="btn btn-primary ml-4"
					type="button"
					onClick={() => props.onEditClick("address", true)}
					disabled={props.editState["address"] ? true : false}
				>
					Edit
				</button>
				<button
					className="btn btn-primary ml-4"
					type="button"
					onClick={() => props.onEditClick("address", false)}
					disabled={!props.editState["address"] ? true : false}
				>
					OK
				</button>
			</div>
			<button className="btn btn-success mb-3" 
                            type="button" 
                            style={{marginLeft:'48%'}}
                            onClick={(e)=>props.onSave(e)}
                            disabled={props.checkSubmit()}
                        >
                            Submit
            </button>
		</div>
	);
};

export default Account;
