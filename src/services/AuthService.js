import { actLogin } from "../actions/AuthAction"
import { ApiCaller } from "./ApiCaller"

export const loginApi=(dispatch,user)=>{
    return ApiCaller("POST",JSON.stringify(user),"login")
    // .then(res=>{console.log(res.data)})
    .then(res=>dispatch(actLogin(res.data)))
    // .then(()=>{login()})
}