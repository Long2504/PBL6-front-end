import { Component } from "react";

class BillList extends Component{
    render(){
        return(
            <div>
            <table className="table table-striped">
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
          </table>
            </div>
        )
    }
}

export default BillList