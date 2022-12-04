

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
