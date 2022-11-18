import styles from '../assets/appstyle/footer.module.css'

const MyFooter = () => {
    return (
        <footer>
            <div className={styles["footer__top"]}>
                <div className={styles['div-img']}>
                    <img src='/assets/image/logo.jpg' alt="" className={styles['logo']}/>
                </div>
                <div className={styles['info-company']}></div>
                
                
            </div> 
            <div className={styles["footer__bottom"]}>
                <div className={styles["pay"]}>
                    <h4>Phương thức thanh toán</h4>
                    <div className={styles["listMethodPay"]}>
                        <div className={styles["item"]}>
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/7534c48e46ec507e.svg" alt="" className={styles["footer_img"]} /></a>
                            <p>QR code</p>
                        </div>
                        <div className={styles["item"]}>
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/0e924ede5a93187b.svg" alt="" className={styles["footer_img"]} /></a>
                            <p>Tiền mặt</p>
                        </div>
                        <div className={styles["item"]}>
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/b2c29b7046b45840.svg" alt="" className={styles["footer_img"]} /></a>
                            <p>Trả góp</p>
                        </div>
                        <div className={styles["item"]}>
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/abf02ec95226fd05.svg" alt="" className={styles["footer_img"]} /></a>
                            <p>Internet Banking</p>
                        </div>
                    </div>
                </div>
                <div className={styles["community"]}>
                    <h4>Cộng đồng tech</h4>
                    <div className={styles["listCommunity"]}>
                        <div className={styles["item"]}>
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/4a245cee42ae6bbb.svg" alt="" className={styles["footer_img"]} /></a>
                        </div>
                        <div className={styles["item"]}>
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/2d3d889a92325278.svg" alt="" className={styles["footer_img"]} /></a>
                        </div>
                        <div className={styles["item"]}>
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/c71967f1b568ff35.svg" alt="" className={styles["footer_img"]} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default  MyFooter