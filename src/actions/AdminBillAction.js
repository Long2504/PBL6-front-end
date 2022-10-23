import * as Type from '../contants/ActionType'
import { getBills } from '../services/AdminBillService'

export const actFetchBills = (bills)=>{
    return {
        type : Type.FETCH_BILLS,
        bills:bills
    }
}

export const actFetchBillsRequest = ()=>{
    return dispatch =>{
        return getBills(dispatch)
    }
}