import { Component } from "react";
import styles from '../../assets/appstyle/login.module.css'
import { Link } from "react-router-dom";

class LoginForm extends Component{
    render(){
        return(
          <div className={styles["main"]}>
            <div className={styles["left"]}>
              <img src="/assets/image/img-left-login.jpg" alt="" className={styles["img-left"]} />
            </div>
            <div className={styles["right"]}>
              <div className={styles["form"]} id="form-1">
                <div className={styles["desc"]}>
                  <h2 className={styles["heading"]}>Sign in</h2>
                  <p>If you don't have an account register</p>
                  <em>You can</em>
                  <Link >Register here !</Link>
                </div>
                <div className={styles["form-group"]}>
                  <label className={styles["form-label"]}>Email</label>
                  <div className={styles["input"]}>
                    {/* <FaEnvelope size="20px" color="white" aria-hidden="true"/> */}
                    <input id={styles["email"]} name="username" type="text" placeholder="Enter your email addresss" className={styles["form-control"]} 
                    value={this.props.username} onChange={(e)=>{this.props.onChange(e)}}
                    />
                  </div>
                  <span className={styles["form-message"]} />
                </div>
                <div className={styles["form-group"]}>
                  <label className={styles["form-label"]}>Mật khẩu</label>
                  <div className={styles["input"]}>
                    <i className={styles["fa"] + styles["fa-lock"]} aria-hidden="true" />
                    <input id={styles["password"]} name="password" type="password" placeholder="Nhập mật khẩu" className={styles["form-control"]} 
                      value={this.props.password} onChange={(e)=>{this.props.onChange(e)}}
                    />
                  </div>
                  <span className={styles["form-message"]} />
                </div>
                <div className={styles["remember"]}>
                  <input type="checkbox" />
                  <label htmlFor="false">Remember</label>
                  <Link >Quên mật khẩu</Link>
                </div>
                <div className={styles["buttons-login"]}>
                  <button className={styles["form-submit"]} onClick={()=>this.props.onLogin()}>Login</button>
                  <label className={styles["form-label"] + " " + styles["connect"]}>or connect with</label>
                  <div className={styles["items"]}>
                    <button type="button" className={styles["item"] + " " + styles["fb"]}>
                      <img src="/assets/image/icons/facebook.png" alt="Avatar" className={styles["img-item"]} />
                    </button>
                    <button type="button" className={styles["item"] + " " + styles["gg"]}>
                      <img src="/assets/image/icons/google.png" alt="" className={styles["img-item"]} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default LoginForm
