import ProductDetail from '../components/product/ProductDetail'
import { useDispatch,useSelector  } from "react-redux";
import { pushCartAction } from "../actions/CartAction";
import { useState, useEffect } from "react";
import { fetchProduct } from "../services/ProductService";
import { useParams } from "react-router-dom";

const ProductDetailPublic = ()=> {

    const dispatch = useDispatch();
    const params = useParams();
    const { id: productId } = params; 
    const product = useSelector(state=>state.productReducer.product);
    const [image,setImage]= useState([])
    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[dispatch,productId])
    


    useEffect(()=>{
        if(product.productImgs){
            setImage(product.productImgs[0])
        }
    },[product])

    const addToCartHandler = (productId) =>{
        dispatch(pushCartAction({id:productId},"ADD"))
    }
    const handleClick= (index)=>{
        const img = product.productImgs[index];
        setImage(img)
    }


    return <ProductDetail
                product={product} 
                handleClick={handleClick}
                addToCartHandler={addToCartHandler}
                image={image}
            />
}

export default ProductDetailPublic;