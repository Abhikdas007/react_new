import React from 'react'
import appImg from '../assets/images/iphone-img.png';

function AppDesing() {
    return (
        <>
            <section>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-md-12 text-center wow fadeIn">
                            <div className="title d-inline-block">
                                <h6 className="mb-3">Most reliable application</h6>
                                <h2 className="gradient-text1 mb-3">Mobile App Design</h2>
                                <p>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row align-items-center text-center">

                        <div className="col-md-4 wow fadeInLeft">
                            
                            <div className="app-feature">
                                <i className="fa fa-diamond gradient-text1" aria-hidden="true"></i>
                                <h4 className="mb-3">Theme Options</h4>
                                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh.</p>
                            </div>
                        
                            <div className="app-feature">
                                <i className="fa fa-edit gradient-text1" aria-hidden="true"></i>
                                <h4 className="mb-3">Customization</h4>
                                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh.</p>
                            </div>
                        </div>

                        
                        <div className="col-md-4 wow fadeInUp">
                            
                            <div className="app-image">
                                <img src={appImg} alt="image"/>
                                    {/* <div id="app-slider" className="owl-carousel owl-theme">
                                        <div className="item">
                                            <img src="images/iphone-slide1.jpg" alt="">
                                        </div>
                                        <div className="item">
                                            <img src="images/iphone-slide2.jpg" alt="">
                                        </div>
                                        <div className="item">
                                            <img src="images/iphone-slide3.jpg" alt="">
                                        </div>
                                    </div> */}
                            </div>
                        </div>

                        <div className="col-md-4 wow fadeInRight">
                            
                            <div className="app-feature">
                                <i className="fa fa-code gradient-text1" aria-hidden="true"></i>
                                <h4 className="mb-3">Powerful Code</h4>
                                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh.</p>
                            </div>
                            
                            <div className="app-feature">
                                <i className="fa fa-folder-open-o gradient-text1" aria-hidden="true"></i>
                                <h4 className="mb-3">Documentation</h4>
                                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit Suspendisse in orci enim gravida nibh.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default AppDesing