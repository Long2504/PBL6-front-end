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
        items = catalogDataSortID.map((item,index) => {
            return (
                <Link
                    className={styles["item"]}
                    key={item.id}
                    to={`/product/${item.name.toLowerCase().toString()}`}
                >
                    <div className={styles["container-item"]}
                        onClick={() => handleClick(item)}
                    >
                        <img alt="" src={dataImg[index]}></img>
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

const dataImg = [
    "https://lh3.googleusercontent.com/lFZZtBMUqkbl9qKKUe3DSmHqpb62UjWrOkxqcJ6lN3yM83Wg2Irp-ZlvkUwGO6TMcsscLELMZa_lN9jo8tKteWsCzmUii7po=rw"
    ,
    "https://lh3.googleusercontent.com/Y7KEp2iUC1syVaF1SQuQ8ZPCLu8PVhCKqadoVKlI8ON-vKqxyvi0EbgM00Ky8Zb_wIcl9Q8HTLZkQj_MuTzqyJhGuLJz8mFTqw=rw"
    ,
    "https://lh3.googleusercontent.com/1rbqboPNTH2Gyx3dS28kewywgX0ovZAZHBcstS4KjeJO8j6Qc6Kn19xJH0XpaiqCAj4a-xf_EeAZjlARKaI9mQNBhlHDp6o=rw"
    ,
    "https://lh3.googleusercontent.com/0V32ezrE3Bn6r_lmv4YIyS7Y4QnfVAcjTQ8XjR-86cP_mAtiIzOPsWeEni-MpEklbR5jIfJvtXgD6K-eWhlO7sLsgbxBwsHduQ=rw"
    ,"https://lh3.googleusercontent.com/JuVFuLJ2OmqyEO2mtZ0kJTWvACpFkXE_765ihiBIu8WQoHlS-jYXY8zsXDpZUBk26NqRulJ9U_u3DxLcBTxpPGY7n1uzGdKAuA=rw"
    
]