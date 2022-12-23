
import styles from '../../assets/appstyle/user.module.css'
import { AiOutlineClose } from 'react-icons/ai'
const Bill = ({ open,bill, onClose})=>{

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1000
    }
    
    const MODAL_STYLES = { 
        position: 'fixed',
        top: '5%',
        left: '15%',
        right: '15%',
        padding: '20px 20px 0 20px',
        ZIndex: 1000,

    }
    const getGuarantee = (attributes) => {
        for (const item of attributes) {
          if (item.optionGroup === "Bảo hành" ) {
            return item.name;
          }
        }
    };
    const STYLE_TD = {
        verticalAlign: 'middle',
        textAlign: 'center'
    }
    const STYLE_BTN = {
        marginLeft: '85.4%',
        marginTop: '45px',
        backgroundColor:'white',
        cursor: 'pointer',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center'
    }
    const STYLE_SPAN = {
        fontWeight: 'bold',

    }

    if(!open) return null
    return (
      <div style={OVERLAY_STYLES}>
        <button onClick={onClose} style={STYLE_BTN}>
            <AiOutlineClose size={"30px"}/>
        </button>
        <div className={styles["bill"]} style={MODAL_STYLES}>
          <div className={styles["info-company"]}>
            <img src='/assets/image/logo.jpg' alt="" className={styles['logo']}/>
            <div>
                <h2>Công ty TNHH Tin Học KLVN</h2>
                <p>54 Nguyễn Lương Bằng - Thành phố Đà Nẵng</p>
                <p>0123.456.789</p>
                <p>hotro@KLVN.com.vn</p>
            </div>
          </div>
          <h1>Hóa Đơn</h1>
          <div className={styles["info-user"]}>
            <div>
              <span>Họ Tên :</span>
              <span style={STYLE_SPAN}>{bill.user.name}</span>
            </div>
            <div>
              <span>Địa chỉ :</span>
              <span style={STYLE_SPAN}>{bill.user.address}</span>
            </div>
            <div>
              <span>Số điện thoại :</span>
              <span style={STYLE_SPAN}>{bill.user.phoneNumber}</span>
            </div>
            <div>
              <span>Email :</span>
              <span style={STYLE_SPAN}>{bill.user.email}</span>
            </div>
          </div>
          <div className={styles["info-product"]}>
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Bảo hành</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {bill.billDetails.map((item, index) => (
                  <tr key={index}>
                    <td style={STYLE_TD}>{index + 1}</td>
                    <td style={STYLE_TD}>{item.orderDetail.product.id}</td>
                    <td>{item.orderDetail.product.name}</td>
                    <td style={STYLE_TD}>{getGuarantee(item.orderDetail.product.attributes) + " tháng"}</td>
                    <td style={STYLE_TD}>{item.orderDetail.amount}</td>
                    <td style={STYLE_TD}>{vietnamdognVN.format(item.orderDetail.product.price)}</td>
                    <td style={STYLE_TD}>{vietnamdognVN.format(item.totalPayable)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4}></td>
                  <td colSpan={3}>Tổng tiền đơn hàng : {vietnamdognVN.format(bill.total)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default Bill


let vietnamdognVN = Intl.NumberFormat("vi",{
    style: "currency",
    currency : 'VND'
});