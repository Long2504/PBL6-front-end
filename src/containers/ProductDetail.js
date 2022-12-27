import ProductDetail from '../components/product/ProductDetail'
import { useDispatch,useSelector  } from "react-redux";
import { pushCartAction } from "../actions/CartAction";
import { useState, useEffect } from "react";
import { fetchProduct } from "../services/ProductService";
import { useParams } from "react-router-dom";
import Loading from '../components/LoadingBox';

const ProductDetailPublic = ()=> {

    const dispatch = useDispatch();
    const params = useParams();
    const { id: productId } = params; 
    const product = useSelector(state=>state.productReducer.product);
    const loading = useSelector(state=>state.productReducer.loading);
    const [image,setImage]= useState([])
    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[dispatch,productId])
    const checkLogin = useSelector((state) => state.authReducer.logged);


    useEffect(()=>{
        if(product.productImgs){
            setImage(product.productImgs[0])
        }
    },[product])

    const addToCartHandler = (productId) =>{
        if(checkLogin){
            dispatch(pushCartAction({id:productId},"ADD"))
        }
        else{
            alert("vui lòng đăng nhập để thêm sản phẩm ")
        }
    }
    const handleClick= (index)=>{
        const img = product.productImgs[index];
        setImage(img)
    }
    if(loading){
        return <div style={{minHeight:'500px'}}>< Loading/></div>
    }

    return <ProductDetail
                product={product} 
                handleClick={handleClick}
                addToCartHandler={addToCartHandler}
                image={image}
            />
}

export default ProductDetailPublic;