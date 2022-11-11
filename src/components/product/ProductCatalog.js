
import { Link, useParams } from 'react-router-dom';
import styles from '../../assets/appstyle/product.module.css'



const ProductCatalog = (props) => {
    const {catalogData, onCatalogClick} = props
    const handleClick = (item) =>{
        if(onCatalogClick){
            onCatalogClick(item);
        }
        
    }
    const items = catalogData.map((item) => {
        return(
            <Link to={`/product/${item.name.toLowerCase()}`} className={styles["item"]}>
                <li 
                    key={item.id} 
                    className={styles["container-item"]} 
                    onClick={() => handleClick(item)}
                >
                    <img src={item.src}></img>
                    <span>{item.name}</span>
                </li>

            </Link>

        );
    }); 
    return <div className={styles["catalog"]}>
        {items}</div>

}


export default ProductCatalog