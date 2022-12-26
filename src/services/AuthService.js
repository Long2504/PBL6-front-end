import { actLogin } from "../actions/AuthAction"
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


// export const changePassword = async ()=>{
//     return ApiCaller()
// }