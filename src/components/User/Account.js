import { Component } from "react";
import styles from '../../assets/appstyle/user.module.css'

class Account extends Component{
    render(){
        return(
            <div className={styles["account"]}> 
                <div className={styles["title"]}>
                    <h1>Hồ Sơ Của Tôi</h1>
                </div>
                <hr></hr>
                <div className={styles["account-info"]}>
                    <div className={styles["info"]}>
                        <div className={styles["label"]}>
                            <label>Tên đăng nhập</label>
                        </div>
                        <div className={styles["info-main"]}>
                            <span>Long</span>

                        </div>
                    </div>
                    <div className={styles["info"]}>
                        <div className={styles["label"]}>
                            <span>Tên</span>
                        </div>
                        <div className={styles["info-main"]}>
                            <span>Long</span>

                        </div>
                    </div>
                    <div className={styles["info"]}>
                        <div className={styles["label"]}>
                            <label>Email</label>
                        </div>
                        <div className={styles["info-main"]}>
                            <span>Long</span>

                        </div>
                    </div>
                    <div className={styles["info"]}>
                        <div className={styles["label"]}>
                            <label>Số điện thoại</label>
                        </div>
                        <div className={styles["info-main"]}>
                            <span>Long</span>

                        </div>
                    </div>
                    <div className={styles["info"]}>
                        <div className={styles["label"]}>
                            <label>Giới tính</label>
                        </div>
                        <div className={styles["info-main"]}>
                            <span>Long</span>

                        </div>
                    </div>
                    <div className={styles["info"]}>
                        <div className={styles["label"]}>
                            <label>Ngày sinh</label>
                        </div>
                        <div className={styles["info-main"]}>
                            <span>Long</span>

                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default Account