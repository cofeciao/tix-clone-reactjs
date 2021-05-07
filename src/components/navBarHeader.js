import React, {Component} from 'react';
import './App.scss';

class NavBarHeader extends Component {
    render() {
        return (
            <section className="top-header">
                <div className="row">
                    <div className="col-1">
                        <div className="logo-tix">
                            <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="logo-tix"/>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="menu-top-header">
                            <ul>
                                <li><a href="#">Lịch chiếu</a></li>
                                <li><a href="#">Cụm rạp</a></li>
                                <li><a href="#">Tin tức</a></li>
                                <li><a href="#">Ứng dụng</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="login">
                            <img src="https://tix.vn/app/assets/img/avatar.png" alt="avatar-login-logo"/>
                                <a href="#">Đăng nhập</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NavBarHeader;