import { Component } from "react";

class ProductList extends Component{
    render(){
        return(
            <div>
            <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" style={{textAlign: 'center'}}>STT</th>
                <th scope="col" style={{textAlign: 'center'}}>Name</th>
                <th scope="col" style={{textAlign: 'center'}}>Brand</th>
                <th scope="col" style={{textAlign: 'center'}}>Available</th>
                <th scope="col" style={{textAlign: 'center'}}></th>
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