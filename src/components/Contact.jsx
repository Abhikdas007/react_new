import React from 'react'

function Contact() {
    return (
        <>
            <section>
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="title d-inline-block">
                                <h6 className="mb-3 third-color">Lorem ipsum dolor sit amet</h6>
                                <h2>Let's Get In Touch</h2>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="row">

                            <div className="col-sm-12" id="result"></div>

                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="First Name:" required="" id="first_name" name="first_name" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Last Name:" required="" id="last_name" name="last_name" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" type="email" placeholder="Email:" required="" id="email" name="email" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" type="tel" placeholder="Phone:" id="phone" name="phone" />
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Message" id="message" name="message"></textarea>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-large btn-gradient btn-rounded mt-4" id="submit_btn"><i className="fa fa-spinner fa-spin mr-2 d-none" aria-hidden="true"></i> <span>Contact Now</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact