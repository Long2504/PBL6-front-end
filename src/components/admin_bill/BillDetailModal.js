import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../assets/appstyle/adminbill.module.css'
// import '../../assets/appstyle/adminbill.css'
class BillDetailModal extends Component {
    render() {
        var total = 0;
        if(this.props.bill){
            total=this.props.bill.total;
        }
        return (
            <Modal show={this.props.show} onHide={() => this.props.handleClose()}>
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{fontSize : "19px"}}>
                    <table cellPadding={0} cellSpacing={0} className={styles["aligncenter"]}>
                        <tbody><tr>
                            <td className={styles["content-wrap"]+" " +styles["aligncenter"]}>
                                <table width="100%" cellPadding={0} cellSpacing={0}>
                                    <tbody><tr>
                                        <td className={styles["content-block"]}>
                                            <h2>Thanks for using our app</h2>
                                        </td>
                                    </tr>
                                        <tr>
                                            <td className={styles["content-block"]}>
                                                <table className={styles["invoice"]}>
                                                    <tbody><tr>
                                                        <td>Anna Smith<br />Invoice #12345<br />June 01 2015</td>
                                                    </tr>
                                                        <tr>
                                                            <td>
                                                                <table className={styles["invoice-items"]}>
                                                                    <tbody>
                                                                        {this.props.children}
                                                                        <tr className={styles["total"]}>
                                                                            <td width="50%">Total :</td>
                                                                            <td></td>
                                                                            <td className={styles["alignright"]} width="100%">{total} VND</td>
                                                                        </tr>
                                                                    </tbody></table>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles["content-block"]}>
                                                {/* <a href="#">View in browser</a> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles["content-block"]}>
                                                Company Inc. 123 Van Ness, San Francisco 94102
                                            </td>
                                        </tr>
                                    </tbody></table>
                            </td>
                        </tr>
                        </tbody></table>


                </Modal.Body>
                <Modal.Footer >
                    <Button variant="primary" onClick={() => this.props.handleClose()}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default BillDetailModal