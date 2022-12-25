import { Component } from "react";
import { Bar, Pie } from "react-chartjs-2";
import 'chart.js/auto';
import * as Type from "../../contants/ChartType.js"
class AdminChartReport extends Component {
    render() {
        var {data , options} = this.props.data;
        // console.log(data)
        return (
            <div className="col-sm-12 col-xl-6" style={{margin:'auto'}}>
            <div className="bg-dark text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">Salse &amp; Revenue</h6>
                </div>
                {/* <canvas id="myChart2" /> */}
                {
                    this.props.type === Type.CHART_BAR ?
                    <Bar data={data} options={options}/>:
                    <Pie data={data} options={options}/>

                }
            </div>
        </div>

        )
    }
}

export default AdminChartReport;