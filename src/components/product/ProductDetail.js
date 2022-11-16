import { useParams } from "react-router-dom";
import styles from '../../assets/appstyle/productdetail.module.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/CartAction";
import { useState } from "react";



const ProductDetail =(props) =>{
    const params = useParams();
    const { id: productId } = params;  
    
    const dispatch = useDispatch();
    const addToCartHandler = () =>{
        dispatch(addToCart(productId))
    }
    const productDetail = {
        attributes:[
            {
                "id": 16,
                "name": " Windows 11 Home ",
                "optionGroup": "Hệ điều hành"
            },
            {
                "id": 3,
                "name": " NX.ADDSV.00M",
                "optionGroup": "Part-number"
            },
            {
                "id": 14,
                "name": " WiFi 802.11ac , Bluetooth 5.0 ",
                "optionGroup": "Kết nối không dây"
            },
            {
                "id": 12,
                "name": " 1 x HDMI ",
                "optionGroup": "Cổng xuất hình"
            },
            {
                "id": 18,
                "name": " 2 cell  36 Wh , Pin liền ",
                "optionGroup": "Pin"
            },
            {
                "id": 20,
                "name": " Không đèn ",
                "optionGroup": "Đèn LED trên máy"
            },
            {
                "id": 9,
                "name": " 1 x 4GB, 1 x 4GB Onboard  DDR4  2400MHz ( 1 Khe cắm / Hỗ trợ tối đa 12GB )",
                "optionGroup": "RAM"
            },
            {
                "id": 15,
                "name": " Thường , có phím số , không đèn ",
                "optionGroup": "Bàn phím"
            },
            {
                "id": 13,
                "name": " 2 x USB 3.2 , 1 x USB 2.0 , 1 x 3.5 mm ",
                "optionGroup": "Cổng kết nối"
            },
            {
                "id": 10,
                "name": " 15.6 ( 1920 x 1080 ) Full HD  TFT  không cảm ứng , HD webcam ",
                "optionGroup": "Màn hình"
            },
            {
                "id": 4,
                "name": " Bạc",
                "optionGroup": "Màu sắc"
            },
            {
                "id": 11,
                "name": " 512GB SSD M.2 NVMe /",
                "optionGroup": "Lưu trữ"
            },
            {
                "id": 1,
                "name": " 12",
                "optionGroup": "Bảo hành"
            },
            {
                "id": 5,
                "name": " Văn phòng, Học sinh - Sinh viên",
                "optionGroup": "Nhu cầu"
            },
            {
                "id": 2,
                "name": " Aspire 3",
                "optionGroup": "Series laptop"
            },
            {
                "id": 6,
                "name": " Core i5 , Intel Core thế hệ thứ 11 ",
                "optionGroup": "Thế hệ CPU"
            },
            {
                "id": 7,
                "name": " Intel Core i5-1135G7 ( 2.4 GHz - 4.2 GHz / 8MB / 4 nhân, 8 luồng )",
                "optionGroup": "CPU"
            },
            {
                "id": 17,
                "name": " 36.34  x 23.84 x 1.99 cm ",
                "optionGroup": "Kích thước"
            },
            {
                "id": 19,
                "name": " 1.7 kg",
                "optionGroup": "Khối lượng"
            },
            {
                "id": 8,
                "name": " Onboard  Intel Iris Xe Graphics ",
                "optionGroup": "Chip đồ họa"
            }
            
        ],
        description: 'CPU: Intel Core i5-1135G7n- Màn hình: 15.6" TFT (1920 x 1080)n- RAM: 1 x 4GB, 1 x 4GB Onboard DDR4 2400MHzn- Đồ họa: Onboard Intel Iris Xe Graphicsn- Lưu trữ: 512GB SSD M.2 NVMe n- Hệ điều hành: Windows 11 Homen- Pin: 2 cell 36 Wh Pin liềnn- Khối lượng: 1.7kg',
        name: 'Laptop ACER Aspire 3 A315-58-54M5 NX.ADDSV.00M (15.6" Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Onboard/Windows 11 Home/1.7kg)',
        productImgs: [
            {
                id:0,
                value:"https://lh3.googleusercontent.com/DMFtL22zhD3hvuunhr9mJROV07cjlqYYm_F1yLKZqbmMvS-2VtNs97-VXFGYAANJ-h6-7-oIQFPpEu3cGEBo0m4JyYYn2X4=rw"
            },
            {
                id:1,
                value:"https://lh3.googleusercontent.com/UjItPK0m1nmYk_zpkPRX_ggyaFJpoLicy78a44cex1h6G4xgyH86cfM1fzzTi6osFdf-_KIh_nW8SJs_7iupGxZvsXzs9OVr=rw"
            },
            {
                id:2,
                value:"https://lh3.googleusercontent.com/TMzf4NWHcqy1EtU851La6R83YP5i_2bQZoz3mmqplG9a-tPJqY_pHL8oeqkTuf0x00ipw7XN0r_YhQm-fB3HMXwk5oEEuUvt=rw"
            },
            {
                id:3,
                value:"https://lh3.googleusercontent.com/bvX4yeqE0GIvs2a5KThhi2uBVgdTcotBFbbMkCDZnrb_ohhUf__IS1FRCrRftwYPYoX0dRPv5Lt9xUWJjEdT4YTJ648kabHL=rw"
            },
            {
                id:4,
                value:"https://lh3.googleusercontent.com/_SApryKFms-BYshoOG9JRUG14-JLrnShoUSZ7_4_JqcYW5YaL2eRJ0cw4AXNjOmHDi1q-f-dVFH3BwyiCMxg-7-mAsKPGA-LcA=rw",

            },
            {
                id:5,
                value:"https://lh3.googleusercontent.com/oSWDmUGzrKrzGwR_N2auPrFqR3dtS8BC1mrp5tcWUmMTfGzuRu-ZWuo3ORv6uwmHP91CBMexhzHjeQec2O3OlIAwzCZIXyI=rw"
            }
        ],
        price: '13.990.000'
    }
    const arrDeciption = productDetail.description.split('n-')
    console.log(productDetail.description)
    const [image,setImage]= useState(productDetail.productImgs[0])
    const handleClick= (index)=>{
        const img = productDetail.productImgs[index];
        setImage(img)
    }
    return(
    <div id={styles["content-detail"]}>
        <div className={styles["clearfix"]}>
            <p>Trang chủ</p>
        </div>
        <div className={styles["main-detail"]}>
            <div className={styles["space"]}>
            </div>
            <div className={styles["show-image"]}>
                <div className={styles["product-image"]}>
                    <img src={image.value}></img>
                </div>
                <div className={styles["products-image"]}>
                    {productDetail.productImgs.map((data,i)=>{
                        return(
                            <div className={styles["img-container"]}>
                                <img key={data.id} src={data.value} onClick={()=>handleClick(i)}></img>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className={styles["info-product"]}>
                <h2 className={styles["product-name"]}>{productDetail.name.toString()}
                </h2>
                <div className={styles["desc"]}>
                    <p>Giới thiệu</p>
                    <ul className={styles["list-desc"]}>
                        {arrDeciption.map((data)=>{
                            return(
                                <li>{data}</li>
                            )
                        })}
                    </ul>
                </div>
                <h3 className={styles["price"]} >{productDetail.price +' ₫'}</h3>
                <button onClick={() =>addToCartHandler} className={styles["add-to-cart"]}>
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
                        {productDetail.attributes.map((data)=>{
                            return(
                                <tr className={styles["row"]}>
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

export default ProductDetail


