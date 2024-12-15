import React from 'react'
import blogImg_1 from '../assets/images/blog-image1.jpg';
import blogImg_2 from "../assets/images/blog-image2.jpg";

function Blog() {
    return (
        <>
            <section id="blog" className="bg-light">
                <div className="container">

                    <div className="row align-items-center mb-5">
                        <div className="col-md-6 order-md-2 wow fadeInRight">

                            <div className="blog-text">
                                <h6 className="third-color mb-3">January 14, 2019</h6>
                                <h2>Living Your Dreams</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodt temp to the incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis a nostr a exercitation ullamco laboris nisi ut aliquip.</p>
                                <a href="/" className="btn btn-large btn-gradient btn-rounded mt-4">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="blog-image wow hover-effect fadeInLeft">
                                <img src={blogImg_1} alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-6 wow fadeInLeft">

                            <div className="blog-text">
                                <h6 className="third-color mb-3">August 20, 2019</h6>
                                <h2>Design Your Website</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodt temp to the incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis a nostr a exercitation ullamco laboris nisi ut aliquip.</p>
                                <a href="/" className="btn btn-large btn-gradient btn-rounded mt-4">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="blog-image text-end hover-effect wow fadeInRight">
                                <img src={blogImg_2} alt="image" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Blog