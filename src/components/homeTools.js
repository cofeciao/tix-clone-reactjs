import React, {Component} from 'react';
import './App.scss'
class HomeTools extends Component {
    render() {
        return (
            <section className="buy-now">
                <div className="container">
                    <div className="row">
                        <div className="col-3 border-r">
                            <div className="selectFilm">
                                Phim
                            </div>
                        </div>
                        <div className="col-2 border-r">
                            <div className="selectCinema">
                                Rạp
                            </div>
                        </div>
                        <div className="col-2 border-r">
                            <div className="selectDate">
                                Ngày Xem
                            </div>
                        </div>
                        <div className="col-2 border-r">
                            <div className="selectSession">
                                Suất Chiếu
                            </div>
                        </div>
                        <div className="col-2 border-r">
                            <a href="#">
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