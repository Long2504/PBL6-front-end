import { Component } from "react";
import BillDetailModal from "./BillDetailModal";
import Table from 'react-bootstrap/Table';
class BillList extends Component {
  render() {
    return (
      <div>
        <BillDetailModal getBill={this.props.getBill} show={this.props.show} handleClose={this.props.handleClose} bill={this.props.bill}>
          {this.props.loadBillDetail(this.props.bill)}
        </BillDetailModal>
        <Table striped hover>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">id</th>
              <th scope="col">day</th>
              <th scope="col">total</th>
              <th scope="col">user</th>
            </tr>
          </thead>

          <tbody>
            {this.props.children}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default BillList