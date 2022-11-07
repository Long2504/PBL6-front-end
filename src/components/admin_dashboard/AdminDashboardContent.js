import { library } from "@fortawesome/fontawesome-svg-core";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminChartReport from "./AdminChartReport";
import AdminTotalReport from "./AdminTotalReport";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import * as Type from "../../contants/ChartType.js"
library.add(faChartLine)


class AdminDashboardContent extends Component {
    render() {
        var {totalData,salesData,revenueData,visitorData,productsData} = this.props
        console.log(totalData)
        return (

            <div>
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <AdminTotalReport className="col-sm-6 col-xl-3" data={totalData} reportKey="Total sales" unit={"VND"}>
                            <FontAwesomeIcon icon="fa-solid fa-chart-line" style={{fontSize:"40px"}} />
                        </AdminTotalReport>
                        <AdminTotalReport className="col-sm-6 col-xl-3" data={totalData} reportKey="Total revenue" unit={"VND"}>
                        <FontAwesomeIcon icon="fa-solid fa-chart-line" style={{fontSize:"40px"}} />
                        </AdminTotalReport>
                        <AdminTotalReport className="col-sm-6 col-xl-3" data={totalData} reportKey="Amount products sales">
                        <FontAwesomeIcon icon="fa-solid fa-chart-line" style={{fontSize:"40px"}} />
                        </AdminTotalReport>
                        <AdminTotalReport className="col-sm-6 col-xl-3" data={totalData} reportKey="Visitor">
                        <FontAwesomeIcon icon="fa-solid fa-chart-line" style={{fontSize:"40px"}} />
                        </AdminTotalReport>
                    </div>
                </div>
                {/* Sale & Revenue End */}
                {/* Sales Chart Start */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <AdminChartReport data={this.props.chartDataLoader(salesData,revenueData)} type = {Type.CHART_BAR} />
                        <AdminChartReport data={this.props.chartDataLoader(visitorData)}  type = {Type.CHART_BAR}/>
                    </div>
                </div>
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <AdminTotalReport className="col-sm-6 col-xl-4" data={totalData} reportKey="Total sales last month" unit={"VND"}>
                            <FontAwesomeIcon icon="fa-solid fa-chart-line" style={{fontSize:"40px"}} />
                        </AdminTotalReport>
                        <AdminTotalReport className="col-sm-6 col-xl-4" data={totalData} reportKey="Total revenue last month" unit={"VND"}>
                        <FontAwesomeIcon icon="fa-solid fa-chart-line" style={{fontSize:"40px"}} />
                        </AdminTotalReport>
                        <AdminTotalReport className="col-sm-6 col-xl-4" data={totalData} reportKey="Amount products sales last month">
                        <FontAwesomeIcon icon="fa-solid fa-chart-line" style={{fontSize:"40px"}} />
                        </AdminTotalReport>
                    </div>
                </div>
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <AdminChartReport data={this.props.chartDataLoader(productsData)} type = {Type.CHART_PIE} />
                    </div>
                </div>
            </div>

        )
    }
}

export default AdminDashboardContent;