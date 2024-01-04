import React from "react";
import "../css/footer.css";
class Footer extends React.Component{
    render(){
        return(
            <footer className="text-center text-lg-start text-white">
                <div className="container p-4 pb-0">
                    <section className="footer-top mr-3">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 pl-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    BSll Fashion
                                </h6>
                                <p className="text-white">Fashion is part of the daily air and it changes all the time, with all the events. You can see and feel everything in clothes.</p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p><a className="text-white">New Arrivals</a></p>
                                <p><a className="text-white">Best Selling</a></p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <p><a className="text-white">Your Account</a></p>
                                <p><a className="text-white">Your Account</a></p>
                                <p><a className="text-white">Your Account</a></p>
                                <p><a className="text-white">Your Account</a></p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 mr-5">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p className="text-white"><i className="text-warning fa fa-home mr-3"></i> Phnom Penh, Cambodia</p>
                                <p className="text-white"><i className="text-danger fa fa-envelope mr-3"></i> info@gmail.com</p>
                                <p className="text-white"><i className="text-info fa fa-phone mr-3"></i> + 01 234 567 89</p>
                                <p className="text-white"><i className="text-white fa fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </section>
                    <hr className="my-3"/>
                    <section className="p-3 pt-0">
                        <div className="row d-flex ">
                            <div className="col-md-9 col-lg-9">
                                <p className="text-white">
                                    © 2023 Copyright:
                                    <a className="text-white" href="http://localhost:3000/"> BS2L Fashion, Online Shop</a>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-3 ml-lg-0 text-center text-md-start">
                                <a className="btn btn-outline-light btn-floating m-2 mt-0 mb-0" role="button">
                                    <i className="fa fa-facebook-f text-primary"></i>
                                </a>
                                <a className="btn btn-outline-light btn-floating m-2 mt-0 mb-0" role="button">
                                    <i className="fa fa-twitter text-info"></i>
                                </a>
                                <a className="btn btn-outline-light btn-floating m-2 mt-0 mb-0" role="button">
                                    <i className="fa fa-google text-warning"></i>
                                </a>
                                <a className="btn btn-outline-light btn-floating m-2 mt-0 mb-0" role="button">
                                    <i className="fa fa-instagram text-danger"></i>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        )
    }
}

export default Footer;