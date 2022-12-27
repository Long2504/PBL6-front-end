import {  useEffect, useState } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { actEditProductRequest, actGetProductByIdRequest } from "../actions/AdminProductAction";
import { editProduct } from '../services/AdminProductService'
import ProductForm from "../components/admin_product/ProductForm";
import AdminTemplate from "../components/admin_template/AdminTemplate";

function AdminProductDetail(props){
    const navigate = useNavigate()
    const product = useSelector(state=>state.adminProductDetailReducer.product);
    var [state,setState] = useState(product);
    var [editState,setEditState]= useState({
        name : false,
        price:false,
        status :false,
        description:false,
    })
    const dispatch = useDispatch();
    let id = props.id;

    useEffect(()=>{
        if(id){
            dispatch(actGetProductByIdRequest(id));
        }
    },[dispatch,id])
    useEffect(()=>{
        setState(product)
        setImage(product.productImgs[0])
    },[product])

    const onEditClick = (name,boolean)=>{
        var value = boolean
        setEditState({...editState,[name]:value})
    }
    const checkSubmit = ()=>{
        return (editState.name || editState.price || editState.status || editState.description )

    }

    const onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        setState({...state,[name]:value})
    }

    const onSave = ()=>{

        var product = {
            name : state.name,
            price:state.price,
            status :true,
            description:state.description,
        }
        console.log("product")
        console.log(product)
        if(id){
            editProduct(dispatch,product,id);
            navigate('/admin/product')
        }
    }

    const [image,setImage]= useState([])
    const handleClick= (e)=>{
        const img = e.target.value;
        setImage(img)
    }
    

    return(
        <AdminTemplate>
            <ProductForm 
                product={state} 
                editState={editState}
                onChange={onChange}  
                onSave={onSave} 
                onEditClick={onEditClick}
                handleClick={handleClick} 
                image={image}
                checkSubmit={checkSubmit}
             />
        </AdminTemplate>
    )
}

export default AdminProductDetail
