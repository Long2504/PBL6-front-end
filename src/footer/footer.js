import styles from "../assets/appstyle/footer.module.css";
import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaFacebookSquare,
	FaYoutube,
	FaQrcode,
	FaRegMoneyBillAlt,
	FaRegClock,
	FaRegCreditCard,
} from "react-icons/fa";

const MyFooter = () => {
	return (
		<footer>
			<div className={styles["footer_top"]}>
				<div className={styles["info-company"]}>
					<img src="/assets/image/logo.jpg" alt="" className={styles["logo"]} />
					<h2>Công ty TNHH Tin Học KLVN</h2>
					<div className={styles["item-infor"]}>
						<FaMapMarkerAlt color="red"></FaMapMarkerAlt>
						<p>54 Nguyễn Lương Bằng - Thành phố Đà Nẵng</p>
					</div>
					<div className={styles["item-infor"]}>
						<FaPhoneAlt color="red"></FaPhoneAlt>
						<p>0123.456.789</p>
					</div>
					<div className={styles["item-infor"]}>
						<FaEnvelope color="red"></FaEnvelope>
						<p>hotro@KLVN.com.vn</p>
					</div>
				</div>

				<div className={styles["about"]}>
					<div className={styles["title"]}>Thông tin chung</div>
					<div className={styles["content"]}>
						<a href="/gioi-thieu">Giới thiệu về KLVN</a>
						<a href="/tin-tuyen-dung.html">Tin tuyển dụng</a>
						<a href="/tin-tuc">Tin tức</a>
						<a href="/tin-khuyen-mai.html">Tin khuyến mãi</a>
						<a href="/lien-he">Liên hệ, góp ý</a>
					</div>
				</div>
				<div className={styles["about"]} style={{marginLeft:'200px'}}>
					<div className={styles["title"]}>Hỗ trợ khách hàng</div>
					<div className={styles["content"]}>
						<a href="https://mega.com.vn/huong-dan-mua-hang-tra-gop-tai-mega-technology-qua-the-tin-dung.html">
							Tìm hiểu về mua trả góp
						</a>
						<a href="/chinh-sach-van-chuyen-va-giao-nhan-hang-mega-technology.html">
							Chính sách vận chuyển, giao hàng
						</a>
						<a href="/chinh-sach-quy-dinh-chung.html">
							Chính sách, quy định chung
						</a>
						<a href="/chinh-sach-bao-hanh-tai-mega-technology.html">
							Chính sách bảo hành
						</a>
						<a href="/chinh-sach-doi-tra-lai-hang-tai-mega-technology.html">
							Chính sách đổi, trả lại hàng
						</a>
						<a href="/bao-mat-thong-tin-khach-hang.html">
							Bảo mật thông tin khách hàng
						</a>
					</div>
				</div>
			</div>
			<div className={styles["footer__bottom"]}>
				<div className={styles["pay"]}>
					<h4>Phương thức thanh toán</h4>
					<div className={styles["listMethodPay"]}>
						<div className={styles["item"]}>
							<FaQrcode size={"2.5em"}></FaQrcode>
							<p>QR code</p>
						</div>
						<div className={styles["item"]}>
							<FaRegMoneyBillAlt size={"2.5em"}></FaRegMoneyBillAlt>
							<p>Tiền mặt</p>
						</div>
						<div className={styles["item"]}>
							<FaRegClock size={"2.5em"}></FaRegClock>
							<p>Trả góp</p>
						</div>
						<div className={styles["item"]}>
							<FaRegCreditCard size={"2.5em"}></FaRegCreditCard>
							<p>Internet Banking</p>
						</div>
					</div>
				</div>
				<div className={styles["community"]}>
					<h4>Cộng đồng tech</h4>
					<div className={styles["listCommunity"]}>
						<div className={styles["item"]}>
							<FaFacebookSquare
								color="#485992"
								size={"2.5em"}
							></FaFacebookSquare>
						</div>
						<div className={styles["item"]}>
							<FaYoutube color="red" size={"3em"}></FaYoutube>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default MyFooter;
