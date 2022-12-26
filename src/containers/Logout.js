import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { logoutAction } from '../actions/AuthAction'
const Logout = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch();
    dispatch(logoutAction())
    useEffect(()=>{
        navigate('/')
    })
    console.log("adsfasf")
}


export default Logout