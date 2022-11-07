import { Component } from "react";
import styles from '../../assets/appstyle/login.module.css'
import { Link } from "react-router-dom";
// import '../../assets/appstyle/login.css'



class LoginForm extends Component{
    render(){
        return(
            <div className={styles["main"]}>
            <div className={styles["left"]}>
              <img src="/assets/image/img-left-login.jpg" alt="" className={styles["img-left"]} />
            </div>
            <div className={styles["right"]}>
              <div className={styles["form"]}>
                <div className={styles["form"]} id="form-1">
                  <div className={styles["desc"]} style={{fontSize:"100%"}}>
                    <p className={styles["heading"]}>Sign in</p>
                    <h2>If you don't have any account</h2>
                    <Link >Register here !</Link>
                  </div>
                  <div className={styles["form-group"]} >
                    <label className={styles["form-label"]}>Email</label>
                    <div className={styles["input"]}>
                      <i className={styles["fa fa-envelope"]} aria-hidden="true" />
                      <input id="email" name="username" type="text" placeholder="Enter your email addresss" className={styles["form-control"]} 
                      value={this.props.username} onChange={(e)=>{this.props.onChange(e)}}
                      />
                    </div>
                    <span className={styles["form-message"]} />
                  </div>
                  <div className={styles["form-group"]}>
                    <label className={styles["form-label"]}>Mật khẩu</label>
                    <div className={styles["input"]}>
                      <i className={styles["fa fa-lock"]} aria-hidden="true" />
                      <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" className={styles["form-control" ]}
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
                    <label className={styles["form-label connect"]}>or connect with</label>
                    <div className={styles["items"]}>
                      <button type="button" className={styles["item fb"]}>
                        <img src="/assets/image/icons/facebook.png" alt="Avatar" className={styles["img-item" ]}/>
                      </button>
                      <button type="button" className={styles["item gg"]}>
                        <img src="/assets/image/icons/google.png" alt="" className={styles["img-item"]} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default LoginForm
