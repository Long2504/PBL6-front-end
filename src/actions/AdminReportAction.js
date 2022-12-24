import * as Type from '../contants/ActionType'
import { getProductsReportRequest,  getRevenueReportRequest, getSalesReportRequest, getTotalReportRequest, getVisitorsReportRequest } from '../services/AdminReportService'

export const actGetSalesReport = (data)=>{
    return {
        type : Type.GET_SALES_REPORTS,
        data
    }
}

export const actGetSalesRequest = ()=>{
    return dispatch =>{
        return getSalesReportRequest(dispatch)
    }
}

export const actGetRevenueReport = (data)=>{
    return {
        type : Type.GET_REVENUE_REPORTS,
        data
    }
}

export const actGetRevenueRequest = ()=>{
    return dispatch =>{
        return getRevenueReportRequest(dispatch)
    }
}

export const actGetVisitorReport = (data)=>{
    return {
        type : Type.GET_VISITOR_REPORTS,
        data
    }
}

export const actGetVisitorRequest = ()=>{
    return dispatch =>{
        return getVisitorsReportRequest(dispatch)
    }
}


export const actGetProductReport = (data)=>{
    return {
        type : Type.GET_PRODUCT_REPORTS,
        data
    }
}

export const actGetProductReportsRequest = ()=>{
    return dispatch =>{
        return getProductsReportRequest(dispatch)
    }
}

export const actGetTotalReport = (data)=>{
    return {
        type : Type.GET_TOTAL_REPORTS,
        data
    }
}

export const actGetTotalRequest = ()=>{
    return dispatch =>{
        return getTotalReportRequest(dispatch)
    }
}


export const completeReport = ()=>{
    return {
        type : Type.REPORTS_COMPLETE
    }
}

