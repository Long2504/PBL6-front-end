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





