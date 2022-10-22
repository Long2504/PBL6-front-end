import { Component } from "react";

class ProductList extends Component{
    render(){
        return(
            <div>
            <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">name</th>
                <th scope="col">brand</th>
                <th scope="col">available</th>
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

export default ProductList