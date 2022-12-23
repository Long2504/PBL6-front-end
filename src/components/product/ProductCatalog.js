import { Link } from "react-router-dom";
import styles from "../../assets/appstyle/product.module.css";
import Loading from "../LoadingBox";

const ProductCatalog = (props) => {
	const { catalogData, onCatalogClick, loadingCatelogy } = props;
    var items
    if(!loadingCatelogy){
        //console.log(catalogData,"catalogDATA")
        const catalogDataSortID = catalogData.sort((a, b) => {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
        });
        const handleClick = (item) => {
            if (onCatalogClick) {
                onCatalogClick(item);
            }
        };
        items = catalogDataSortID.map((item) => {
            return (
                <Link
                    className={styles["item"]}
                    key={item.id}
                    to={`/product/${item.name.toLowerCase().toString()}`}
                >
                    <div className={styles["container-item"]}
                        onClick={() => handleClick(item)}
                    >
                        <img alt="" src={item.src}></img>
                        <span>{item.name}</span>
                    </div>
                </Link>
            );
        });
    }
    else{
        items = <Loading />
    }
	return <div className={styles["catalog"]}>{items}</div>;
};

export default ProductCatalog;
