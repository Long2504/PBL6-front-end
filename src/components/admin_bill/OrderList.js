import { Component } from "react";
import Table from "react-bootstrap/Table";
class OrderList extends Component {
	render() {
		return (
			<div>
				<Table striped hover>
					<thead>
						<tr>
							<th scope="col">STT</th>
							<th scope="col">id</th>
							<th scope="col">day</th>
							<th scope="col">user</th>
							<th scope="col">Status</th>
							<th scope="col"></th>
						</tr>
					</thead>

					<tbody>{this.props.children}</tbody>
				</Table>
			</div>
		);
	}
}

export default OrderList;
