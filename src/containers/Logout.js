import { useNavigate } from "react-router-dom"

const Logout = ()=>{
    const navigate = useNavigate()
    localStorage.removeItem("user")
    navigate('/')
    // const onLogout =async ()=>{
    // }


    //return (<div></div>)
}


export default Logout