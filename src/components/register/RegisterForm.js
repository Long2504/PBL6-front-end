import { Component } from "react";
import styles from '../../assets/appstyle/register.module.css'

class RegisterForm extends Component {

  
  render() {
      return (
          <div className={styles["main"]}>
            <div className={styles["left"]}>
              <img 
                src="/assets/image/home.jpg" 
                alt="" 
                className={styles["img-left"]} 
              />
            </div>
            <div className={styles["right"]} >
              <div className={styles["desc"]}>
                <p>Chào mừng bạn đến với Computer Store LVKN </p>
              </div>
              <div className={styles["form"]}>
                <div className={styles["input"] + ' ' + styles["email"]}>
                  <input 
                    id={styles["email"]} 
                    className={this.props.error.username.length > 0 ? styles["is-invaid"] : ''}
                    name="username" 
                    type="email" 
                    placeholder="Nhập email của bạn" 
                    value={
                      this.props.username
                    } 
                    onChange={(e)=>{this.props.onChange(e)}}
                    onBlur={(e)=> {this.props.onBlur(e)}}
                  />
                  <p >{this.props.error.username}</p>
                </div>
                <div className={styles["input"]  + ' ' +  styles["name"]}>
                  <input 
                    id={styles["name"]} 
                    className={this.props.error.name.length > 0 ? styles["is-invaid"] : ''}
                    name="name" 
                    type="text" 
                    placeholder="Nhập tên của bạn" 
                    value={
                      this.props.name
                    } 
                    onChange={(e)=>{this.props.onChange(e)}}
                    onBlur={(e)=> {this.props.onBlur(e)}}
                  />
                  <p >{this.props.error.name}</p>
                </div>

                <div className={styles["input"] + ' ' + styles["phoneNumber"]} >
                  <input 
                    id={styles["phoneNumber"]} 
                    className={this.props.error.phoneNumber.length > 0 ? styles["is-invaid"] : ''}
                    name="phoneNumber" 
                    type="text" 
                    placeholder="Nhập số điện thoại của bạn" 
                    value={
                      this.props.phoneNumber
                    } 
                    onChange={(e)=>{ this.props.onChange(e) }}
                    onBlur={(e)=> {this.props.onBlur(e)}}
                  />
                  <p >{this.props.error.phoneNumber}</p>
                </div>
               
                <div className={styles["birthday"]} >
                  <label >Date Birth</label>
                  <div className={styles["date"]}>
                    <select name="day">
                      {this.props.day}
                    </select>
                    <select name="month">
                      {this.props.month}
                    </select>
                    <select name="year">
                      {this.props.year}
                    </select>
                  </div>

                </div>

                <div className={styles["gender"]}>
                  <label >Gender</label>
                  <div className={styles["sex"]}>
                    <label>Nam</label>
                    <input 
                      type="radio"
                      name="sex"
                      value={1} 
                    ></input>
                  </div>
                  <div className={styles["sex"]}>
                    <label>Nữ</label>
                    <input 
                      type="radio"
                      name="sex"
                      value={2} 
                    ></input>
                  </div>
                  <div className={styles["sex"]}>
                    <label>Khác</label>
                    <input 
                      type="radio"
                      name="sex"
                      value={3} 
                    ></input>
                  </div>
                </div>
             
                <div className={styles["input"] + ' ' + styles["address"]}>
                  <input 
                    id={styles["address"]} 
                    className={this.props.error.address.length > 0 ? styles["is-invaid"] : ''}
                    name="address" 
                    type="text" 
                    placeholder="Nhập địa chỉ của bạn" 
                    value={this.props.address}
                    onChange={(e)=>{ this.props.onChange(e)}}
                    onBlur={(e)=> {this.props.onBlur(e)}}
                  />
                  <p >{this.props.error.address}</p>
                </div>
               
                <div className={styles["input"] + ' ' + styles["password"]} >
                  <input 
                    id={styles["password"]} 
                    name="password" 
                    type="password" 
                    placeholder="Nhập mật khẩu của bạn" 
                    className={this.props.error.password.length > 0 ? styles["is-invaid"] : ''}
                    value={this.props.password}
                    onChange={(e)=>{ this.props.onChange(e) }}
                    onBlur={(e)=> {this.props.onBlur(e)}}
                  />
                  <p >{this.props.error.password}</p>

                </div>

                <div className={styles["input"] + ' ' + styles["confirm-password"]} >
                  <input 
                    id={styles["confirm-password"]} 
                    className={this.props.error.confirmpassword.length > 0 ? styles["is-invaid"] : ''}
                    name="confirmpassword" 
                    type="password" 
                    placeholder="Xác nhận lại mật khẩu" 
                    value={this.props.confirmpassword}
                    onChange={(e)=>{ this.props.onChange(e)}}
                    onBlur={(e)=> {this.props.onBlur(e)}}
                  />
                  <p >{this.props.error.confirmpassword}</p>
                </div>
                
                <div className={styles["form-submit"]}>
                    <div className={styles["btn-login"]}>
                        <button 
                          onClick={this.props.handleSubmit}
                        >
                          OK
                        </button>
                    </div>
                </div>
              </div>

            </div>
          </div>
      )
  }
}

export default RegisterForm;