import { actFetchBills } from "../actions/AdminBillAction"
import { ApiCaller } from "./ApiCaller"

export const getBills=(dispatch)=>{
    return ApiCaller("GET",null,"bill")
    .then(res=>dispatch(actFetchBills(res.data)))
}