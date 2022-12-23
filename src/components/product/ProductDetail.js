import styles from '../../assets/appstyle/productdetail.module.css'
import { FaAngleRight } from 'react-icons/fa'
import { Component } from "react";

import { Link } from "react-router-dom";
let vietnamdognVN = Intl.NumberFormat("vi",{
    style: "currency",
    currency : 'VND'
});

class ProductDetail extends Component{
    render(){
        let arrDeciption = []
        let arrName = []
        if(this.props.product.description){
           const arr = this.props.product.description.substr(1)
           arrDeciption = arr.split('\n-')
           console.log(arrDeciption)
           arrName = this.props.product.name.split(`(`)[0]
           console.log(arrName)
        }
        return(        
            <div id={styles["content-detail"]}>
                <div className={styles["clearfix"]}>
                    <div className={styles["div-link"]}>
                        <Link to={"/"}>Trang chủ</Link>
                        <FaAngleRight
                            style={
                                {
                                    margin:"auto",
                                    width: "20px",
                                    fontWeight:"10",
                                }
                            } 
                        >
                        </FaAngleRight>   
                        <span>Sản phẩm</span>
                        <FaAngleRight
                                style={
                                    {
                                        margin:"auto",
                                        width: "20px",
                                        fontWeight:"10",
                                    }
                                } 
                            >
                        </FaAngleRight>
                        <span>{arrName}</span>
                    </div>
                </div>
                <div className={styles["main-detail"]}>
                    <div className={styles["show-image"]}>
                        <div className={styles["product-image"]}>
                            <img  alt='' src={this.props.image}></img>
                        </div>
                        <div className={styles["products-image"]}>
                            {this.props.product.productImgs.map((data,index)=>{
                                return(
                                    <div key={index} className={styles["img-container"]}>
                                        <img alt='' src={data} onClick={()=>this.props.handleClick(index)}></img>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles["info-product"]}>
                        <h2 className={styles["product-name"]}>{this.props.product.name}
                        </h2>
                        <h3 className={styles["price"]} >{'Giá bán:'+ vietnamdognVN.format(this.props.product.price) }</h3>
                        <div className={styles["desc"]}>
                            <p>Giới thiệu</p>
                            <ul className={styles["list-desc"]}>
                                {arrDeciption.map((data,index)=>{
                                    return(
                                        <li key={index}>{data}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <button
                            className={styles["add-to-cart"]}
                            onClick={() =>this.props.addToCartHandler(this.props.product.id)} 
                        >
                            <p>Thêm vào giỏ hàng</p>
                        </button>
                    </div>
                </div>
                <div className={styles["container-detail"]}>
                    <div className={styles["desc-detail"]}>
                        <div className={styles["title"]}>
                            <h2>Thông tin chi tiết</h2>
                        </div>
                        <table>
                            <tbody>
                                {this.props.product.attributes.map((data)=>{
                                    return(
                                        <tr key={data.id} className={styles["row"]}>
                                            <th>{data.optionGroup}</th>
                                            <td >{data.name}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductDetail



   