import { Component } from "react";
import styles from "../../assets/appstyle/adminbill.module.css";

class OrderDetailModal extends Component {
	render() {
		const { order } = this.props;
		const OVERLAY_STYLES = {
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "rgba(0, 0, 0, 0.7)",
			zIndex: 1000,
			color: "black",
		};

		const MODAL_STYLES = {
			position: "fixed",
			top: "5%",
			left: "15%",
			right: "15%",
			padding: "20px 20px 0 20px",
			ZIndex: 1000,
			backgroundColor: "white",
		};

		const STYLE_CENTER = {
			verticalAlign: 'middle',
            textAlign: 'center'
		};
    
		const ItemOfOrder = ({ list }) => {
			const orders = list.map((item, index) => {
				return (
					<tr key={index}>
						<th style={STYLE_CENTER} scope="row">{index + 1}</th>
						<td>
							<img
								src={item.product.productImgs[0]}
								style={{
									width: "5vw",
									height: "5vw",
								}}
							/>
						</td>
						<td style={{verticalAlign: 'middle',}} >{item.product.name}</td>
						<td style={STYLE_CENTER}>{item.amount}</td>
					</tr>
				);
			});
			return (
				<table className="table table-bordered table-striped">
					<thead>
                        <tr>
                            <th colSpan={3} style={{fontSize:'1.5rem',textAlign: "center"}}>Sản phẩm</th>
                        </tr>
						<tr>
							<th scope="col">STT</th>
							<th scope="col">Image</th>
							<th scope="col">Name</th>
							<th scope="col">Amount</th>
						</tr>
					</thead>
					<tbody>{orders}</tbody>
				</table>
			);
		};

		const inforUser = (user) => {
			return (
				<div className={styles["info-user"]}>
					<table className="table table-bordered table-striped">
						<thead>
							<tr>
								<th
									style={{ textAlign: "center", fontSize: "1.5rem" }}
									colSpan={2}
								>
									Thông tin người đặt hàng
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th className="col-1">Họ Tên</th>
								<th className="col-1">{user.name}</th>
							</tr>
							<tr>
								<th>Địa chỉ</th>
								<th>{user.address}</th>
							</tr>
							<tr>
								<th>Số điện thoại</th>
								<th>{user.phoneNumber}</th>
							</tr>
							<tr>
								<th>Email</th>
								<th>{user.email}</th>
							</tr>
						</tbody>
					</table>
				</div>
			);
		};

		if (!this.props.check) {
			return null;
		}
		if (!order) return null;
		console.log(order, "order");
		return (
			<div style={OVERLAY_STYLES}>
				<div className={styles["order"]} style={MODAL_STYLES}>
					<h1 style={{ textAlign: "center" }}>Thông tin chi tiết order</h1>
                    <div className={styles["top-order"]}>
                        <div className={styles["time-order"]}>
                            <span>Ngày đặt : {<span style={{color: "red"}}>{order.dayOrder}</span>}</span>
                        </div>
                        <div className={styles["status"]}>
                            <span>Tình trạng : {<span style={{color: "red"}}>{order.orderStatus.name}</span>}</span>
                            <button className="btn btn-success"
								type="button" 
								onClick={()=>this.props.onClickConfirmStatus(order.id,"OK")}
							>
                                Accept
                            </button>
                            <button className="btn btn-danger" 
								type="button" 	
								onClick={()=>this.props.onClickConfirmStatus(order.id,"Deny")}	
							>
                                Deny
                            </button>
                        </div>
                    </div>

                    {inforUser(order.user)}
					{<ItemOfOrder list={order.orderDetailSet} />}
					<button
						type="button"
						className="btn btn-primary mt-3 mb-3"
						style={{ marginLeft: "45%", width: "100px" }}
						onClick={() => this.props.clickClose()}
					>
						Close
					</button>
				</div>
			</div>
		);
	}
}

export default OrderDetailModal;
