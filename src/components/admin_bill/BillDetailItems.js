import { Component } from "react";
import styles from '../../assets/appstyle/adminbill.module.css'

class BillDetailItems extends Component{
    render(){
        return(
        <tr>
            <td>{this.props.name}</td>
            <td>x2</td>
            <td className={styles["alignright"]} width="100%">{this.props.price} VND</td>
        </tr>
        )
    }
}

export default BillDetailItems