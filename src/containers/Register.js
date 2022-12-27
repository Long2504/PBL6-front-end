import { useState } from "react"
import { useNavigate } from "react-router-dom"
import RegisterForm from "../components/register/RegisterForm"
import { registerAccount } from "../services/AuthService"


const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
const errorTrim = "Bạn chưa nhập trường này"

const Register = ()=>{
    const navigate = useNavigate()
    const day = []
    const month = []
    const year = []
    const [user,setUser] = useState({
        name:"",
        dateOfBirth:"",
        address:"",
        phoneNumber:"",
        gender:true,
        email:"",
        username:"",
        password:"",
    })
    const [error,setError] = useState(
        {
            "username":'',
            "email":'',
            "name":'',
            "phoneNumber":'',
            "address":'',
            "password":'',
            "confirmpassword":''
        })

    for(let i = 1 ; i < 120 ; i++){
        
        if( i < 32){
            day.push(
                <option 
                    key={i} 
                    name={'optionDay'} 
                    value={i} 
                >
                    {i}
                </option>)
        }
        if(i < 13){
            month.push(
                <option 
                    key={i} 
                    name={'optionMonth'} 
                    value={i} 
                >
                    {i}
                </option>)
        }
        year.push(
            <option 
                key={i} 
                name={'optionYear'} 
                value={i+ 1903} 
            >
                {i+ 1903}
            </option>)
    }

    const onChange=(e)=>{
        var name = e.target.name;
        var value = e.target.value;
        setUser({...user,[name]:value});
        
        setError({...error,[name]:""})
    }
    const onBlur = (e)=>{
        const atribute = e.target.name;
        if(!e.target.value){
            setError({...error,[atribute]:errorTrim})
        }
        else {
            if(atribute === 'email'){
                if(!regularExpression.test(user[atribute])){
                    setError({...error,[atribute]:"trường này là Email"})
                }
            }
            if(atribute === 'phoneNumber'){
                if(user[atribute].length !== 10 || parseInt(user[atribute][0]) !== 0){
                    setError({...error,[atribute]:"Vui lòng nhập đúng số điện thoại"})
                }
            }

            if(atribute === 'password'){
                if(user[atribute].length < 6){
                    setError({...error,[atribute]:"Mật khẩu phải nhiều hơn 6 kí tự"})
                }
            }
            if(atribute === 'confirmpassword'){
                if(e.target.value !== user['password']){
                    setError({...error,[atribute]:"Mật khẩu không khớp"})
                }
            }
        }
    }


    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(error.username.length + error.email.length + error.name.length + error.phoneNumber.length + error.password.length + error.confirmpassword.length === 0){
            const user = {
                "userDetail":{
                    name:user.name,
                    dateOfBirth:user.dateOfBirth,
                    address:user.address,
                    phoneNumber:user.phoneNumber,
                    gender:user.gender,
                    email:user.email
                },
                username:user.username,
                password:user.password,
                "roles":[2]
            }
            await registerAccount(user)
            navigate('/login')
            console.log("OK")
        }
    }
    console.log(user)
    

    return (
            <RegisterForm 
                day={day} 
                month={month} 
                year={year}
                onChange={onChange}
                handleSubmit={handleSubmit}
                onBlur={onBlur}
                error={error}
            />)
}

export default Register;