import React from 'react'

function Address() {
    return (
        <>
            <section id="contact" className="p-0">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 p-0">
                            <div className="address-box title mb-0 bg-img4">

                                <div className="bg-overlay gradient-bg1 opacity-8"></div>
                                <div className="address-text text-center text-white position-relative wow fadeInUp">
                                    <h6 className="mb-3">Lorem ipsum dolor sit amet consectetur</h6>

                                    <h2 className="mb-4">Wexim Agency, Newyork</h2>

                                    <p className="mb-3 text-white">123 Stree New York City , United States Of America. </p>

                                    <p className="mb-3 text-white">Office Telephone : 001 01085379709<br />
                                        Mobile : 001 63165370895 </p>

                                    <p className="mb-3 text-white">mail : admin@website.com<br />
                                        Inquiries : email@website.com</p>

                                    <p className="mb-3 text-white">Mon-Fri: 9am to 6pm</p>

                                    <div className="address-social">
                                        <ul className="list-unstyled">
                                            <li><a className="facebook-text-hvr" href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a className="twitter-text-hvr" href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a className="google-text-hvr" href="/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                            <li><a className="linkedin-text-hvr" href="/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                            <li><a className="instagram-text-hvr" href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0">
                            <div id="map" className="half-map bg-img-map">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Address