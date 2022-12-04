
import { Link } from 'react-router-dom';
import styles from '../../assets/appstyle/product.module.css'



const ProductCatalog = (props) => {
    const {catalogData, onCatalogClick} = props
    const catalogDataSortID = catalogData.sort((a,b)=>{
        if(a.id < b.id) return -1;
        if(a.id > b.id) return 1;
        return 0;
    })
    const handleClick = (item) =>{
        if(onCatalogClick){
            onCatalogClick(item);
        }
    }
    const items = catalogDataSortID.map((item) => {
        return(
            <Link key={item.id} to={`/product/${item.name.toLowerCase().toString()}`} className={styles["item"]}>
                <div 
                    className={styles["container-item"]} 
                    onClick={() => handleClick(item)}
                >
                    <img alt='' src={item.src}></img>
                    <span>{item.name}</span>
                </div>
            </Link>
        );
    }); 
    return <div className={styles["catalog"]}>
        {items}</div>
}


export default ProductCatalog