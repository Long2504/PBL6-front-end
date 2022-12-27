import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faPenToSquare,
	faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Row } from "react-bootstrap";
import { MDBContainer, MDBRating } from "mdbreact";
import styles from "../../assets/appstyle/adminproductdetail.module.css";
import { FaAngleRight } from "react-icons/fa";
library.add(faPenToSquare, faSquareCheck);

class ProductForm extends Component {
	render() {
		var { product } = this.props;
		return (
			<div id={styles["content-detail"]}>
				<div className={styles["main-detail"]}>
					<div className={styles["info-product"]}>
						<div className="input-group mb-4"  >
							<span className="input-group-text" id="basic-addon3" style={{width: "70px"}}>
								Name
							</span>
							<input
								className="form-control ml-1"
								type="text"
								value={product.name}
								name="name"
								aria-describedby="basic-addon3"
                                required
                                readOnly = {!this.props.editState['name'] ? true : false}
                                onChange={(e)=>this.props.onChange(e)}
							/>
							<button className="btn btn-primary ml-4"
                                type="button"  
                                onClick={()=>this.props.onEditClick('name',true)}
                                disabled = {this.props.editState['name'] ? true : false}
                            >
								Edit
							</button>
							<button className="btn btn-primary ml-4" 
                                type="button" 
                                onClick={()=>this.props.onEditClick('name',false)}
                                disabled = {!this.props.editState['name'] ? true : false}
                            >
								OK
							</button>
						</div>
						<div className="input-group mb-4">
							<span className="input-group-text" id="basic-addon3" style={{width: "70px"}}>
								Price
							</span>
							<input
								className="form-control ml-1"
								type="text"
								value={vietnamdognVN.format(parseInt(product.price))}
								name="price"
                                required
                                readOnly={true}
							/>
                            <input
								className="form-control ml-1"
								type="number"
								value={product.price}
								name="price"
                                required
                                readOnly = {!this.props.editState['price'] ? true : false}
                                onChange={(e)=>this.props.onChange(e)}
							/>
							<button className="btn btn-primary ml-4"
                                type="button"
                                onClick={()=>this.props.onEditClick('price',true)}
                                disabled = {this.props.editState['price'] ? true : false}
                            >
								Edit
							</button>
							<button className="btn btn-primary ml-4"
                                type="button" 
                                onClick={()=>this.props.onEditClick('price',false)}
                                disabled = {!this.props.editState['price'] ? true : false}
                            >
								OK
							</button>
						</div>
						{/* <div className="input-group mb-4">
							<div className="input-group mb-4">
								<label className="input-group-text" for="inputGroupSelect01">
									Image
								</label>
								<select
									className="form-control"
									value={this.props.image}
									onChange={(e) => this.props.handleClick(e)}
								>
									{this.props.product.productImgs.map((data, index) => {
										return (
											<option key={index} value={data}>
												{"Image " + (index + 1)}
											</option>
										);
									})}
								</select>
							</div>
							<img alt="" src={this.props.image}></img>
						</div> */}
						<div className="input-group mb-4">
                            <span className="input-group-text " id="basic-addon3" style={{width: "70px"}} >
                                Status
                            </span>
                            <select className="form-control ml-1" 
                                name="status"
                                value={product.status}
                                disabled = {!this.props.editState['status'] ? true : false}
                                onChange={(e)=>this.props.onChange(e)}
                            >
                                <option key={0} value={true}>
                                    Còn hàng
                                </option>
                                <option key={1} value={false}>
                                    Hết hàng
                                </option>
                            </select>
							<button className="btn btn-primary ml-4"
                                type="button"  
                                onClick={()=>this.props.onEditClick('status',true)}
                                disabled = {this.props.editState['status'] ? true : false}
                            >
								Edit
							</button>
							<button className="btn btn-primary ml-4" 
                                type="button" 
                                onClick={()=>this.props.onEditClick('status',false)}
                                disabled = {!this.props.editState['status'] ? true : false}
                            >
								OK
							</button>
						</div>
                        <button className="btn btn-success mb-3" 
                            type="button" 
                            style={{marginLeft:'48%'}}
                            onClick={()=>this.props.onSave()}
                            disabled={this.props.checkSubmit()}
                        >
                            Submit
                        </button>
					</div>
				</div>
			</div>
		);
	}
}


export default ProductForm;

let vietnamdognVN = Intl.NumberFormat("vi", {
	style: "currency",
	currency: "VND",
});
