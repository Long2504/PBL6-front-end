import axios from "axios"
import { actGetProductReport, actGetRevenueReport, actGetSalesReport, actGetTotalReport, actGetVisitorReport } from "../actions/AdminReportAction"
import { ApiCaller } from "./ApiCaller"


export const getSalesReportRequest = (dispatch)=>{
    return ApiCaller("GET",null,"reports/sales")
    .then(res=>dispatch(actGetSalesReport(res.data)))
}

export  const getRevenueReportRequest = (dispatch)=>{
    return ApiCaller("GET",null,"reports/revenue")
    .then(res=>dispatch(actGetRevenueReport(res.data)))
}

export  const getProductsReportRequest = (dispatch)=>{
    return ApiCaller("GET",null,"reports/product")
    .then(res=>dispatch(actGetProductReport(res.data)))
}

export  const getVisitorsReportRequest = (dispatch)=>{
    return ApiCaller("GET",null,"reports/visitor")
    .then(res=>dispatch(actGetVisitorReport(res.data)))
}

export  const getTotalReportRequest = (dispatch)=>{
    return ApiCaller("GET",null,"reports")
    .then(res=>dispatch(actGetTotalReport(res.data)))
}

export  const visitorCounting = ()=>{
    return ApiCaller("POST",null,"reports")
}

export  const getProductLabels= ()=>{
    return ApiCaller("GET",null,"category").then(res =>res.data)
}