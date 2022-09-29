import { useState } from "react";
import LoginForm from "../components/Login/LoginForm";

const Login = ()=>{
    var[user,setUser] = useState({
        username:"",
        password:""
    })

    const onChange=(e)=>{
        var value = e.target.value;
        setUser(...user,[e.target.name]=value);
    }

    return(
        <div>
            <LoginForm onChange={onChange} />
        </div>
    )
}

export default Login;