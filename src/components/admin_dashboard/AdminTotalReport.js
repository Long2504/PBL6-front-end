import { Component } from "react";

class AdminTotalReport extends Component {
    render() {
        var {data,reportKey,unit} = this.props;
        // console.log(data[reportKey])
        return (
            <div className={this.props.className}>
                <div className="bg-dark rounded d-flex align-items-center justify-content-between p-4">
                    {this.props.children}
                    <div className="ms-3">
                        <p className="mb-2">{reportKey}</p>
                        <h6 className="mb-0 d-flex justify-content-center">{data[reportKey]} {unit}</h6>
                    </div>
                </div>
            </div>

        )
    }
}

export default AdminTotalReport;