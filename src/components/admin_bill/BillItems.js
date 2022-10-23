import { Component } from "react";
import {  Link } from 'react-router-dom';



class BillItem extends Component{
    render(){
        var {Bill,index} = this.props;
        return(
            <tr>
              <th scope="row">{index +1}</th>
              <td>{Bill.id}</td>
              <td>{Bill.day}</td>
              <td>{Bill.total}</td>
              <td>{Bill.user.name}</td>
              <td>
                <div>
                {/* <button className="btn btn-info" onClick={()=>this.props.onDelete(Bill.id)}>Delete</button> */}
                <Link to={`./edit/${Bill.id}`} className="btn btn-primary" style={{marginRight:"15px"}}>Edit</Link>
                </div>
              </td>
            </tr>

        )
    }
}

export default BillItem 