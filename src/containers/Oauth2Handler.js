import { useEffect, useState } from "react";
import { Navigate,  useSearchParams } from "react-router-dom";
import { loginWithGoogle } from "../services/AuthService";
const Oauth2Handler = ()=>{
    var [queryParams] = useSearchParams();
    var email = queryParams.get("email")
    var [user,setUser] = useState(localStorage.getItem("user"))
    useEffect(()=>{
        loginWithGoogle({username : email}).then(
           res =>{
            console.log(res)
            localStorage.setItem("user",JSON.stringify(res.data))
           }
        ).then(
            res=>{
                setUser(localStorage.getItem("user"))
            }
        )
    },[email])
    useEffect(()=>{
        console.log(user)
    },[user])
    return(
    <div>
        {user!==null?<div><Navigate to="/"/></div>:
        <div>waiting</div>
        }
    </div>)
}

export default Oauth2Handler;