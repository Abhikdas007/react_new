import React from 'react'

function Price() {
    return (
        <>
            <section id="price" className="bg-light">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 text-center wow fadeIn">
                            <div className="title d-inline-block">
                                <h6 className="mb-3">Most flexible pricing</h6>
                                <h2 className="gradient-text1 mb-3">Easy Pricing</h2>
                                <p>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div id="price-slider" className="owl-carousel owl-item wow fadeInUp">

                            <div className="price-item item text-start">
                                <h4 className="alt-font gradient-text1 d-inline-block font-weight-500 mb-4">Basic</h4>
                                <div className="price-tag d-flex align-items-center">
                                    <div className="price alt-font text-dark-gray">
                                        <h3 className="currency"><span className="sign">$</span>29</h3>
                                        <span className="month">MONTH</span>
                                    </div>
                                    <p className="price-text no-margin">It has survived not only five centu but also the leap electronic.</p>
                                </div>
                                <ul className="packages">
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Full access</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Unlimited Bandwidth</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Powerful Admin Panel</li>
                                    <li><i className="fa fa-times" aria-hidden="true"></i>Email Accounts</li>
                                    <li><i className="fa fa-times" aria-hidden="true"></i>8 Free Forks Every Months</li>
                                </ul>
                                <a href="/" className="btn btn-large btn-gradient btn-rounded w-100">Buy Now</a>
                            </div>

                            <div className="price-item text-start">
                                <h4 className="alt-font d-inline-block font-weight-500 mb-4">Popular</h4>
                                <div className="price-tag d-flex align-items-center">
                                    <div className="price alt-font text-dark-gray">
                                        <h3 className="currency"><span className="sign">$</span>49</h3>
                                        <span className="month">MONTH</span>
                                    </div>
                                    <p className="price-text no-margin">It has survived not only five centu but also the leap electronic.</p>
                                </div>
                                <ul className="packages">
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Full access</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Unlimited Bandwidth</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Powerful Admin Panel</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Email Accounts</li>
                                    <li><i className="fa fa-times" aria-hidden="true"></i>8 Free Forks Every Months</li>
                                </ul>
                                <a href="/" className="btn btn-large btn-black btn-rounded w-100">Buy Now</a>
                            </div>

                            <div className="price-item text-start">
                                <h4 className="alt-font gradient-text1 d-inline-block font-weight-500 mb-4">Advance</h4>
                                <div className="price-tag d-flex align-items-center">
                                    <div className="price alt-font text-dark-gray">
                                        <h3 className="currency"><span className="sign">$</span>99</h3>
                                        <span className="month">MONTH</span>
                                    </div>
                                    <p className="price-text no-margin">It has survived not only five centu but also the leap electronic.</p>
                                </div>
                                <ul className="packages">
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Full access</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Unlimited Bandwidth</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Powerful Admin Panel</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Email Accounts</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>8 Free Forks Every Months</li>
                                </ul>
                                <a href="/" className="btn btn-large btn-gradient btn-rounded w-100">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Price