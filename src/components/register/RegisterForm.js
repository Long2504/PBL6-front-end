import { Component } from "react";
import styles from '../../assets/appstyle/register.module.css'

class RegisterForm extends Component {
    render() {
        return (
            <div className={styles["main"]}>
                <div className={styles["left"]}>
                    <img src="/assets/image/img-left-login.jpg" alt="" className={styles["img-left"]} />
                </div>
                <div className={styles["right"]}>
                    <div className={styles["form"]}>
                        <form action method="POST" className={styles["form"]} id={styles["form-1"]}>
                            <div className={styles["desc"]}>
                                <h2 className={styles["heading"]}>Sign up</h2>
                                <p>If you already have an account register</p>
                                <em>You can</em>
                                <a href>Login here !</a>
                            </div>
                            <div className={styles["form-group"]}>
                                <label className={styles["form-label"]}>Email</label>
                                <div className={styles["input"]}>
                                    <i className={styles["fa"] + styles["fa-envelope"]} aria-hidden="true" />
                                    <input id="email" name="email" type="text" placeholder="Enter your email addresss" className={styles["form-control"]} />
                                </div>
                                <span className={styles["form-message"]} />
                            </div>
                            <div className={styles["form-group"]}>
                                <label className={styles["form-label"]}>Mật khẩu</label>
                                <div className={styles["input"]}>
                                    <i className={styles["fa"] + styles["fa-lock"]} aria-hidden="true" />
                                    <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" className={styles["form-control"]} />
                                </div>
                                <span className={styles["form-message"]} />
                            </div>
                            <div className={styles["form-group"]}>
                                <label className={styles["form-label"]}>Mật khẩu</label>
                                <div className={styles["input"]}>
                                    <i className={styles["fa"] +  styles["fa-lock"]} aria-hidden="true" />
                                    <input type="password" placeholder="Nhập lại mật khẩu" className={styles["form-control"]} />
                                </div>
                                <span className={styles["form-message"]} />
                            </div>
                            <button className={styles["btn-submit"]}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterForm;