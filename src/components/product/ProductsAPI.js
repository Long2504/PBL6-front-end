
import { Link, useParams } from 'react-router-dom';
import styles from '../../assets/appstyle/product.module.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/CartAction";
import { useEffect, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ToggleButton from './ToggleButon'
// function removeVietnameseTones(str) {
//     str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
//     str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
//     str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
//     str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
//     str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
//     str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
//     str = str.replace(/đ/g,"d");
//     str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
//     str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
//     str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
//     str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
//     str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
//     str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
//     str = str.replace(/Đ/g, "D");
//     // Some system encode vietnamese combining accent as individual utf-8 characters
//     // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
//     str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
//     str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
//     // Remove extra spaces
//     // Bỏ các khoảng trắng liền nhau
//     str = str.replace(/ + /g," ");
//     str = str.trim();
//     // Remove punctuations
//     // Bỏ dấu câu, kí tự đặc biệt
//     str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
//     return str;
// }
let vietnamdognVN = Intl.NumberFormat("vi",{
    style: "currency",
    currency : 'VND'
});

const ClassifyProduct = ({
    classifyData,
    selectWeight
}) => {
    console.log(classifyData,"classifyData")
    const [active,setActive] = useState([[]]);
    let arrActive = []
    var listData = []
    useEffect(()=> {
        if(Array.isArray(classifyData)){
            classifyData.forEach((element) =>{
                let temp = new Array(element.attributes.length).fill(false)
                arrActive.push(temp)
            })
            setActive(arrActive)
            console.log("useEffect")
        }
    },[])
    if(Array.isArray(classifyData)){
        console.log(classifyData,"classifyData")

        //console.log(active,"active")
        const handleSelectWeightClick = (id,index,indexItem,e)=>{
            // arrActive[index][indexItem] = !arrActive[index][indexItem]
            // setActive(arrActive)
            // selectWeight({
            //     "index":index,
            //     "id":id
            // })
            // console.log(selectWeight)
            console.log(e.target.value,"e.value")
        }

        
        
        const detail =(data,index)=>{
            return data.map((item,indexItem) => {
                return(
                   <ToggleButton 
                    // <ToggleButton
                        
                                            
                    />
                )
            })
        }
        listData = classifyData.map((data,index) => {
            return(
                <div 
                    key={data.id} 
                    className={styles['detail-item']}
                >
                    <div 
                        className={styles['title']}
                    >
                        {data.name}
                    </div>
                    <div 
                        className={styles['list-atribute']}
                    >
                        {/* <ToggleButtonGroup onChange={()=> index}> */}

                            {detail(data.attributes,index)}
                        {/* </ToggleButtonGroup> */}
                    </div>

                </div>
            );
        });
    }
    return <div 
                className={styles["classify"]}
            >
                <h2
                    style={
                        {
                            marginTop:"15px",
                            marginLeft:"20px",
                            marginBottom:"15px",
                        }
                    }
                >
                    Bộ lọc
                </h2>
                {listData}
            </div>
}


const ListProduct = (props) =>{
    const dispatch = useDispatch();
    const addToCartHandler = (productId) =>{
        dispatch(addToCart(productId))
    }

    console.log(props.productData.length,"product Data API")
    let listData = []
    if(props.productData.length !== undefined ){
        listData = props.productData.map((data) =>{ 
            return(
                <div key={data.id} className={styles['product']}>
                    <div className={styles['product-container']}>
                        <Link 
                            to={`/product/${data.category.name.toString()}/${data.id.toString()}`}  
                            className={styles['product-link-detail']}
                        >
                            <div 
                                className={styles['product-image']}
                            >
                                <img 
                                    src={data.productImgs[0]}   
                                    alt="" 
                                    style={
                                        {
                                            height:"100%",
                                            width:"100%",
                                            borderRadius: "15px"
                                        }
                                    }
                                />
                            </div>
                        </Link>
                        {/* <div className={styles['btn-compare']}>
                            <input type="checkbox"/>
                            <span>Compare</span>
                        </div> */}
                    </div>
                    <div 
                        className={styles['infor-product']}
                    >
                        <Link 
                            to={`/product/${data.category.name.toString()}/${data.id.toString()}`}  
                            className={styles['product-link-detail']}
                        >
                            <div 
                                className={styles['caption']}
                            >
                                <h2 
                                    className={styles['name-product']}
                                >
                                    {data.name}
                                </h2>
                            </div>
                            <p 
                                className={styles['price-product']}
                            >
                                {vietnamdognVN.format(data.price)}
                            </p>
                        </Link>
                        <div 
                            className={styles['btn-addProduct']}
                        >
                            <button   
                                onClick={() => addToCartHandler(data.id)} 
                            >
                                <p>Thêm vào giỏ hàng</p>
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    console.log(listData,"listData")
    return( 
        <div 
            className={styles['list-product']}
        >
            {listData}
        </div>)
}


const ProductsAPI = (props) => {
    const [selectedWeight, setSelectedWeight] = useState([]);
    const [list, setList] = useState(props.productData);
    const listLocal = props.productData

    const handleSelectWeight = (value) => {
        if(value){
            let arr = []
            if(selectedWeight.length !== 0){
                let check = true
                selectedWeight.forEach(element => { 
                    if(element.index === value.index){
                        check = false
                        if(element.id.some((id) => id === value.id)){
                            element.id = element.id.filter((id) => id != value.id)
                        }
                        else element.id.push(value.id)
                    }
                    console.log(element,"element")
                    arr.push(element)
                })
                if(check){      
                    arr.push({
                        "index":value.index,
                        "id":[value.id]
                    })
                }
            }
            else{
                arr.push({
                    "index":value.index,
                    "id":[value.id]
                })
                console.log("else")
            }
            setSelectedWeight(arr);
            console.log(selectedWeight,"selectedWeight")
        } 
    }

    const applyFilters = () =>{
        let updatedList = listLocal;
        console.log(selectedWeight,"selectedWeight")
        if(selectedWeight){
            selectedWeight.forEach((i) =>
                updatedList = updatedList.filter(product =>{
                    if( (product.attributes.some( (item => i.id.includes(item.id)) ) ) ){
                        return product
                    }
                })
            )
        }
        setList(updatedList);
    }
    useEffect(()=>{
        applyFilters();
    },[selectedWeight])
    useEffect(()=>{
        setList(props.productData)
    },[props.productData])
    return(
        <div className={styles["list"]}>
            <ClassifyProduct 
                classifyData={props.classifyData} 
                selectWeight={handleSelectWeight}    
            />
            <div className={styles["sort"]}>
                <p>Sắp xếp theo</p>
                <div>Bán chạy</div>
                <div>Mới về</div>
                <div>Giá giảm dần</div>
                <div>Giá tăng dần</div>
            </div>
            <ListProduct 
                productData={list} 
            />
            {/* <div className={styles['padination']}>
                <a href="#">Previous</a>
                <a href="#" title="Algorithm">1</a>
                <a href="#" title="DataStructure">2</a>
                <a href="#" title="Languages">3</a>
                <a href="#" title="Interview" class="active">4</a>
                <a href="#" title="practice">5</a>
                <a href="#">Next</a>
            </div> */}
        </div>
    )
}


export default ProductsAPI
