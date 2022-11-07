import { useParams } from "react-router-dom";
import styles from '../../assets/appstyle/productdetail.module.css'
import { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Store } from '../../reducers/RootReducer'


const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, product: action.payload, loading: false};
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}



const ProductDetail =(props) =>{
    
    const parama = useParams();
    // console.log(parama.id,"parama");
    const [{loading, error, product}, dispatch] = useReducer(reducer,{
        products: [],
        loading: true, 
        error: '',
    })
    const api = "api/product/" + parama.catelogy + "/" +parama.name + "/" + parama.id
    console.log(api)
    //products = ProductsAPI
    //const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'})
            try {
                // const result = await axios.get(api)
                // dispatch({type: 'FETCH_SUCCESS', payload: result.data});
                const result = parama
                dispatch({type: 'FETCH_SUCCESS', payload: result});
                
            } catch (err) {
                dispatch({type: 'FETCH_FAIL', payload: err.message});
            }
            
            // setProducts(result.data);
        };
        fetchData();
    }, []);

    const {state, dispatch: cxtDispatch} = useContext(Store);
    const { cart } = state;
    console.log(state,"state")
    const addToCartHandler = async() =>{
        // const existItem = cart.cartItems.find((x) => x.id === product.id);
        const existItem = cart.cartItems.find((x) => x.id == product.id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        // const { data } = await axios.get('/api/products/{product.id}')
        // const {data} =  parama.id;
        // if (data.countInStock < quantity){
        //     window.alert('Sorry. Product is out of stock')
        //     return;
        // }

        cxtDispatch({
            type: 'CART_ADD_ITEM',payload: {...product,quantity}
        })
    
    }
    return(
    <div id={styles["content-detail"]}>
        <div className={styles["clearfix"]}>
            {/* <p>Trang chủ</p> */}
        </div>
        <div className={styles["main-detail"]}>
            <div className={styles["space"]}>
            </div>
            <div className={styles["show-image"]}>
                <div className={styles["product-image"]}>
                    <img src="https://assets3.razerzone.com/svZa_ATCQgWQqnhkHzox_-0RGOQ=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh1e%2Fhd4%2F9286405029918%2F210104-blade-15-ch8-fhd-1500x1000-4.jpg"></img>
                </div>
                <ul className={styles["products-image"]}>
                    <li>
                        <div className={styles["img-container"]}>
                            <img src="https://assets3.razerzone.com/3MexHBPGqY1Jdkmrb14AwLbw_9g=/78x78/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh38%2Fhe1%2F9286404964382%2F210104-blade-15-ch8-fhd-1500x1000-3.jpg"></img>
                        </div>
                    </li>
                    <li>
                        <div className={styles["img-container"]}>
                            <img src="https://assets3.razerzone.com/9MrYnepHlVlk9-Lhv1QJ05y-e7I=/78x78/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh22%2Fhdd%2F9286404800542%2F210104-blade-15-ch8-fhd-1500x1000-6.jpg"></img>
                        </div>
                    </li>
                    <li>
                        <div className={styles["img-container"]}>
                            <img src="https://assets3.razerzone.com/G64tp4ah7joZr6mdqWk6hjDqNRc=/78x78/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh1e%2Fhd4%2F9286405029918%2F210104-blade-15-ch8-fhd-1500x1000-4.jpg"></img>
                        </div>
                    </li>
                    <li>
                        <div className={styles["img-container"]}>
                            <img src="https://assets3.razerzone.com/TN4jpKT1m1d2RNcOFvA44kVqBJs=/78x78/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8f%2Fhe1%2F9286404997150%2F210104-blade-15-ch8-fhd-1500x1000-5.jpg"></img>
                        </div>
                    </li>
                    <li>
                        <div className={styles["img-container"]}>
                            <img src="https://assets3.razerzone.com/-vLw3L2XR-JHnhUw6eOKMY9v6I8=/78x78/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fhda%2F9286404735006%2F210104-blade-15-ch8-fhd-1500x1000-2.jpg"></img>
                        </div>
                    </li>
                </ul>

            </div>
            <div className={styles["info-product"]}>
                <h2 className={styles["product-name"]}>
                    Razer Blade 15 - QHD OLED 240Hz - GeForce RTX 3070 Ti - Black
                </h2>
                <div className={styles["desc"]}>
                    <p>Giới thiệu</p>
                    <ul className={styles["list-desc"]}>
                        <li>Intel i9-12900H processor</li>
                        <li>Windows 11 Home</li>
                        <li>15.6" QHD 240Hz OLED</li>
                        <li>NVIDIA® GeForce RTX™ 3070 Ti</li>
                    </ul>
                </div>
                <h3 className={styles["price"]} >
                    40.190.000 ₫
                </h3>
                <button onClick={addToCartHandler} className={styles["add-to-cart"]}>
                    <p>Thêm vào giỏ hàng</p>
                </button>
            </div>
        </div>
        <div className={styles["container-detail"]}>
            <div className={styles["desc-detail"]}>
                <div className={styles["title"]}>
                    <h2>Thông tin chi tiết</h2>
                </div>

                <table>
                    <tr className={styles["row"]}>
                        <th>Processor</th>
                        <td >1.8GHz 14-core Intel i9-12900H processor, Turbo Boost up to 5GHz, with 24MB of Cache</td>
                    </tr>
                    <tr className={styles["row"]}>
                        <th>OS</th>
                        <td >Windows 11 Home</td>
                    </tr>
                    <tr className={styles["row"]}>                      
                    <th>DISPLAY</th>
                        <td >15.6" QHD 240Hz OLED, 100% DCI-P3, 1.0ms, individually factory calibrated</td>                        
                    </tr>
                    <tr className={styles["row"]}>
                        <th>GRAPHICS</th>
                        <td >NVIDIA® GeForce RTX™ 3070 Ti (8GB GDDR6 VRAM)</td>
                    </tr>
                    <tr className={styles["row"]}>
                        <th>GRAPHIC FEATURES</th>
                        <td >
                            <ul>
                                <li>NVIDIA® GeForce RTX™ 3070 Ti Laptop GPU</li>
                                <li>8GB GDDR6 VRAM</li>
                                <li>NVIDIA CUDA® Cores - 5888</li>
                                <li>Maximum Graphics Power up to 105W</li>
                                <li>Boost Clock up to 1200MHz</li>
                                <li>NVIDIA GPU Boost™ 2.0</li>
                                <li>NVIDIA Optimus™ Technology</li>
                                <li>NVIDIA Whisper Mode 2.0</li>
                                <li>NVIDIA Resizable BAR</li>
                                <li>2nd Gen Ray Tracing Cores</li>
                                <li>3rd Gen Tensor Cores</li>
                                <li>VR Ready</li>
                            </ul>
                        </td>
                    </tr>
                        <tr className={styles["row"]}>
                            <th>STORAGE</th>
                            <td >1TB SSD (M.2 NVMe PCIe 4.0 x4)</td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>MEMORY</th>
                            <td >16 GB DDR5 4800MHz dual-channel memory (slotted)</td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>KEYBOARD</th>
                            <td >Per-Key Backlighting, powered by Razer Chroma™</td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>CONNECTIVITY</th>
                            <td >Killer® Wireless Wi-Fi 6E AX1690 (IEEE 802.11a/b/g/n/ac/ax/az), Bluetooth® 5.2</td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>TOUCHPAD</th>
                            <td >Precision glass touchpad</td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>INPUT & OUTPUT</th>
                            <td >
                                <ul>
                                    <li>1 x Thunderbolt™ 4 (USB-C™)</li>
                                    <li>2 x USB-C 3.2 Gen 2 - Supports Power Delivery 3 (15W)</li>
                                    <li>3 x USB-A 3.2 Gen 2</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>AUDIO</th>
                            <td >
                                <ul>
                                    <li>3.5mm Combo-Jack</li>
                                    <li>Stereo 2.0 | 2 Speakers</li>
                                    <li>THX Spatial Audio</li>
                                    <li>2-Mic Array</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>FINISH</th>
                            <td >T6 CNC Aluminum, Anodized , Black with illuminated Razer Logo</td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>DIMENSIONS</th>
                            <td >
                                <ul>
                                    <li>16.90 mm x 235 mm x 355 mm</li>
                                    <li>0.67" x 9.25" x 13.98"</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>APPROXIMATE WEIGHT</th>
                            <td >2.01 kg / 4.40 lbs</td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>BATTERY AND ADAPTOR</th>
                            <td >
                                <ul>
                                    <li>Built-in 80WHr rechargeable lithium-ion polymer battery with 2-year limited battery warranty</li>
                                    <li>230W power adapter</li>
                                </ul>    
                            </td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>ADDITIONAL FEATURES</th>
                            <td >
                                <ul>
                                    <li>Windows Hello: Yes - IR Camera</li>
                                    <li>Windows Cortana:Yes</li>
                                    <li>Webcam: 1080p IR Hello</li>
                                    <li>Security: Intel® Platform Trust Technology (Intel® PTT) security embedded, sTPM 2.0</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className={styles["row"]}>
                            <th>WARRANTY</th>
                            <td >
                                <ul>
                                    <li>1-year limited laptop warranty</li>
                                    <li>2-year limited battery warranty</li>
                                </ul>
                            </td>
                        </tr>
                </table>
            </div>
        </div>
    </div>
    )
}

export default ProductDetail