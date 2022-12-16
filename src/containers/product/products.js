import ProductsAPI from "../../components/product/ProductsAPI";
import ProductCatalog from "../../components/product/ProductCatalog";
import styles from  '../../assets/appstyle/product.module.css'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategory,fetchProductList } from "../../services/ProductService";

import {FaAngleRight } from 'react-icons/fa'
import { Link } from "react-router-dom";

const ProductsPublic = ()=>{
    const dispatch = useDispatch();
    const catelogy = useSelector(state=>state.catalogReducer.categories);
    const products = useSelector(state=>state.productsReducer.products);
    const [options,setOption] = useState([]);
    const [similarProducts,setSimilarProducts] = useState({});
    const [catelogyName,setCatelogyName] =  useState("latop")
    useEffect(()=> {
        fetchCategory(dispatch)
        fetchProductList(dispatch)
    }, [dispatch]);
    
    useEffect(()=>{
        if(catelogy[0]){         
            setOption(catelogy[0].optionGroup)
            if(products !== undefined || products.length !== 0){
                //console.log(products)
                const newProduct = []
                products.forEach(element => {
                    //console.log(element.category,"id")
                    if(element.category.id === catelogy[0].id){
                        newProduct.push(element)
                    }
                });
                //console.log(newProduct,"newProduct")
                setSimilarProducts(newProduct)
            }
        }
    },[catelogy,products])

    console.log(catelogy,"catelogy")
    // console.log(products,"product")

    const handleCatalogClick = (item) =>{
        if(item){
            
            setOption(item.optionGroup)
            setCatelogyName(item.name)
            const newProduct = []
            if(products !== undefined && products.length !== 0){
                products.forEach(element => {
                    if(element.category.id === item.id){
                        newProduct.push(element)
                    }
                });
                setSimilarProducts(newProduct)
            }
        }
    }
    //console.log(similarProducts,"simlilarProduct")
        
    return(
        <div id={styles["content"]}>
            <div className={styles["clearfix"]}>
                <div className={styles["div-link"]}>
                    <Link to={"/"}>Trang chủ</Link>
                    <FaAngleRight
                        style={
                            {
                                margin:"auto",
                                width: "20px",
                                fontWeight:"10",
                            }
                        } 
                    >
                    </FaAngleRight>   
                    <span>Sản phẩm</span>
                    <FaAngleRight
                            style={
                                {
                                    margin:"auto",
                                    width: "20px",
                                    fontWeight:"10",
                                }
                            } 
                        >
                    </FaAngleRight>
                    <span>{catelogyName}</span>
                </div>
            </div>
            <div className={styles["main-menu"]}>
                <ProductCatalog 
                    catalogData={catelogy} 
                    onCatalogClick={handleCatalogClick}
                />
                <ProductsAPI
                    classifyData={options} 
                    productData={similarProducts} 
                />
                <div className={styles["more"]}>
                </div>
            </div>
        </div>
    )

}

export default ProductsPublic;



