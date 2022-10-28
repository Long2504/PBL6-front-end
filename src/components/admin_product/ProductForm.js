import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenToSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import '../../assets/appstyle/detail.css'
import { Row } from "react-bootstrap";
library.add(faPenToSquare, faSquareCheck)

class ProductForm extends Component {


    render() {
        var { product } = this.props;
        var availableStt = product.status;
        var { editState } = this.props;
        return (
            <div>
                <div className="pd-wrap">
                    <div>
                        <Row>
                            <div className="col-md-4" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
                                <div className="reviews-counter">
                                    <div className="rate">
                                        <input type="radio" id="star5" name="rate" defaultValue={5} defaultChecked />
                                        <label htmlFor="star5" title="text">5 stars</label>
                                        <input type="radio" id="star4" name="rate" defaultValue={4} defaultChecked />
                                        <label htmlFor="star4" title="text">4 stars</label>
                                        <input type="radio" id="star3" name="rate" defaultValue={3} defaultChecked />
                                        <label htmlFor="star3" title="text">3 stars</label>
                                        <input type="radio" id="star2" name="rate" defaultValue={2} />
                                        <label htmlFor="star2" title="text">2 stars</label>
                                        <input type="radio" id="star1" name="rate" defaultValue={1} />
                                        <label htmlFor="star1" title="text">1 star</label>
                                    </div>
                                    <span>3 Reviews</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-dtl">
                                    <div className="product-info">
                                        {
                                            editState.name === false ?
                                                <Row>
                                                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" onClick={(e) => this.props.onEditClick(e, "name")} />
                                                    <div className="product-name">{product.name}</div>
                                                </Row> :
                                                <Row >
                                                    <FontAwesomeIcon icon="fa-solid fa-square-check" onClick={(e) => this.props.onEditClick(e, "name")} />
                                                    <input type="text" class="form-control" style={{ color: "black" }}
                                                        name="name"
                                                        value={product.name}
                                                        onChange={(e) => this.props.onChange(e)}
                                                    />
                                                </Row>
                                        }
                                        {
                                            editState.price === false ?
                                                <Row>
                                                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" onClick={(e) => this.props.onEditClick(e, "price")} />
                                                    <div className="product-name">{product.price} VND</div>
                                                </Row> :
                                                <Row >
                                                    <FontAwesomeIcon icon="fa-solid fa-square-check" onClick={(e) => this.props.onEditClick(e, "price")} />
                                                    <input type="number" class="form-control col-md-3" style={{ color: "black" }}
                                                        name="price"
                                                        value={product.price}
                                                        onChange={(e) => this.props.onChange(e)}
                                                    />
                                                </Row>
                                        }
                                    </div>
                                    {
                                        editState.information === false ?
                                            <Row>
                                                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" onClick={(e) => this.props.onEditClick(e, "information")} />
                                                <p className="product-name col-md-4">{product.information}</p>
                                            </Row> :
                                            <Row >
                                                <FontAwesomeIcon icon="fa-solid fa-square-check" onClick={(e) => this.props.onEditClick(e, "information")} />
                                                <textarea class="form-control" rows="5"
                                                    style={{ color: "black" }}
                                                    name="information"
                                                    value={product.information}
                                                    onChange={(e) => this.props.onChange(e)}
                                                ></textarea>
                                            </Row>
                                    }
                                    <div className="product-count">
                                        <label htmlFor="size">Quantity</label>
                                        <div action="#" className="display-flex">
                                            <div className="qtyminus">-</div>
                                            <input type="text" name="quantity" defaultValue={1} className="qty" />
                                            <div className="qtyplus">+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </Row>
                        <div className="product-info-tabs">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    {
                                        editState.description === false ?
                                            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" onClick={(e) => this.props.onEditClick(e, "description")} /> :
                                            <FontAwesomeIcon icon="fa-solid fa-square-check" onClick={(e) => this.props.onEditClick(e, "description")} />

                                    }
                                    <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                {
                                    editState.description === false ?
                                        <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                            {product.description}
                                        </div> :
                                            <textarea class="form-control" rows="5"
                                                style={{ color: "black" }}
                                                name="description"
                                                value={product.description}
                                                onChange={(e) => this.props.onChange(e)}
                                            ></textarea>
                                }
                            </div>
                        </div>
                                         <button className="btn btn-danger mr-10" onClick={(e) => this.props.onBack(e)}>
                         Trở Lại
                     </button>
                     <button type="submit" className="btn btn-primary" onClick={(e) => this.props.onSave(e)}>Lưu Lại</button>

                    </div>
                </div>
            </div>

        )
    }



