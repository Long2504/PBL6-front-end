
import styles from '../assets/appstyle/footer.module.css'
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaFacebookSquare,FaYoutube,FaQrcode,FaRegMoneyBillAlt,FaRegClock,FaRegCreditCard } from 'react-icons/fa'

const MyFooter = () => {
    return (
        <footer>
            <div className={styles["footer_top"]}>
                <div className={styles['info-company']}>
                    <img src='/assets/image/logo.jpg' alt="" className={styles['logo']}/>
                    <h2>Công ty TNHH Tin Học KLVN</h2>
                    <div className={styles['item-infor']}>
                        <FaMapMarkerAlt color='red'></FaMapMarkerAlt>
                        <p>54 Nguyễn Lương Bằng - Thành phố Đà Nẵng</p>
                    </div>
                    <div className={styles['item-infor']}>
                        <FaPhoneAlt color='red'></FaPhoneAlt>
                        <p>0123.456.789</p>
                    </div>
                    <div className={styles['item-infor']}>
                        <FaEnvelope color='red' ></FaEnvelope>
                        <p>hotro@KLVN.com.vn</p>
                    </div>
                </div>
                
                
                
            </div> 
            <div className={styles["footer__bottom"]}>
                <div className={styles["pay"]}>
                    <h4>Phương thức thanh toán</h4>
                    <div className={styles["listMethodPay"]}>
                        <div className={styles["item"]}>
                            <FaQrcode size={'2.5em'}></FaQrcode>
                            <p>QR code</p>
                        </div>
                        <div className={styles["item"]}>
                            <FaRegMoneyBillAlt size={'2.5em'}></FaRegMoneyBillAlt>
                            <p>Tiền mặt</p>
                        </div>
                        <div className={styles["item"]}>
                            <FaRegClock size={'2.5em'}></FaRegClock>
                            <p>Trả góp</p>
                        </div>
                        <div className={styles["item"]}>
                            <FaRegCreditCard size={'2.5em'}></FaRegCreditCard>
                            <p>Internet Banking</p>
                        </div>
                    </div>
                </div>
                <div className={styles["community"]}>
                    <h4>Cộng đồng tech</h4>
                    <div className={styles["listCommunity"]}>
                        <div className={styles["item"]}>
                            <FaFacebookSquare color='#485992' size={'2.5em'}></FaFacebookSquare>

                        </div>
                        <div className={styles["item"]}>
                            <FaYoutube color='red' size={'3em'}></FaYoutube>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default MyFooter