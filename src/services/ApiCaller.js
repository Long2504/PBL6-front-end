import axios from 'axios';

//http://localhost:5000
//https://backendpbl6.herokuapp.com
export const ApiCaller = (method,body,endpoint)=>{
    console.log(getHeader())
    return axios({
        method: method,
        url: `https://backendpbl6.herokuapp.com/${endpoint}`,
        headers: getHeader(), 
        data: body
      })
 }

 const getHeader = ()=>{
    if(localStorage.getItem("user")!==null){
       const token = JSON.parse(localStorage.getItem("user")).token;
       return {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
       }
    }
    return {'Content-Type': 'application/json'}
 }