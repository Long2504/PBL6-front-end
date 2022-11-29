import {  useEffect, useState } from "react";
import HomeContent from "../components/home/HomeContent"
import { SSEcreate } from "../services/PaymentRealtimeService";

const Home = ()=>{

    var [id,setId] = useState(3)
    var [sse] = useState(SSEcreate("http://localhost:5000/payment/paypal/result/?id="+"PAYID-MN7VINQ19408100UK800510G"));
    // useEffect(()=>{
    //     sse.addEventListener("event",(event)=>{
    //         // const data = JSON.parse(event.data);
    //         console.log("!23");
    //         console.log(event.data);
    //         // sse.close()

    //     })
    // },[sse])




    return(
        <div>
            <HomeContent/>
        </div>
    )
}

export default Home;