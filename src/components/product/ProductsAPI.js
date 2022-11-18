
import { Link } from 'react-router-dom';
import styles from '../../assets/appstyle/product.module.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/CartAction";



const ClassifyProduct = (props) => {
    const { classifyData } = props
    var listData;
    // const [checked, setChecked] = useState();
    // const handleChange = (e) =>{
    //     setChecked(!checked);
    // }
    const detail =(data)=>{
        return data.map((item) => {
            // return  <li className={styles['name-classify']}>{item.name}</li>
            return  <span key={item.name} role={"checkbox"} aira-checked="false" className={styles['name-classify']}>{item.name}</span>
        })
    }
    if(Array.isArray(classifyData)){
        listData = classifyData.map((data) => {
            return(
                <div key={data.id} className={styles['detail-item']}>
                    <div className={styles['title']}>{data.name}</div>
                    <div className={styles['list-atribute']}>
                        {detail(data.attributes)}
                    </div>

                </div>
            );
        });
    }
    return <div className={styles["classify"]}><h2>Bộ lọc</h2>{listData}</div>
}


const ListProduct = (props) =>{
    const dispatch = useDispatch();
    const addToCartHandler = (productId) =>{
        dispatch(addToCart(productId))
    }
    console.log(props.productData.length,"product Data API")
    let listData = []
    if(props.productData.length !== undefined ){
        listData = props.productData.map((data) =>{ 
            return(
                <div key={data.id} className={styles['product']}>
                    <div className={styles['product-container']}>
                        <Link to={`/product/${data.category.name.toString()}/${data.id.toString()}`}  className={styles['product-link-detail']}>
                            <img src={data.productImgs[0]} className={styles['product-image']}  alt=""/>
                        </Link>
                        {/* <div className={styles['btn-compare']}>
                            <input type="checkbox"/>
                            <span>Compare</span>
                        </div> */}
                    </div>
                    <div className={styles['infor-product']}>
                        <Link to={`/product/${data.category.name.toString()}/${data.id.toString()}`}  className={styles['product-link-detail']}>
                            <h2 className={styles['name-product']}>{data.name}</h2>
                            <p className={styles['price-product']}>{data.price}</p>
                        </Link>
                        <button 
                            type="button"  
                            onClick={() => addToCartHandler(data.id)}  className={styles["btn-addProduct"]} >
                            <p>Thêm vào giỏ hàng</p>
                        </button>
                    </div>
                </div>
            )
        })
    }
    return <div className={styles['list-product']}>{listData}</div>
}


const ProductsAPI = (props) => {
    return(
        <div className={styles["list"]}>
            <ClassifyProduct classifyData={props.classifyData} />
            <div className={styles["sort"]}></div>
            <ListProduct productData={props.productData} />
            {/* <div className={styles['padination']}>
                <a href="#">Previous</a>
                <a href="#" title="Algorithm">1</a>
                <a href="#" title="DataStructure">2</a>
                <a href="#" title="Languages">3</a>
                <a href="#" title="Interview" class="active">4</a>
                <a href="#" title="practice">5</a>
                <a href="#">Next</a>
            </div> */}
        </div>
    )
}


export default ProductsAPI
