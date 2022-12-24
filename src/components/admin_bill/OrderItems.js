import { Component } from "react";

class OrderItem extends Component {
	render() {
		var { Order, index, onClickShow } = this.props;
		return (
			<tr>
				<th scope="row">{index + 1}</th>
				<td>{Order.id}</td>
				<td>{Order.dayOrder}</td>
				<td>{Order.user.name}</td>
				<td>{Order.orderStatus.name}</td>
				<td>
					<div>
						<button className="btn btn-primary"
              type="button"
              onClick={()=>onClickShow(index)} 
            >
							Show
						</button>
					</div>
				</td>
			</tr>
		);
	}
}

export default OrderItem;
