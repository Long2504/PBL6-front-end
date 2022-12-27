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

    const onClickGG = ()=>{
        const  link = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=360833085778-tn1iikvodu69t5djmd36eefvji1qc3ps.apps.googleusercontent.com&scope=email%20profile&state=eQ2cd0GhPIIKuU_nrqqTxwO3G-2u-4duV3JjrbndqXI%3D&redirect_uri=https%3A%2F%2Fbackendpbl6.herokuapp.com%2Foauth2%2Fcallback%2Fgoogle&service=lso&o2v=2&flowName=GeneralOAuthFlow'
        window.open(link);
    }

    const onLogin =async ()=>{
        console.log("asfsda")
        await dispatch(actLoginRequest(user))
        if(localStorage.getItem("user")!==null) navigate("/")
    }

    return(
        <div>
            <LoginForm 
                onChange={onChange} 
                onLogin={onLogin}
                onClickGG={onClickGG}    
            />
        </div>
    )
}

export default Login;





