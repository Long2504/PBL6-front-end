
import { Link } from 'react-router-dom';
import styles from '../../assets/appstyle/product.module.css'
const ClassifyProduct = (props) => {
    console.log(props,"classify")
    const listData = props.classifyData.map((data) => {
        const detail = data.detail.map((item) => {
            return  <p className={styles['name-classify']}>{item}</p>
        })
        return(
            <div className={styles['detail-item']}>
                <p className={styles['title']}>{data.brand}</p>
                {detail}
            </div>
        );
    });
    return <div className={styles["classify"]}><h2>Bộ lọc</h2>{listData}</div>
}



const ListProduct = (props) =>{
    const listData = props.productData.map((data) =>{ 



        return(
            <div className={styles['product']}>
                <div className={styles['product-container']}>
                    {/* <Link to={data.name +'/' + data.id}  className={styles['product-link-detail']}> */}
                    <Link to={data.id}  className={styles['product-link-detail']}>
                        <img src={data.src} className={styles['product-image']}  alt=""/>
                    </Link>
                    <div className={styles['btn-compare']}>
                        <input type="checkbox"/>
                        <span>Compare</span>
                    </div>
                </div>
                <div className={styles['infor-product']}>
                    {/* <Link to={data.name +'/' + data.id}  className={styles['product-link-detail']} > */}
                    <Link to={'/' + data.id}  className={styles['product-link-detail']}>
                        <h2 className={styles['name-product']}>{data.name}</h2>
                        <p className={styles['price-product']}>{data.price}</p>
                    </Link>
                    <button type="button"  className={styles["btn-addProduct"]} >
                        <p>Thêm vào giỏ hàng</p>
                    </button>
                </div>
            </div>

        )
    })
    return <div className={styles['list-product']}>{listData}</div>
}


const ProductsAPI = (props) => {
    return(
        <div className={styles["list"]}>
            <ClassifyProduct classifyData={props.classifyData} />
            <div className={styles["sort"]}></div>
            <ListProduct productData={props.productData} />
        </div>
    )
}


export default ProductsAPI
