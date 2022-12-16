import { useState } from "react"
import RegisterForm from "../components/register/RegisterForm"


const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
const errorTrim = "Bạn chưa nhập trường này"

const Register = ()=>{
    const day = []
    const month = []
    const year = []
    const [user,setUser] = useState({
        username:"",
        password:""
    })
    const [error,setError] = useState(
        {
            "username":'',
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
            if(atribute === 'username'){
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


    const handleSubmit = (event)=>{
        event.preventDefault()
        if(error.username.length + error.name.length + error.phoneNumber.length + error.password.length + error.confirmpassword.length === 0){
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