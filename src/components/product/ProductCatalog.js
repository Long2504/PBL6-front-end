
import { Link } from 'react-router-dom';
import styles from '../../assets/appstyle/product.module.css'



const ProductCatalog = (props) => {
    const items = props.catalogData.map((item) => {
        return(
            <Link to={''} className={styles["item"]}>
                <div className={styles["container-item"]}>
                    <img src={item.src}></img>
                    <span>{item.name}</span>
                </div>
            </Link>

        );
    }); 
    return <div className={styles["catalog"]}>{items}</div>

}


export default ProductCatalog