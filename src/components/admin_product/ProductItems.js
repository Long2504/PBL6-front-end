import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

library.add(faCheck, faXmark);

class ProductItem extends Component {
	render() {
		var { Product, index } = this.props;
		return (
			<tr>
				<th scope="row">{index + 1}</th>
				<td>{Product.name}</td>
				<td>{Product.brand.name}</td>
				<td>
					{Product.status ? (
						<FontAwesomeIcon icon="fa-solid fa-check" />
					) : (
						<FontAwesomeIcon icon="fa-solid fa-xmark" />
					)}
				</td>
				<td>
					<div>
						{/* <button className="btn btn-info" onClick={()=>this.props.onDelete(Product.id)}>Delete</button> */}
						<Link
							to={`./${Product.id}`}
							className="btn btn-primary"
							style={{ marginRight: "15px" }}
						>
							Chi tiết
						</Link>
					</div>
				</td>
			</tr>
		);
	}
}

export default ProductItem;
