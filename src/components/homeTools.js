import React, {Component} from 'react';
import './App.scss'
class HomeTools extends Component {
    render() {
        return (
            <section className="buy-now">
                <div className="container">
                    <div className="row">
                        <div className="selectFilm selectItem">
                            Phim
                        </div>
                        <div className="selectCinema selectItem">
                            Rạp
                        </div>
                        <div className="selectDate selectItem">
                            Ngày Xem
                        </div>
                        <div className="selectSession selectItem">
                            Suất Chiếu
                        </div>
                        <div className="selectMuangay selectItem">
                            <a href="#" className="btnMuangay">
                            Mua Vé Ngay
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeTools;