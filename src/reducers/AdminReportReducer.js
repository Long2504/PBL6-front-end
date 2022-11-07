import * as Type from "../contants/ActionType"
import * as ReportKey from "../contants/ReportKey";
const adminReportReducer = (state = {}, action) => {
    var { data } = action
    switch (action.type) {
        case Type.GET_SALES_REPORTS:
            state[ReportKey.REPORTS_SALES]=data
            return {...state}
        case Type.GET_REVENUE_REPORTS:
            state[ReportKey.REPORTS_REVENUE]=data
            return {...state}
        case Type.GET_VISITOR_REPORTS:
            state[ReportKey.REPORTS_VISITOR]=data
            return {...state}
        case Type.GET_PRODUCT_REPORTS:
            state[ReportKey.REPORTS_PRODUCT]=data
            return {...state}
        case Type.GET_TOTAL_REPORTS:
            state[ReportKey.REPORTS_TOTAL]=data
            return {...state}
        case Type.REPORTS_COMPLETE:
                state[Type.REPORTS_COMPLETE]=Type.REPORTS_COMPLETE
                return {...state}
        default:
            return state
    }
}

export default adminReportReducer;