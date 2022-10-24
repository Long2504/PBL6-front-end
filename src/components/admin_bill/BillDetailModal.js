import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../assets/appstyle/bill.css'
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
                <Modal.Body>
                    <table cellPadding={0} cellSpacing={0}>
                        <tbody><tr>
                            <td className="content-wrap aligncenter">
                                <table width="100%" cellPadding={0} cellSpacing={0}>
                                    <tbody><tr>
                                        <td className="content-block">
                                            <h2>Thanks for using our app</h2>
                                        </td>
                                    </tr>
                                        <tr>
                                            <td className="content-block">
                                                <table className="invoice">
                                                    <tbody><tr>
                                                        <td>Anna Smith<br />Invoice #12345<br />June 01 2015</td>
                                                    </tr>
                                                        <tr>
                                                            <td>
                                                                <table className="invoice-items">
                                                                    <tbody>
                                                                        {this.props.children}
                                                                        <tr className="total">
                                                                            <td width="50%">Total :</td>
                                                                            <td></td>
                                                                            <td className="alignright" width="100%">{total} VND</td>
                                                                        </tr>
                                                                    </tbody></table>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="content-block">
                                                {/* <a href="#">View in browser</a> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="content-block">
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