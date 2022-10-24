import { Component } from "react";

class BillDetailItems extends Component{
    render(){
        return(
        <tr>
            <td>{this.props.name}</td>
            <td>x2</td>
            <td className="alignright">{this.props.price} VND</td>
        </tr>
        )
    }
}

export default BillDetailItems