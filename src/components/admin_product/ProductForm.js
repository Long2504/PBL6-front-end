import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenToSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faPenToSquare,faSquareCheck)

class ProductForm extends Component {
    render() {
        var { product } = this.props;
        var availableStt = product.status;
        var { editState } = this.props;
        return (
            <div>
                <form onSubmit={this.onSave}>
                    {
                        editState.name === false ?
                            <div>
                                <label>Name: </label>
                                <div>
                                <p>{product.name} </p>
                                <a name="name" onClick={(e)=>this.props.onEditClick(e)} className="btn btn-primary">
                                <FontAwesomeIcon aria-hidden={true} icon="fa-solid fa-pen-to-square"/>                                    
                                </a>
                                </div>
                            </div> :
                            <div className="form-group">
                                <label>Name: </label>
                                <input
                                    type="text"
                                    className="form-control col-5"
                                    name="name"
                                    // defaultValue={product.name}
                                    value={product.name}
                                    onChange={(e) => this.props.onChange(e)}
                                />
                            </div>
                    }

                    {
                        editState.price === false ?
                            <div>
                                <label>Giá: </label>
                                <div>
                                <p>{product.price} </p>
                                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                </div>
                            </div> :
                            <div className="form-group">
                                <label>Giá: </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    value={product.price}
                                    onChange={(e) => this.props.onChange(e)}
                                />
                            </div>
                    }
                    {
                        editState.information === false ?
                            <div>
                                <label>Information: </label>
                                <div>
                                <p>{product.information} </p>
                                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                </div>
                            </div> :
                            <div className="form-group">
                                <label>Information: </label>
                                <input
                                    type="text"
                                    className="form-control col-2"
                                    name="information"
                                    value={product.information}
                                    // defaultValue={product.quantity}
                                    onChange={(e) => this.props.onChange(e)}
                                />
                            </div>
                    }
                    {
                        editState.status === false ?
                            <div>
                                <label>Status: </label>
                                <div>
                                <p>{product.status ===true ? 'Khả dụng' : 'Không khả dụng'} </p>
                                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                </div>
                            </div> :
                            <div>
                                <div className="form-group">
                                    <label>Status: </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="status"
                                            value={availableStt}
                                            // defaultValue={availableStt}
                                            onChange={(e) => this.props.onChange(e)}
                                            checked={availableStt}
                                        // defaultChecked={availableStt}
                                        />
                                        Khả dụng
                                    </label>
                                </div>
                            </div>
                    }
                    <button className="btn btn-danger mr-10" onClick={(e) => this.props.onBack(e)}>
                        Trở Lại
                    </button>
                    <button type="submit" className="btn btn-primary" onClick={(e) => this.props.onSave(e)}>Lưu Lại</button>
                </form>
            </div>
        )
    }
}

export default ProductForm