import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actLoginRequest } from "../actions/AuthAction";
import LoginForm from "../components/Login/LoginForm";

const Login = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    var[user,setUser] = useState({
        username:"",
        password:""
    })

    const onChange=(e)=>{
        var name = e.target.name;
        var value = e.target.value;
        setUser({...user,[name]:value});
    }

    const onLogin =async ()=>{
        await dispatch(actLoginRequest(user))
        if(localStorage.getItem("user")!==null) navigate("/")
    }

    return(
        <div>
            <LoginForm onChange={onChange} onLogin={onLogin}/>
        </div>
    )
}

export default Login;








// {
//     "token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2Njk4ODg0ODYsImV4cCI6ODgwNjk4ODg0ODZ9.GEttJidedvWOjFeFvTg9HvQBiB7cXJvwdn_HbTUs5JwTqOJsGGdCnk8Af0xxgj-Gqd_dRq7_X_VADm-WjA3yxA",
//     "type":"Bearer",
//     "userModel":{
//         "id":4,
//         "name":"PVK",
//         "dateOfBirth":null,
//         "address":"DN",
//         "phoneNumber":"123456789",
//         "gender":true,
//         "userAccount":null
//     },
//     "roles":[{"authority":"ROLE_MEMBER"},{"authority":"ROLE_ADMIN"}]
// } user
