import { Component } from "react";
import '../../assets/appstyle/login.css'
class LoginForm extends Component{
    render(){
        return(
            <div className="main">
            <div className="left">
              <img src="/assets/image/img-left-login.jpg" alt="" className="img-left" />
            </div>
            <div className="right">
              <div className="form">
                <form action method="POST" className="form" id="form-1">
                  <div className="desc">
                    <h2 className="heading">Sign in</h2>
                    <p>If you don't have an account register</p>
                    <em>You can</em>
                    <a href>Register here !</a>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <div className="input">
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <input id="email" name="email" type="text" placeholder="Enter your email addresss" className="form-control" 
                      value={this.props.username} onChange={(e)=>{this.props.onChange(e)}}
                      />
                    </div>
                    <span className="form-message" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Mật khẩu</label>
                    <div className="input">
                      <i className="fa fa-lock" aria-hidden="true" />
                      <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" className="form-control" 
                        value={this.props.password} onChange={(e)=>{this.props.onChange(e)}}
                      />
                    </div>
                    <span className="form-message" />
                  </div>
                  <div className="remember">
                    <input type="checkbox" />
                    <label htmlFor>Remember</label>
                    <a href>Quên mật khẩu</a>
                  </div>
                  <div className="buttons-login">
                    <button className="form-submit">Login</button>
                    <label className="form-label connect">or connect with</label>
                    <div className="items">
                      <button type="button" className="item fb">
                        <img src="/assets/image/icons/facebook.png" alt="Avatar" className="img-item" />
                      </button>
                      <button type="button" className="item gg">
                        <img src="/assets/image/icons/google.png" alt="" className="img-item" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
    }
}

export default LoginForm
