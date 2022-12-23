

export const paymentReducer = (state={},action)=>{
    switch(action.type){
        case "PUSH_PAYMENT_ACCESS":
            console.log(action.link[0])
            localStorage.setItem("linkPayment",JSON.stringify(action.link[0]))
            // return action.link[0]
        default:
            return state
    }
}


export const orderReducer = (state={loading: true, orders: []},action)=>{
    // console.log(action.payload,"reducer")
    // console.log(action.type,"action.type")
    switch(action.type){
        case 'LIST_ORDER_ACCESS':{
            console.log("ok")
            return { 
                    orders: action.payload,
                    loading: false
                }
        }
        default:
            //console.log("ko")
            return state;
    }
};

