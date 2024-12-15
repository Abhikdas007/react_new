import React from 'react'
import phoneImg from '../assets/images/phone.png'

function ContentStart() {
    return (
        <>
            <section className="content">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="title">
                                <h6 className="third-color mb-3">You can trust us</h6>
                                <h2 className="mb-4">We Can<br/>Make Your Design</h2>
                                <p>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitu eleifend in maximus metus sollicitudin.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 wow fadeInRight">
                            <div className="content-image">
                                <img src={phoneImg} alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContentStart