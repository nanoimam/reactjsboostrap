import React, {Component} from 'react';
class Home extends Component{
    render(){
        return(
        <div className="slider">
            <div className="container sliderimage">
                <div className="row">
                <img className="img-fluid rounded slide " alt="Responsive image" src={require('../gambar/Cashback_Rumah_Ceria_melalui_LinkajaHome_Page_846x400_D.jpg')}/>
                </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-danger danger" role="alert">
                                <p className="text-white text-center">Berlangganan IndiHome bisa dapat internet cepat, nelpon rumah sepuasnya dan nonton beragam konten terbaik di layar TV interaktif</p>
                            </div>
                        </div>
                    </div>
                </div>
        
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                
                                <img className="img-fluid d-block w-100" src={require('../gambar/Cashback_Rumah_Ceria_melalui_LinkajaHome_Page_846x400_D.jpg')}/>
                            </div>
                            <div className="carousel-item">
                            <img className="img-fluid d-block w-100" src={require('../gambar/Cashback_Rumah_Ceria_melalui_LinkajaHome_Page_846x400_D.jpg')}/>
                            </div>
                            <div className="carousel-item">
                            <img className="img-fluid d-block w-100" src={require('../gambar/Home-Page-Web-Minipack-Shopee_D.jpg')}/>
                            </div>

                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">previous</span>
                                </a>

                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">next</span>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid rounded slide " alt="Responsive image" src={require('../gambar/Home-Page-Web-Minipack-Shopee_D.jpg')}/>

                    <img className="img-fluid rounded slide " alt="Responsive image" src={require('../gambar/ree.jpg')}/>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default Home;