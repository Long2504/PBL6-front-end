import { Component } from "react";
import styles from '../../assets/appstyle/user.module.css'
class Bill extends Component{
    render(){
        
        const listBillDetail = this.props.bill.billDetails
        console.log(listBillDetail)

        return(
            <div className={styles["bill"]}>
                
            </div>
        )
    }
}

export default Bill