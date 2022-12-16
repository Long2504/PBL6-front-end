import {  useEffect, useState } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { actEditProductRequest, actGetProductByIdRequest } from "../actions/AdminProductAction";
import ProductForm from "../components/admin_product/ProductForm";
import AdminTemplate from "../components/admin_template/AdminTemplate";

function AdminProductDetail(props){
    const product = useSelector(state=>state.adminProductDetailReducer);
    var [state,setState] = useState(product);
    var [editState,setEditState]= useState({
        name : false,
        price:false,
        status :false,
        description:false,
        popular:false,
        rate:false,
        information:false,
        category:false
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

    },[product])
    console.log(product)

    const onEditClick = (e,name)=>{
        var value = !editState[name]
        setEditState({...editState,[name]:value})
    }

    const onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        setState({...state,[name]:value})
    }

    const onSave = (e)=>{
        e.preventDefault();
        var product = {
            name : state.name,
            price:state.price,
            status :true,
            description:state.description,
            popular:state.popular,
            rate:state.rate,
            information:state.information,
            category:{
                "id":1
            }
        }
        console.log("product")
        console.log(product)
        if(id){
            dispatch(actEditProductRequest(product,id));
        }
        else{
            // dispatch(actAddFoodRequest(food))
        }
        onBack(e);
    }
    const onBack = (e)=>{
        e.preventDefault();
        props.navigate(-1)
    }    

    return(
        <AdminTemplate>
            <ProductForm 
            product={state} editState={editState}
             onChange={onChange}  onSave={onSave} onBack={onBack} onEditClick={onEditClick}
             />
        </AdminTemplate>
    )
}

export default AdminProductDetail
