import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { loginApi } from "../services/AuthService";
const Oauth2Handler =  ()=>{
    var [queryParams] = useSearchParams();
    const navigate = useNavigate();
    //var [user,setUser] = useState('')
    var account = queryParams.get("code")
    console.log(account,"account auth")
    var temp = account.split('@')
    const userNameTemp = temp[0]
    const passwordTemp = temp[1] + '@' + temp[2]
    const dispatch = useDispatch()
    useEffect(()=>{
        async function fetch(user){
            console.log(user,"usreafafadf")
            await dispatch(loginApi(user))
            navigate("/")
        }
        console.log(userNameTemp,"user auth")
        console.log(passwordTemp,"pass auth")
        const user = {
            username:userNameTemp,
            password:passwordTemp
        }
        fetch(user)
    
    },[])
    
    
    
    //console.log(user,"user auth")
}

export default Oauth2Handler;