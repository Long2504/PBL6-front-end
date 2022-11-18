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
       //const token = JSON.parse(localStorage.getItem("user")).token;
       const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2Njg2MDM4MjgsImV4cCI6ODgwNjg2MDM4Mjh9.Wgw2nd_AETRQ7J7qXxQk-d5AwIK96ZHNeIiDJaB2CFr1dRILm3LIiKpTb4i7bfrgyJaTdTsZeiazKpTAunpL5w'
       return {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
       }
    }
    return {'Content-Type': 'application/json'}
}


