import { Component } from "react";

class OrderItem extends Component {
	render() {
		var { Order, index, onClickShow } = this.props;
		return (
			<tr style={{color:'black'}}>
				<th style={{verticalAlign: 'middle'}} scope="row">{index + 1}</th>
				<td style={{verticalAlign: 'middle'}}>{Order.id}</td>
				<td style={{verticalAlign: 'middle'}}>{Order.dayOrder}</td>
				<td style={{verticalAlign: 'middle'}}>{Order.user.name}</td>
				<td style={{verticalAlign: 'middle'}}>{Order.orderStatus.name}</td>
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
