import { actLogin, editUserAction } from "../actions/AuthAction"
import { ApiCaller } from "./ApiCaller"

export const loginApi= async(dispatch,user)=>{
    console.log(user,"user")
    return ApiCaller("POST",JSON.stringify(user),"login")
    .then(res=>dispatch(actLogin(res.data)))
    .catch(error=>{
        alert("ĐĂNG NHẬP THẤT BẠI")
        console.log(error)
    })
}

export const loginWithGoogle= async(email)=>{
    return ApiCaller("POST",JSON.stringify(email),"provider")
    .catch(error=>{
        alert("ĐĂNG NHẬP THẤT BẠI")
        console.log(error)
    })
}


export const changePassword = async (data)=>{
    return ApiCaller("PUT",JSON.stringify(data),"password")
    .then(res => {console.log(res.data)})
    .catch( error =>{
        console.log(error)
    })
}

export const editUser = async(dispatch,data) =>{
    return ApiCaller('PUT',JSON.stringify(data),'user/edit')
    .then(res=>dispatch(editUserAction(res.data)))
    .catch( error =>{
        console.log(error,"error editUser")
    })
}

export const resetPasword = async (email)=>{
    return ApiCaller('POST','','password?email=' + email)
    .then(res=>{
        if(res.data === 'Kiem tra email'){
            alert("Kiem tra email cua ban")
        }
    })
    .catch( error =>{
        console.log(error,"error editUser")
    })
}

export const registerAccount = async (user)=>{
    return ApiCaller('POST',user,'register')
    .then(res=>{
        console.log(res.data,"registerAccount")
    })
    .catch( error =>{
        console.log(error,"error editUser")
    })
}