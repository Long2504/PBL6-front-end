import ProductsAPI from "../components/product/ProductsAPI";
import ProductCatalog from "../components/product/ProductCatalog";
import styles from '../assets/appstyle/product.module.css'

import { useEffect, useReducer, useState } from "react";
import axios from "axios";
// import logger from 'use-reducer-logger';


const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, products: action.payload, loading: false};
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}


const ProductsPublic = ()=>{
    // const state = {
    //     catalogData: [
    //         {
    //             src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
    //             name: 'PC',
    //         },
    //         {
    //             src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
    //             name: 'CPU',
    //         },
    //         {
    //             src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
    //             name: 'Ổ cứng',
    //         },
    //         {
    //             src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
    //             name: 'Card đồ họa',
    //         },
    //         {
    //             src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
    //             name: 'Bo mạch chủ',
    //         },
    //         {
    //             src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
    //             name: 'Tai nghe',
    //         },
    //         {
    //             src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
    //             name: 'Chuột',
    //         },
    //         {
    //             src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
    //             name: 'Bàn phím',
    //         },
    //     ],
    //     classifyData: [
    //         {
    //             brand: "Thương hiệu",
    //             detail: ['ASUS','DELL','HP','LG','Lenovo','Apple'],
    //         },
    //         {
    //             brand: "Màu sắc",
    //             detail: ['Bạc','Hồng','Carbon','Trắng','Đen'],
    //         },
    //     ],
    //     productData: [
    //         {
    //             src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
    //             name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
    //             price: "40.190.000 ₫",
    //             catelogy: "latop"
    //         },
    //         {
    //             src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
    //             name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
    //             price: "40.190.000 ₫",
    //             catelogy: "latop"
    //         },
    //         {
    //             src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
    //             name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
    //             price: "40.190.000 ₫",
    //             catelogy: "latop"
    //         },
    //         {
    //             src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
    //             name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
    //             price: "40.190.000 ₫",
    //             catelogy: "latop"
    //         },
    //         {
    //             src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
    //             name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
    //             price: "40.190.000 ₫",
    //             catelogy: "latop"
    //         },
    //         {
    //             src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
    //             name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
    //             price: "40.190.000 ₫",
    //             catelogy: "latop"
    //         },
    //         {
    //             src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
    //             name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
    //             price: "40.190.000 ₫",
    //             catelogy: "latop"
    //         },
    //         {
    //             src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
    //             name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
    //             price: "40.190.000 ₫",
    //             catelogy: "latop"
    //         },
    //         {
    //             src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
    //             name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
    //             price: "40.190.000 ₫",
    //             catelogy: "latop"
    //         },


    //     ]
    // }
    // const { catalogData } = state.catalogData
    // const { classifyData } = state.classifyData;
    // const { productData } = state.productData;

    const catalogData = [
        {
            src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
            name: 'PC',
        },
        {
            src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
            name: 'CPU',
        },
        {
            src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
            name: 'Ổ cứng',
        },
        {
            src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
            name: 'Card đồ họa',
        },
        {
            src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
            name: 'Bo mạch chủ',
        },
        {
            src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
            name: 'Tai nghe',
        },
        {
            src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
            name: 'Chuột',
        },
        {
            src: 'https://assets2.razerzone.com/images/main-menu/icons/icon-book13.svg',
            name: 'Bàn phím',
        },
    ]

    const classifyData = [
        {
            brand: "Thương hiệu",
            detail: ['ASUS','DELL','HP','LG','Lenovo','Apple'],
        },
        {
            brand: "Màu sắc",
            detail: ['Bạc','Hồng','Carbon','Trắng','Đen'],
        },
    ]

    const productData = [
        {
            id: "1",
            src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
            name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
            price: "40.190.000 ₫",
            catelogy: "latop",
            test: "3"
        },
        {
            id: "2",
            src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
            name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
            price: "40.190.000 ₫",
            catelogy: "latop"
        },
        {
            id: "3",
            src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
            name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
            price: "40.190.000 ₫",
            catelogy: "latop"
        },
        {
            id: "4",
            src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
            name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
            price: "40.190.000 ₫",
            catelogy: "latop"
        },
        {
            id: "5",
            src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
            name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
            price: "40.190.000 ₫",
            catelogy: "latop"
        },
        {
            id: "6",
            src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
            name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
            price: "40.190.000 ₫",
            catelogy: "latop"
        },
        {
            id: "7",
            src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
            name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
            price: "40.190.000 ₫",
            catelogy: "latop"
        },
        {
            id: "8",
            src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
            name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
            price: "40.190.000 ₫",
            catelogy: "latop"
        },
        {
            id: "9",
            src: "https://assets3.razerzone.com/VHAUmbe4ZRyIwRn6tvmuMwc41v8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2d%2Fhe5%2F9392073998366%2Fblade15-ch8-fhd-2-500x500.png",
            name: "Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black",
            price: "40.190.000 ₫",
            catelogy: "latop"
        },

    ]
    const [{loading, error, products}, dispatch] = useReducer(reducer,{
        products: [],
        loading: true, 
        error: '',
    })
    //products = ProductsAPI
    //const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'})
            try {
                const result = await axios.get('/api/product')
                dispatch({type: 'FETCH_SUCCESS', payload: result.data});
            } catch (err) {
                dispatch({type: 'FETCH_FAIL', payload: err.message});
            }
            
            // setProducts(result.data);
        };
        fetchData();
    }, []);





    return(
        <div id={styles["content"]}>
            <div className={styles["clearfix"]}>
                <p>Trang chủ</p>
            </div>
            <div className={styles["main-menu"]}>
                <ProductCatalog catalogData={catalogData} />
                <ProductsAPI  classifyData={classifyData} productData={productData} />
                <div className={styles["more"]}></div>
            </div>
        </div>
    )
}

export default ProductsPublic;