    // render() {
    //     var { product } = this.props;
    //     var availableStt = product.status;
    //     var { editState } = this.props;
    //     return (
    //         <div>
    //             <form onSubmit={this.onSave}>
    //                 {
    //                     editState.name === false ?
    //                         <div >
    //                             <label>Name: </label>
    //                             <div>
    //                             <p>{product.name} </p>
    //                             <FontAwesomeIcon aria-hidden={true} icon="fa-solid fa-pen-to-square" onClick={(e)=>this.props.onEditClick(e,"name")} />                                    
    //                             </div>
    //                         </div> :
    //                         <div >
    //                             <label>Name: </label>
    //                             <input
    //                                 type="text"
    //                                 className="form-control col-5"
    //                                 name="name"
    //                                 // defaultValue={product.name}
    //                                 value={product.name}
    //                                 onChange={(e) => this.props.onChange(e)}
    //                             />
    //                             <FontAwesomeIcon aria-hidden={true} icon="fa-solid fa-square-check" onClick={(e)=>this.props.onEditClick(e,"name")} />                                    

    //                         </div>
    //                 }

    //                 {
    //                     editState.price === false ?
    //                         <div>
    //                             <label>Giá: </label>
    //                             <div>
    //                             <p>{product.price} </p>
    //                             <FontAwesomeIcon aria-hidden={true} icon="fa-solid fa-pen-to-square" onClick={(e)=>this.props.onEditClick(e,"price")} />                                    
    //                             </div>
    //                         </div> :
    //                         <div className="form-group">
    //                             <label>Giá: </label>
    //                             <input
    //                                 type="number"
    //                                 className="form-control"
    //                                 name="price"
    //                                 value={product.price}
    //                                 onChange={(e) => this.props.onChange(e)}
    //                             />
    //                             <FontAwesomeIcon aria-hidden={true} icon="fa-solid fa-square-check" onClick={(e)=>this.props.onEditClick(e,"price")} />                                    

    //                         </div>
    //                 }
    //                 {
    //                     editState.information === false ?
    //                         <div>
    //                             <label>Information: </label>
    //                             <div>
    //                             <p>{product.information} </p>
    //                             <FontAwesomeIcon aria-hidden={true} icon="fa-solid fa-pen-to-square" onClick={(e)=>this.props.onEditClick(e,"information")} />                                    
    //                             </div>
    //                         </div> :
    //                         <div className="form-group">
    //                             <label>Information: </label>
    //                             <input
    //                                 type="text"
    //                                 className="form-control col-2"
    //                                 name="information"
    //                                 value={product.information}
    //                                 // defaultValue={product.quantity}
    //                                 onChange={(e) => this.props.onChange(e)}
    //                             />
    //                             <FontAwesomeIcon aria-hidden={true} icon="fa-solid fa-square-check" onClick={(e)=>this.props.onEditClick(e,"information")} />                                    

    //                         </div>
    //                 }
    //                 {
    //                     editState.status === false ?
    //                         <div>
    //                             <label>Status: </label>
    //                             <div>
    //                             <p>{product.status ===true ? 'Khả dụng' : 'Không khả dụng'} </p>
    //                             <FontAwesomeIcon aria-hidden={true} icon="fa-solid fa-pen-to-square" onClick={(e)=>this.props.onEditClick(e,"status")} />                                    
    //                             </div>
    //                         </div> :
    //                         <div>
    //                             <div className="form-group">
    //                                 <label>Status: </label>
    //                             </div>
    //                             <div className="checkbox">
    //                                 <label>
    //                                     <input
    //                                         type="checkbox"
    //                                         name="status"
    //                                         value={availableStt}
    //                                         // defaultValue={availableStt}
    //                                         onChange={(e) => this.props.onChange(e)}
    //                                         checked={availableStt}
    //                                     // defaultChecked={availableStt}
    //                                     />
    //                                     Khả dụng
    //                                 </label>
    //                             </div>
    //                             <FontAwesomeIcon aria-hidden={true} icon="fa-solid fa-square-check" onClick={(e)=>this.props.onEditClick(e,"status")} />                                    
    //                         </div>
    //                 }
    //                 <button className="btn btn-danger mr-10" onClick={(e) => this.props.onBack(e)}>
    //                     Trở Lại
    //                 </button>
    //                 <button type="submit" className="btn btn-primary" onClick={(e) => this.props.onSave(e)}>Lưu Lại</button>
    //             </form>
    //         </div>
    //     )
    // }
}

export default ProductForm