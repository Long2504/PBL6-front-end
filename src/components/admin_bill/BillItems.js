import { Component } from "react";



class BillItem extends Component {
  render() {
    var { Bill, index } = this.props;
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{Bill.id}</td>
        <td>{Bill.day}</td>
        <td>{Bill.total}</td>
        <td>{Bill.user.name}</td>
        <td>
          <div>
            <button type="button" className="btn btn-primary" onClick={()=>this.props.getBill(Bill.id)}>
              Xem
            </button>
          </div>
        </td>
      </tr>
    )
  }
}

export default BillItem 