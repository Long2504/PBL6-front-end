import ProductsAPI from "../components/product/ProductsAPI";
import ProductCatalog from "../components/product/ProductCatalog";
import styles from '../assets/appstyle/product.module.css'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategory,fetchProductList } from "../services/ProductService";

import {FaAngleRight } from 'react-icons/fa'

const ProductsPublic = ()=>{

    const dispatch = useDispatch();
    const catelogy = useSelector(state=>state.catalogReducer.categories);
    const products = useSelector(state=>state.productsReducer.products);

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
    console.log(products,"product")
    const [options,setOption] = useState({});
    const [similarProducts,setSimilarProducts] = useState({});

    const handleCatalogClick = (item) =>{
        if(item){
            setOption(item.optionGroup)
            const newProduct = []
            if(products != undefined && products.length != 0){
                products.forEach(element => {
                    if(element.category.id === item.id){
                        newProduct.push(element)
                    }
                });
                //console.log({newProduct})
                setSimilarProducts(newProduct)
            }
        }
    }
    //console.log(similarProducts,"simlilarProduct")
        
    return(
        <div 
            id={styles["content"]}
        >
            <div 
                className={styles["clearfix"]}
            >
                <div 
                    className={styles["div-link"]}
                >
                    <span>Trang chủ</span>
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
                    <span>latop</span>
                </div>
            </div>
            <div 
                className={styles["main-menu"]}
            >
                <ProductCatalog 
                    catalogData={catelogy} 
                    onCatalogClick={handleCatalogClick}
                />
                <ProductsAPI
                    classifyData={options} 
                    productData={similarProducts} 
                />
                <div 
                    className={styles["more"]}
                >
                </div>
            </div>
        </div>
    )

}

export default ProductsPublic;




// const productData = [
//     {
//         id: "1",
//         src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
//         name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
//         price: "40.190.000 ₫",
//         category: "latop",
//         test: "3"
//     },
//     {
//         id: "2",
//         src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
//         name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
//         price: "40.190.000 ₫",
//         category: "latop"
//     },
//     {
//         id: "3",
//         src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
//         name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
//         price: "40.190.000 ₫",
//         category: "latop"
//     },
//     {
//         id: "4",
//         src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
//         name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
//         price: "40.190.000 ₫",
//         category: "latop"
//     },
//     {
//         id: "5",
//         src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
//         name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
//         price: "40.190.000 ₫",
//         category: "latop"
//     },
//     {
//         id: "6",
//         src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
//         name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
//         price: "40.190.000 ₫",
//         category: "latop"
//     },
//     {
//         id: "7",
//         src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
//         name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
//         price: "40.190.000 ₫",
//         category: "latop"
//     },
//     {
//         id: "8",
//         src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
//         name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
//         price: "40.190.000 ₫",
//         category: "latop"
//     },
//     {
//         id: "9",
//         src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
//         name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
//         price: "40.190.000 ₫",
//         category: "latop"
//     },

// ]