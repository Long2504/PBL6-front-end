import '../assets/appstyle/main.css'

const MyFooter = () => {
    return (
        <div>
            <div className="footer__top" />
            <div className="footer__bottom">
                <div className="pay">
                    <h4>Phương thức thanh toán</h4>
                    <div className="listMethodPay">
                        <div className="item">
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/7534c48e46ec507e.svg" alt="" className="footer_img" /></a>
                            <p>QR code</p>
                        </div>
                        <div className="item">
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/0e924ede5a93187b.svg" alt="" className="footer_img" /></a>
                            <p>Tiền mặt</p>
                        </div>
                        <div className="item">
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/b2c29b7046b45840.svg" alt="" className="footer_img" /></a>
                            <p>Trả góp</p>
                        </div>
                        <div className="item">
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/abf02ec95226fd05.svg" alt="" className="footer_img" /></a>
                            <p>Internet Banking</p>
                        </div>
                    </div>
                </div>
                <div className="community">
                    <h4>Cộng đồng tech</h4>
                    <div className="listCommunity">
                        <div className="item">
                            <a href><img src="https://shopfront-cdn.tekoapis.com/static/4a245cee42ae6bbb.svg" alt="" className="footer_img" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/2d3d889a92325278.svg" alt="" className="footer_img" /></a>
                        </div>
                        <div className="item">
                            <a href="#"><img src="https://shopfront-cdn.tekoapis.com/static/c71967f1b568ff35.svg" alt="" className="footer_img" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  MyFooter