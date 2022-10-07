import { Component } from "react";
import '../../assets/appstyle/register.css'

class RegisterForm extends Component {
    render() {
        return (
            <div className="main">
                <div className="left">
                    <img src="/assets/image/img-left-login.jpg" alt="" className="img-left" />
                </div>
                <div className="right">
                    <div className="form">
                        <form action method="POST" className="form" id="form-1">
                            <div className="desc">
                                <h2 className="heading">Sign up</h2>
                                <p>If you already have an account register</p>
                                <em>You can</em>
                                <a href>Login here !</a>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <div className="input">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <input id="email" name="email" type="text" placeholder="Enter your email addresss" className="form-control" />
                                </div>
                                <span className="form-message" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Mật khẩu</label>
                                <div className="input">
                                    <i className="fa fa-lock" aria-hidden="true" />
                                    <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" className="form-control" />
                                </div>
                                <span className="form-message" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Mật khẩu</label>
                                <div className="input">
                                    <i className="fa fa-lock" aria-hidden="true" />
                                    <input type="password" placeholder="Nhập lại mật khẩu" className="form-control" />
                                </div>
                                <span className="form-message" />
                            </div>
                            <button className="btn-submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterForm;